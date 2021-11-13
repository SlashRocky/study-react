import Head from "next/head";

import { usePost } from "src/hooks/usePost";
import { UserByUserId } from "src/components/User/UserByUserId";
import { CommentsByPostId } from "src/components/Comments/CommentsByPostId";

export const Post = () => {
  const { data, error, isLoading } = usePost();

  if(isLoading) {
    return <div>ローディング中です。</div>;
  }

  if(error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
      <UserByUserId id={data.userId} />
      <CommentsByPostId id={data.id} />
    </div>
  );
}