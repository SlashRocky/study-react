import 'src/styles/globals.css';

import { useBackgroundColor } from "src/hooks/useBackgroundColor";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";

function MyApp({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBackgroundColor();

  return <Component {...pageProps} {...counter} {...inputArray} />
}

export default MyApp
