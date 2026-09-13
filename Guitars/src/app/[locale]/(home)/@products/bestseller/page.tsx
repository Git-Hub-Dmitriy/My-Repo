import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";
import BestsellerProducts from "@views/Home/OurProducts/routing/BestsellerProducts";

export default async function bestseller({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict: Dictionary = await getDictionary(locale);

  return (
    <BestsellerProducts
      locale={locale}
      translate={dict.components.buttons}
      groups={"Bestseller"}
    />
  );
}
