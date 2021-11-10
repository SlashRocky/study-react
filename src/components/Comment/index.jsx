import Head from "next/head";

import { useComment } from "src/hooks/useComment";

export const Comment = () => {
  const { comment, error, isLoading } = useComment();

  if (isLoading) {
    return(
      <div>ローディング中です。</div>
    );
  }

  if (error) {
    return(
      <div>{error.message}</div>
    );
  }

  return (
    <div>
      <Head>
        <title>{comment?.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{comment?.body}</h1>
      <ul>
        <li>{comment?.name}</li>
        <li>{comment?.email}</li>
      </ul>
    </div>
  );
}