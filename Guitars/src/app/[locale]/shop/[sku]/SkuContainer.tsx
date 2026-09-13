import { getDictionary } from "@utils/getDictionary";
import { Dictionary } from "@interfaces/dictionary.types";
import Product from "@views/Product/Product";

export default async function SkuContainer({
  params,
  routes,
}: {
  params: Promise<{ locale: string; sku: string }>;
  routes: React.ReactNode;
}) {
  const { sku, locale } = await params;
  const translate: Dictionary = await getDictionary(locale);

  return (
    <Product translate={translate} sku={sku} locale={locale} routes={routes} />
  );
}
