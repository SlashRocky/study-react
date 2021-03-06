import Link from "next/link";

import { useFetchArray } from "src/hooks/useFetchArray";
import { BASE_ENDPOINT } from 'src/utils/const';

export const CommentListByPostId  = (props) => {
  const {
    data,
    error,
    isLoading,
    isEmpty
  } = useFetchArray(props.id ? `${BASE_ENDPOINT}/posts/${props.id}/comments` : null);

  if(isLoading) {
    return (
      <div>ローディング中です。</div>
    );
  }

  if(error) {
    return (
      <div>{error.message}</div>
    );
  }

  if(isEmpty) {
    return (
      <div>データは空です。</div>
    );
  }

  return (
    <div>
      <ul className="space-y-2">
        {
          data.map((comment) => {
            return(
              <li key={comment.id} className="border-b pb-2">
                <Link href={`/comments/${comment.id}`}>
                  <a className="block hover:text-blue-500">
                    <p>{comment.body}</p>
                  </a>
                </Link>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

