import ProductReviews from "@views/Product/routing/Reviews/ProductReviews";
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
      <ProductReviews
        sku={sku}
        locale={locale}
        dict={dict.pages.product.routes.reviews}
        dictComponent={dict.components.buttons.btnSubmit}
      />
    </>
  );
}
