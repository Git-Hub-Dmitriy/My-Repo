import { prisma } from "@lib/prisma";
import { Prisma } from "@generated/prisma/client";
import dynamic from "next/dynamic";
const LatestNews = dynamic(() => import("./LatestNews"));
import { PageDict } from "@interfaces/dictionary.types";

interface PropsLatestDynamic {
  dict: PageDict<"home">["latestNews"];
  locale: string;
}

export default async function LatestDynamic(props: PropsLatestDynamic) {
  const rawBlogs: Prisma.PostGetPayload<{ include: { translations: true } }>[] =
    await prisma.post.findMany({
      include: {
        translations: {
          where: { locale: props.locale },
        },
      },
    });

  const blogs = rawBlogs.map((post) => {
    const { translations, ...dataPost } = post;
    const translation = translations[0];
    const { id: _tId, locale: _loc, ...translationFields } = translation;
    return {
      ...dataPost,
      ...translationFields,
    };
  });

  return <LatestNews blogs={blogs} dict={props.dict} />;
}
