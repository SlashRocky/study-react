import Link from "next/link";

import { usePostsByUserId } from "src/hooks/useFetchArray";

export const PostsByUserId = (props) => {
  const { data, error, isLoading, isEmpty } = usePostsByUserId(props.userId);

  if (isLoading)  {
    return(
      <div>データをロード中です。</div>
    );
  }

  if (error) {
    return(
      <div>{error.message}</div>
    );
  }

  if (isEmpty) {
    return(
      <div>データは空です。</div>
    );
  }

  return(
    <div>
      <h2>投稿</h2>
      <ol>
        {
          data.map((post) => {
            return(
              <li key={post.id}>
                <Link href={`/posts/${post.id}`}>
                  <a>
                    <p>{post.title}</p>
                  </a>
                </Link>
              </li>
            );
          })
        }
      </ol>
    </div>
  );
}