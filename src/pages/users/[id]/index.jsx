import { SWRConfig } from "swr";

import { BASE_ENDPOINT } from "src/utils/const";
import { Header } from "src/components/Header";
import { UserDetail } from "src/components/User/UserDetail";

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;

  // ユーザー情報の取得
  const USER_API_URL = `${BASE_ENDPOINT}/users/${id}`;
  const user =  await fetch(USER_API_URL);
  const userData = await user.json();

  // ユーザーの投稿の取得
  const POSTS_API_URL = `${BASE_ENDPOINT}/posts?userId=${userData.id}`;
  const posts =  await fetch(POSTS_API_URL);
  const postsData = await posts.json();

  return {
    props: {
      fallback: {
        [USER_API_URL]: userData,
        [POSTS_API_URL]: postsData
      }
    }
  }
}

const UserId = (props) => {
  const { fallback } = props;

  return(
    <SWRConfig value={{ fallback }}>
      <Header />
      <UserDetail />
    </SWRConfig>
  );
}

export default UserId;
