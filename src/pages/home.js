import React from "react";
import * as styles from "../styles/home.module.css";

const Home = () => {
  return (
    <div id="home">
      <h1 className={styles.title}>
        {"Hello "}
        <span role="img" aria-label="emoji">
            {"👋 "}    
        </span>
        <br />
        {"I'm Andre Carter"}
      </h1>
      <h2 className={styles.subtitle}>
        {"I build and design "}
        <span className={styles.highlighted}>{"things for the web."}</span>
      </h2>
      <div>{"Software Engineer. Based in Palm Coast."}</div>
    </div>
  )
}

export default Home;