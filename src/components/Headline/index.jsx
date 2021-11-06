import React from "react";
import classes from "src/components/Headline/Headline.module.css";

export const Headline = (props) => {
  return (
    <div>
      <h1 className={classes.title}>{props.page} Page</h1>
      <p className={classes.description}>アイテムの数は {props.children} です。</p>
      <button onClick={props.reduceHandler}>減らす</button>
    </div>
  );
};
