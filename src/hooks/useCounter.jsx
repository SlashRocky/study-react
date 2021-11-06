import {useCallback, useState} from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const clickHandler = useCallback(() => {
    if(count < 10) {
      setCount(prevCount => prevCount + 1);
    }
    console.log(count);
  }, [count]);

  const displayHandler = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  return {count, isShow, clickHandler, displayHandler}
}