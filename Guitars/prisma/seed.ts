import { PrismaClient } from "../generated/prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";
import "dotenv/config";
import { seedProducts } from "@data/seedProducts";
import { seedPosts } from "@data/seedPosts";
import { categories } from "@data/seedCategories";
import { User } from "../generated/prisma/client";

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🚀 Запуск сид-скрипта...");

  const adminEmail = process.env.ADMIN_INITIAL_EMAIL;
  const adminPassword = process.env.ADMIN_INITIAL_PASSWORD;
  const adminName = "Main Admin";

  if (!adminPassword) {
    console.error("not found ADMIN_INITIAL_PASSWORD env");
    process.exit(1);
  }

  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  let admin: User;

  if (existingAdmin) {
    console.log(
      `ℹ️ Пользователь с email ${adminEmail} уже существует. Меняем его роль на ADMIN...`,
    );

    admin = await prisma.user.update({
      where: { email: adminEmail },
      data: { role: "ADMIN" },
    });
  } else {
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    admin = await prisma.user.create({
      data: {
        email: adminEmail,
        name: adminName,
        passwordHash: hashedPassword,
        role: "ADMIN",
      },
    });
  }

  console.log(`✅ Администратор успешно создан! ID: ${admin!.id}`);

  console.log("🚀 Создание Категорий...");
  const catalogGuitars = categories;

  const categoryIds: { [key: string]: number } = {};

  for (const item of catalogGuitars) {
    const mainCat = await prisma.category.create({
      data: {
        name: item.main,
      },
    });

    categoryIds[item.main] = mainCat.id;

    for (const subName of item.subs) {
      const subCat = await prisma.category.create({
        data: {
          parentId: mainCat.id,
          name: subName,
        },
      });
      categoryIds[subName] = subCat.id;
    }
  }
  console.log("✅ Все главные категории и их подкатегории успешно созданы!");

  console.log("🚀 Создание товаров");

  for (const prod of seedProducts) {
    const existingProduct = await prisma.product.findUnique({
      where: { sku: prod.sku },
    });

    if (!existingProduct) {
      const connectCategories = prod.categoryNames
        .map((name: string) => {
          const id = categoryIds[name];
          if (!id) {
            console.warn(
              `⚠️ Внимание: Категория "${name}" для товара ${prod.sku} не найдена в базе!`,
            );
            return null;
          }
          return { categoryId: id };
        })
        .filter((item): item is { categoryId: number } => item !== null);

      try {
        await prisma.product.create({
          data: {
            sku: prod.sku,
            price: prod.price,
            oldPrice:
              prod.oldPrice && Number(prod.oldPrice) > 0 ? prod.oldPrice : null,
            image: prod.image,
            size: prod.size,
            groups: prod.groups,
            categories: {
              create: connectCategories,
            },
            translations: {
              create: prod.translations,
            },
          },
        });
        console.log(
          `✅ Товар ${prod.sku} добавлен в категории: ${prod.categoryNames.join(", ")}`,
        );
      } catch (error) {
        console.error(`Ошибка на товаре: ${prod.sku}`);
        throw error;
      }
    } else {
      console.log(`ℹ️ Товар ${prod.sku} уже существует.`);
    }
  }

  console.log("🚀 Создание постов блога...");

  for (const post of seedPosts) {
    await prisma.post.create({
      data: {
        imageUrl: post.imageUrl,
        adminId: admin!.id,
        translations: {
          create: post.translations,
        },
      },
    });
  }

  console.log("✅ Посты успешно добавлены");

  console.log("🎉 База данных полностью укомплектована!");
}

main()
  .catch((e) => {
    console.error("❌ Ошибка при выполнении сида:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
