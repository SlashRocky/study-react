import useSWRImmutable from "swr/immutable";

import { fetcher } from "src/utils/fetcher";

const useFetchArray = (endpoint) => {
  const { data, error } = useSWRImmutable(endpoint, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0
  };
}

const BASE_ENDPOINT = "https://jsonplaceholder.typicode.com";

// posts
export const usePosts = () => {
  return useFetchArray(`${BASE_ENDPOINT}/posts`);
}

export const usePostsByUserId = (id) => {
  return useFetchArray(id ? `${BASE_ENDPOINT}/posts?userId=${id}` : null);
}

// users
export const useUsers = () => {
  return useFetchArray(`${BASE_ENDPOINT}/users`);
}

// comments
export const useComments = () => {
  return useFetchArray(`${BASE_ENDPOINT}/comments`);
}

export const useCommentsByPostId = (id) => {
  return useFetchArray(id ? `${BASE_ENDPOINT}/comments?postId=${id}` : null);
}
