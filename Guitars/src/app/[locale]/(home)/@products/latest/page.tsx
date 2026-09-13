import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";
import LatestProducts from "@views/Home/OurProducts/routing/LatestProducts";

export default async function latest({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict: Dictionary = await getDictionary(locale);

  return (
    <LatestProducts
      locale={locale}
      groups={"Latest"}
      translate={dict.components.buttons}
    />
  );
}
