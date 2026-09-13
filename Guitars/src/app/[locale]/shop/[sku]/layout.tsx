import Product from "@views/Product/Product";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Product",
  description: "Product page",
};
export default async function product({
  params,
  routes,
}: {
  params: Promise<{ sku: string; locale: string }>;
  routes: React.ReactNode;
}) {
  const dynamicSlots = <Suspense fallback={null}>{routes}</Suspense>;

  return (
    <>
      <Suspense fallback={null}>
        <Product routes={dynamicSlots} params={params} />
      </Suspense>
    </>
  );
}
