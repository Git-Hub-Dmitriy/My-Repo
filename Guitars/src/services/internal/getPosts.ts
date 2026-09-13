import { prisma } from "@lib/prisma";
import { cacheLife, cacheTag } from "next/cache";

interface OptionPosts {
  locale: string;
  id: number;
}

export default async function getPosts({ locale, id }: OptionPosts) {
  "use cache";
  cacheLife("hours");
  cacheTag("posts", `post-${id}`);

  const post = await prisma.post.findUnique({
    where: { id: id },
    include: {
      translations: { where: { locale: locale } },
      admin: true,
    },
  });

  if (!post) return null;

  const { admin, translations, ...data } = post;
  const translation = translations[0] ?? null;

  return {
    ...data,
    admin,
    translation,
  };
}
