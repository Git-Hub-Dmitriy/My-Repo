import ProductInformation from "@views/Product/routing/ProductInformation/ProductInformation";
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
      <ProductInformation sku={sku} locale={locale} dict={dict.pages.product} />
    </>
  );
}
