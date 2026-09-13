import { Metadata } from "next";
import Home from "@views/Home/Home";
import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";
import { Suspense } from "react";
import SkeletonOurProducts from "@views/Home/OurProducts/SleketonOurProducts/SkeletonOurProducts";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default async function homeLayout({
  params,
  products,
}: {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
  products: React.ReactNode;
}) {
  const { locale } = await params;
  const dict: Dictionary = await getDictionary(locale);
  const dynamicSlot = (
    <Suspense fallback={<SkeletonOurProducts />}>{products}</Suspense>
  );

  return (
    <>
      <Home dict={dict} locale={locale} product={dynamicSlot} />
    </>
  );
}
