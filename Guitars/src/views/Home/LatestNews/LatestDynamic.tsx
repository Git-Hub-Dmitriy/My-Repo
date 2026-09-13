import LatestNews from "./LatestNews";
import { PageDict } from "@interfaces/dictionary.types";
import { cacheLife } from "next/cache";
import getPosts from "@services/internal/getPosts";

interface PropsLatestDynamic {
  dict: PageDict<"home">["latestNews"];
  locale: string;
}

export default async function LatestDynamic(props: PropsLatestDynamic) {
  "use cache";
  cacheLife("hours");

  const posts = await getPosts({ locale: props.locale, amount: 10 });

  return <LatestNews blogs={posts} dict={props.dict} />;
}
