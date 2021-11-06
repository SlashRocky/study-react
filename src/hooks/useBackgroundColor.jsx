import {useEffect} from "react";

export const useBackgroundColor = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    }
  }, []);
}
