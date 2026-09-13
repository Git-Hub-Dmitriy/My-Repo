import { prisma } from "@lib/prisma";
import { cacheLife, cacheTag } from "next/cache";

interface OptionGetPosts {
  locale: string;
  amount: number;
}

export default async function getPosts({ locale, amount }: OptionGetPosts) {
  "use cache";
  cacheLife("hours");
  cacheTag("posts");

  const posts = await prisma.post.findMany({
    take: amount,
    include: {
      translations: {
        where: { locale: locale },
      },
    },
  });

  const flatPosts = posts.map((post) => {
    const { translations, ...data } = post;
    const { locale: _loc, id: _id, ...dataTrans } = translations[0];

    return {
      ...data,
      ...dataTrans,
    };
  });
  return flatPosts;
}
