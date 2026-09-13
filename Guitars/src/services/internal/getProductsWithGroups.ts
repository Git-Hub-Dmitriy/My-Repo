import { prisma } from "@lib/prisma";
import { cacheLife, cacheTag } from "next/cache";

interface OptionGroups {
  groups: string;
  locale: string;
}

export default async function getProductsWithGroups({
  groups,
  locale,
}: OptionGroups) {
  "use cache";
  cacheLife("hours");
  cacheTag("products-group", `products-${groups}`);

  const products = await prisma.product.findMany({
    where: {
      groups: {
        has: groups,
      },
    },
    include: {
      translations: {
        where: { locale: locale },
      },
    },
  });

  const result = products.map((product) => {
    const { translations, price, oldPrice, ...rest } = product;
    const { id: _id, locale: _loc, ...restFields } = translations[0] ?? {};

    return {
      ...rest,
      price: price.toNumber(),
      oldPrice: oldPrice?.toNumber() ?? null,
      ...restFields,
    };
  });

  return result;
}
