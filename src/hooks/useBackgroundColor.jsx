import { useMemo } from "react";
import { useRouter } from "next/router";
import {useEffect} from "react";

export const useBackgroundColor = () => {
  const router = useRouter();
  console.log(router);

  const bgColor = useMemo(() => {
    switch(router.pathname) {
      case "/": {
        return "lightblue"
      }
      case "/about": {
        return "beige";
      }
      default: {
        return "";
      }
    }
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;

    return () => {
      document.body.style.backgroundColor = "";
    }
  }, [bgColor]);
}
