import Post from "@views/Post/Post";
import { Suspense, use } from "react";

function PostContent({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = use(params);

  return <Post id={id} />;
}

export default function post({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  return (
    <Suspense fallback={null}>
      <PostContent params={params} />
    </Suspense>
  );
}
