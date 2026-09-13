import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";
import SpecialProducts from "@views/Home/OurProducts/routing/SpecialProducts";

export default async function special({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict: Dictionary = await getDictionary(locale);

  return (
    <SpecialProducts
      locale={locale}
      groups={"Special"}
      translate={dict.components.buttons}
    />
  );
}
