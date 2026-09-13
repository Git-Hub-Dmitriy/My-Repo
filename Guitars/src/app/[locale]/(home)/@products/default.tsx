import { Prisma } from "@generated/prisma/client";
import { prisma } from "@lib/prisma";
import ProductCarousel from "@views/Home/OurProducts/ProductCarousel/ProductCarousel";
import Card from "@components/Card/Card";
import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";

export default async function DefaultProducts({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict: Dictionary = await getDictionary(locale);

  const rawProducts: Prisma.ProductGetPayload<{
    include: { translations: true };
  }>[] = await prisma.product.findMany({
    where: {
      groups: {
        has: "Featured",
      },
    },
    include: {
      translations: {
        where: { locale: locale },
      },
    },
  });
  const featuredProducts = rawProducts.map((product) => {
    const { translations, price, oldPrice, ...dataProduct } = product;
    const translation = translations[0];
    const {
      id: _tId,
      productId: _pId,
      locale: _loc,
      ...translationFields
    } = translation ?? {};
    return {
      ...dataProduct,
      price: price.toNumber(),
      oldPrice: oldPrice ? oldPrice.toNumber() : null,
      ...translationFields,
    };
  });

  return (
    <ProductCarousel>
      {featuredProducts.map((product) => (
        <Card
          dict={dict.components.buttons.btnAddCart}
          key={product.id}
          item={product}
        />
      ))}
    </ProductCarousel>
  );
}
