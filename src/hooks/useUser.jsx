import { useRouter } from "next/router";
import useSWRImmutable from "swr/immutable";

import { BASE_ENDPOINT } from 'src/utils/const';
import { fetcher } from "src/utils/fetcher";

export const useUser = () => {
  const router = useRouter();

  const { data: user, error: error } = useSWRImmutable(
    (
      router.query.id ?
      `${BASE_ENDPOINT}/users/${router.query.id}`
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