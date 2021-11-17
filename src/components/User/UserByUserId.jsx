import useSWRImmutable from "swr/immutable";

import { BASE_ENDPOINT } from 'src/utils/const';
import { fetcher } from "src/utils/fetcher";

export const UserByUserId = (props) => {
  const { data, error } = useSWRImmutable(
    (
      props.id ?
      `${BASE_ENDPOINT}/users/${props.id}`
      : null
    )
    , fetcher
  );

  if (!data && !error) {
    return(
      <div>ローディング中です。</div>
    );
  }

  if(error) {
    return(
      <div>{error.message}</div>
    );
  }

  return(
      <div className="text-lg">Created by {data.name}</div>
  );
}