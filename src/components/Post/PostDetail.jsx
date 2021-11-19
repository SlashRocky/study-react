import Head from "next/head";
import { useRouter } from "next/router";

import { useFetch } from "src/hooks/useFetch";
import { UserByUserId } from "src/components/User/UserByUserId";
import { CommentListByPostId } from "src/components/Comment/CommentListByPostId";
import { BASE_ENDPOINT } from 'src/utils/const';

export const PostDetail = () => {
  const router = useRouter();

  const { data, error, isLoading } = useFetch(
    router.query.id ?
    `${BASE_ENDPOINT}/posts/${router.query.id}`
    : null
  );

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
      <UserByUserId id={data.userId} />
      <h1 className="text-3xl font-bold">{data?.title}</h1>
      <p className="text-xl text-gray-500 mt-2">{data?.body}</p>
      <h2 className="text-xl font-bold mt-10">コメント一覧</h2>
      <div className="mt-2">
        <CommentListByPostId id={data.id} />
      </div>
    </div>
  );
}