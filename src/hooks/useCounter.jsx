import {useCallback, useMemo, useState} from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  const clickHandler = useCallback(() => {
    if(count < 10) {
      setCount(prevCount => prevCount + 1);
    }
    console.log(count);
  }, [count]);

  const displayHandler = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  return {count, doubleCount, isShow, clickHandler, displayHandler}
}