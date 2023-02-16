import React from "react";
import Layout from "../components/layout";
import Home from "./home";
import * as styles from "../styles/global.module.css";

const IndexPage = () => {
  return (
    <Layout className={styles.layout}>
      <Home />
    </Layout>
  )
}

export default IndexPage;