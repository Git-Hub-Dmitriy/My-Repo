import { Metadata } from "next";
import Home from "@views/Home/Home";
import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default async function home({
  params,
  products,
}: {
  params: Promise<{ locale: string }>;
  products: React.ReactNode;
}) {
  const { locale } = await params;
  const dict: Dictionary = await getDictionary(locale);

  return (
    <>
      <Home dict={dict} locale={locale} product={products} />
    </>
  );
}
