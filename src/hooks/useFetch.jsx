import useSWRImmutable from "swr/immutable";

import { fetcher } from "src/utils/fetcher";

export const useFetch = (url) => {
  const { data, error } = useSWRImmutable(url, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error
  }
}
