import useSWR from "swr";

import { fetcher } from "src/utils/fetcher";

export const UserByUserId = (props) => {
  const { data, error } = useSWR(
    (
      props.id ?
      `https://jsonplaceholder.typicode.com/users/${props.id}`
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