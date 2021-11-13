
import Link from "next/link";

import { usePost } from "src/hooks/usePost";

export const PostByComment = (props) => {

  const { data, error, isLoading, isEmpty } = usePost(props.postId);

  if (isLoading)  {
    return(
      <div>データをロード中です。</div>
    );
  }

  if (error)  {
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
      <h2>元の記事</h2>
      <p>
        <Link href={`/posts/${data.id}`}>
          <a>{data.title}</a>
        </Link>
      </p>
    </div>
  );
}
