import ProductDescription from "@views/Product/LayoutRoutes/routing/ProductDescription/ProductDescription";
import { Suspense } from "react";
import SkeletonProductDescription from "@views/Product/LayoutRoutes/routing/ProductDescription/SkeletonProductDescription/SkeletonProductDescription";

export default async function description({
  params,
}: {
  params: Promise<{ sku: string; locale: string }>;
}) {
  const { sku, locale } = await params;

  return (
    <>
      <Suspense fallback={<SkeletonProductDescription />}>
        <ProductDescription sku={sku} locale={locale} />
      </Suspense>
    </>
  );
}
