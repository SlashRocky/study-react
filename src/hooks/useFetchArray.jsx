import useSWR from "swr";

import { fetcher } from "src/utils/fetcher";

const useFetchArray = (endpoint) => {
  const { data, error } = useSWR(endpoint, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0
  };
}

const BASE_ENDPOINT = "https://jsonplaceholder.typicode.com";

export const usePosts = () => {
  return useFetchArray(`${BASE_ENDPOINT}/posts`);
}

export const useUsers = () => {
  return useFetchArray(`${BASE_ENDPOINT}/users`);
}

export const useComments = () => {
  return useFetchArray(`${BASE_ENDPOINT}/comments`);
}
