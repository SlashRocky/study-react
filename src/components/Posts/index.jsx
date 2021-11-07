import { useState, useCallback, useEffect } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if(!res.ok) {
        throw new Error("エラーが発生したため、データの取得に失敗しました。");
      }
      const json =  await res.json();
      setPosts(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts])

  if(loading) {
    return <div>ローディング中です。</div>;
  }

  if(error) {
    return <div>{error.message}</div>;
  }

  if(posts.length === 0 ) {
    return <div>データは空です。</div>;
  }

  return (
    <ol>
      {
        posts.map((post) => {
          return(
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          );
        })
      }
    </ol>
  );
}
