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
        <span>{"Software Engineer. Based in Palm Coast."}</span>
        <div className={global.mt40}>
          <a href='https://app.luminpdf.com/viewer/63fdff22ce8b74fe0eee3272' target='_blank'>
          <span className={styles.resumeDownload}>Download my resume!</span>
          </a>
        </div>
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