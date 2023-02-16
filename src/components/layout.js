import React from "react";

import Navbar from "./navbar";
import Footer from "./footer";
import  * as styles from "../styles/global.module.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className={styles.layout}>
        <main id="main-content">{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout;