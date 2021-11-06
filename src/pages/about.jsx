import Head from "next/head";
import classes from "src/styles/Home.module.css";

import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";

const About = (props) => {
  return (
    <div className={classes.container}>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      { props.isShow ? <h1>{props.doubleCount}</h1> : null }
      <button onClick={props.clickHandler}>ボタン</button>
      <button onClick={props.displayHandler}>{props.isShow ? "非表示" : "表示"}</button>
      <br />
      <br />

      <input
        type="text"
        value={props.text}
        onChange={props.changeHandler}
      />
      <br />
      <button onClick={props.addHandler}>追加</button>
      <ul>
        {
          props.array &&
          props.array.map((item) => {
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

export default About;