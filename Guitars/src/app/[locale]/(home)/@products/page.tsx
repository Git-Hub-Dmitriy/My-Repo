import FeaturedProducts from "@views/Home/OurProducts/routing/FeaturedProducts";
import { getDictionary } from "@utils/getDictionary";
import { Dictionary } from "@interfaces/dictionary.types";

export default async function featured({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict: Dictionary = await getDictionary(locale);

  return (
    <FeaturedProducts
      translate={dict.components.buttons}
      locale={locale}
      groups={"Featured"}
    />
  );
}
