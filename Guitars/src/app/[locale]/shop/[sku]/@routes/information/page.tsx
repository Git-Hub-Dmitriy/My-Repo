import ProductInformation from "@views/Product/LayoutRoutes/routing/ProductInformation/ProductInformation";
import SkeletonProductInformation from "@views/Product/LayoutRoutes/routing/ProductInformation/SkeletonProductInformation/SkeletonProductInformation";
import { Suspense } from "react";
import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";

export default async function information({
  params,
}: {
  params: Promise<{ sku: string; locale: string }>;
}) {
  const { locale, sku } = await params;
  const dict: Dictionary = await getDictionary(locale);

  return (
    <>
      <Suspense fallback={<SkeletonProductInformation />}>
        <ProductInformation
          sku={sku}
          locale={locale}
          dict={dict.pages.product}
        />
      </Suspense>
    </>
  );
}
