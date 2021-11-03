import classes from "./Main.module.css";

import { Links } from "../components/Links";
import { Headline } from "../components/Headline";

export const Main = (props) => {
  const { page } = props;

  return (
    <main className={classes.main}>
      <Headline page={page}>
        <code className={classes.code}>pages/{page}.js</code>
      </Headline>
      <Links />
    </main>
  );
};
