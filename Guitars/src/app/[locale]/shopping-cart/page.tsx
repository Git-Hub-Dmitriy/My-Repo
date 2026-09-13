import ShoppingCart from "@components/ShoppingCart/ShoppingCart";
import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";

export default async function shoppingCart({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const translate: Dictionary = await getDictionary(locale);
  return (
    <>
      <ShoppingCart />
    </>
  );
}
