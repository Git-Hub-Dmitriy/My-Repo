import Post from "@views/Post/Post";
import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";

export default async function post({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { locale, id } = await params;
  const translate: Dictionary = await getDictionary(locale);

  return <Post id={id} />;
}
