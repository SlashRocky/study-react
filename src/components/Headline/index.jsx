import React from "react";
import classes from "src/components/Headline/Headline.module.css";

export const Headline = (props) => {
  const { page, children, reduceHandler } = props;

  return (
    <div>
      <h1 className={classes.title}>{page} Page</h1>
      <p className={classes.description}>アイテムの数は {children} です。</p>
      <button onClick={reduceHandler}>減らす</button>
    </div>
  );
};
