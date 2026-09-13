import ProductDescription from "@views/Product/routing/ProductDescription/ProductDescription";

export default async function description({
  params,
}: {
  params: Promise<{ sku: string; locale: string }>;
}) {
  const { locale, sku } = await params;

  return <ProductDescription sku={sku} locale={locale} />;
}
