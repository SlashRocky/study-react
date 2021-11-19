import Link from "next/link";

import { useFetch } from "src/hooks/useFetch";
import { BASE_ENDPOINT } from 'src/utils/const';

export const PostTitleByComment = (props) => {

  const { data, error, isLoading } = useFetch(
    props.postId ?
    `${BASE_ENDPOINT}/posts/${props.postId}`
    : null
  );

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

  return(
    <div>
      <h2 className="text-xl font-bold mt-10">元の記事</h2>
      <p>
        <Link href={`/posts/${data.id}`}>
          <a className="text-lg hover:text-blue-500">{data.title}</a>
        </Link>
      </p>
    </div>
  );
}
