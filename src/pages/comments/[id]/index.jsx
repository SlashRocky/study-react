import { SWRConfig } from "swr";

import { BASE_ENDPOINT } from 'src/utils/const';
import { Header } from "src/components/Header";
import { Comment } from "src/components/Comment"

export const getStaticPaths = async () => {
  const comments = await fetch(`${BASE_ENDPOINT}/comments`);
  const commentsData = await comments.json();
  const paths = commentsData.map((comment) => ({
      params: { id: comment.id.toString() }
  }));

  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `${BASE_ENDPOINT}/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);

  if (!comment.ok) {
    return {
      notFound: true,
      revalidate: 1,
    }
  }

  const commentData = await comment.json();

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData
      }
    },
    revalidate: 10,
  }
}

const CommentId = (props) => {
  const { fallback } = props;

  return(
    <div>
      <SWRConfig value={{fallback}}>
        <Header />
        <Comment />
      </SWRConfig>
    </div>
  );
}

export default CommentId;