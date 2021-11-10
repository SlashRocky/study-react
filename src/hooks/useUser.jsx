import { useRouter } from "next/router";
import useSWR from "swr";

import { fetcher } from "src/utils/fetcher";

export const useUser = () => {
  const router = useRouter();

  const { data: user, error: error } = useSWR(
    (
      router.query.id ?
      `https://jsonplaceholder.typicode.com/users/${router.query.id}`
      : null
    )
    , fetcher
  );

  return {
    user,
    error,
    isLoading: !user && !error
  }
}