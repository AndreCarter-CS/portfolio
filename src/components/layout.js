import React from "react";

import Navbar from "./navbar";
import Footer from "./footer";
import  * as styles from "../styles/global.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
        <main id="main-content">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout;