import React from "react";
import classes from "./Headline.module.css";

export const Headline = (props) => {
  const { page, children } = props;

  return (
    <div>
      <h1 className={classes.title}>{page} Page</h1>
      <p className={classes.description}>Get started by editing {children}</p>
    </div>
  );
};
