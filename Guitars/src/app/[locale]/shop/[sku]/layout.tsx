import SkuContainer from "./SkuContainer";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Product",
  description: "Product page",
};

export default function product({
  params,
  routes,
}: {
  params: Promise<{ sku: string; locale: string }>;
  routes: React.ReactNode;
}) {
  return (
    <Suspense fallback={null}>
      <SkuContainer routes={routes} params={params} />;
    </Suspense>
  );
}
