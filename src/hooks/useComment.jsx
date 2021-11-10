import { useRouter } from 'next/router';
import useSWR from 'swr';

import { fetcher } from "src/utils/fetcher";

export const useComment = () => {
  const router = useRouter();

  const { data: comment, error: error } = useSWR(
    (
      router.query.id ?
      `https://jsonplaceholder.typicode.com/comments/${router.query.id }`
      : null
    )
    , fetcher
  );

  return {
    comment,
    error,
    isLoading: !comment && !error
  }
}