import About from "@views/About/About";
import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";

export default async function about({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dictionary: Dictionary = await getDictionary(locale);

  return <About dict={dictionary} />;
}
