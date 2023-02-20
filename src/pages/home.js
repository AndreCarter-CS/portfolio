import React from "react";
import * as global from "../styles/global.module.css";
import * as styles from "../styles/home.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Home = () => {
  return (
    <div id="home" className={global.flexContainer}>
      <div className={styles.main}>
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
      <div className={styles.mainImage}>
        <StaticImage 
          src="../images/andre.jpeg"
          alt="Andre Carter" 
          placeholder="blurred"
        />
      </div>
    </div>
  )
}

export default Home;