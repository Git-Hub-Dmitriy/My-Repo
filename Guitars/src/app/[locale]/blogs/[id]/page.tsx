import Post from "@views/Post/Post";

export default async function post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <Post id={id} />
    </>
  );
}
