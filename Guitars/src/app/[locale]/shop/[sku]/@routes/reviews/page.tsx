import ProductReviews from "@views/Product/LayoutRoutes/routing/Reviews/ProductReviews";
import SkeletonProductReviews from "@views/Product/LayoutRoutes/routing/Reviews/SkeletonProductReviews/SkeletonProductReviews";
import { Suspense } from "react";
import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";

export default async function reviews({
  params,
}: {
  params: Promise<{ sku: string; locale: string }>;
}) {
  const { sku, locale } = await params;
  const dict: Dictionary = await getDictionary(locale);

  return (
    <>
      <Suspense fallback={<SkeletonProductReviews />}>
        <ProductReviews
          sku={sku}
          locale={locale}
          dict={dict.pages.product.routes.reviews}
          dictComponent={dict.components.buttons.btnSubmit}
        />
      </Suspense>
    </>
  );
}
