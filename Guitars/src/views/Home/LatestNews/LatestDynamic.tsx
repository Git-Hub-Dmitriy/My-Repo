import { PageDict } from "@interfaces/dictionary.types";
import { cacheLife } from "next/cache";
import getPosts from "@services/internal/getPosts";
import dynamic from "next/dynamic";
const LatestNews = dynamic(() => import("./LatestNews"));
interface PropsLatestDynamic {
  translate: PageDict<"home">["latestNews"];
  locale: string;
}

export default async function LatestDynamic(props: PropsLatestDynamic) {
  "use cache";
  cacheLife("hours");

  const posts = await getPosts({ locale: props.locale, amount: 10 });

  return <LatestNews blogs={posts} translate={props.translate} />;
}
