import Head from "next/head";
import classes from "src/styles/Home.module.css";

import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";

export default function About(props) {
  const { doubleCount, isShow, clickHandler, displayHandler, text, array, changeHandler, addHandler } = props;

  return (
    <div className={classes.container}>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      { isShow ? <h1>{doubleCount}</h1> : null }
      <button onClick={clickHandler}>ボタン</button>
      <button onClick={displayHandler}>{isShow ? "非表示" : "表示"}</button>
      <br />
      <br />

      <input
        type="text"
        value={text}
        onChange={changeHandler}
      />
      <br />
      <button onClick={addHandler}>追加</button>
      <ul>
        {
          array &&
          array.map((item) => {
            return(
              <li key={item}>
                {item}
              </li>
            );
          })
        }
      </ul>
      <Main page="about" />
      <Footer />
    </div>
  );
}
