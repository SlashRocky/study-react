import Link from "next/link";

import { useFetchArray } from "src/hooks/useFetchArray";
import { BASE_ENDPOINT } from 'src/utils/const';

export const PostList = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(`${BASE_ENDPOINT}/posts`);

  if (isLoading) {
    return <div>ローディング中です。</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空です。</div>;
  }

  return (
    <ul className="space-y-4">
      {
        data.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a className="block group">
                  <h1 className="text-xl font-bold group-hover:text-blue-500">{post.title}</h1>
                  <p className="text-lg text-gray-500 group-hover:text-blue-400">{post.body}</p>
                </a>
              </Link>
            </li>
          );
        })
      }
    </ul>
  );
}