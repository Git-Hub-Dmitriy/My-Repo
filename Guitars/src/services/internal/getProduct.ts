import { prisma } from "@lib/prisma";
import { cacheLife, cacheTag } from "next/cache";

interface GetProductOptions {
  sku: string;
  locale: string;
  reviews?: boolean;
  categories?: boolean;
}

export default async function getProduct({
  sku,
  locale,
  reviews = false,
  categories = false,
}: GetProductOptions) {
  "use cache";
  cacheLife("hours");

  cacheTag("products", `product-${sku}`);

  const product = await prisma.product.findUnique({
    where: {
      sku: sku,
    },
    include: {
      translations: {
        where: { locale: locale },
      },
      reviews: reviews,
      categories: {
        include: {
          category: categories,
        },
      },
    },
  });

  if (!product) return null;

  const { translations, ...data } = product;
  const translation = translations[0] ?? null;

  return {
    ...data,
    translation,
    price: product.price.toNumber(),
    oldPrice: product.oldPrice ? product.oldPrice.toNumber() : null,
  };
}
