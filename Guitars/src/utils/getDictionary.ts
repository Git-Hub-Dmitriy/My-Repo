import { cacheLife } from "next/cache";
import { dictionaries } from "@data/dataLanguages";

type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: string) => {
  "use cache";
  cacheLife("weeks");
  const loader = dictionaries[locale as Locale];

  if (!loader) {
    return dictionaries.en();
  }
  return loader();
};
