import useSWRImmutable from "swr/immutable";

import { fetcher } from "src/utils/fetcher";

export const useFetchArray = (endpoint) => {
  const { data, error } = useSWRImmutable(endpoint, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0
  };
}
