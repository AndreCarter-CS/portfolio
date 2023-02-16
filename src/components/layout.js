import React from "react";

import Navbar from "./navbar";
import Footer from "./footer";
import  "../styles/global.module.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
        <main id="main-content">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout;