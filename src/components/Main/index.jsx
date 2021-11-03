import classes from "src/components/Main/Main.module.css";

import { Links } from "src/components/Links";
import { Headline } from "src/components/Headline";

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
