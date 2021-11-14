import { useRouter } from 'next/router';
import useSWRImmutable from 'swr/immutable';

import { fetcher } from "src/utils/fetcher";

export const useComment = () => {
  const router = useRouter();

  const { data: comment, error: error } = useSWRImmutable(
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