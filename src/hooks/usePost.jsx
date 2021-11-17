import useSWRImmutable from "swr/immutable";

import { BASE_ENDPOINT } from 'src/utils/const';
import { fetcher } from "src/utils/fetcher";

export const usePost = (id) => {

  const { data, error } = useSWRImmutable(
    (
      id ?
      `${BASE_ENDPOINT}/posts/${id}`
      : null
    )
    , fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error
  }
}
