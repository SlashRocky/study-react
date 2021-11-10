import Link from "next/link";
import { useRouter } from "next/router";

import { useComments } from "src/hooks/useFetchArray";

export const Comments = () => {
  const { data, error, isLoading, isEmpty } = useComments();

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

  if (isEmpty) {
    return (
      <div>データは空です。</div>
    );
  }

  return (
    <div>
      <ol>
        {
          data.map((comment) => {
            return(
              <li key={comment.id}>
                <Link href={`/comments/${comment.id}`}>
                  <a>{comment.body}</a>
                </Link>
              </li>
            );
          })
        }
      </ol>
    </div>
  );
}