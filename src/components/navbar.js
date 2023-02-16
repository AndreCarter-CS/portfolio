import * as React from "react";
import { Link } from "gatsby";

const Navbar = ({ siteTitle }) => (
  <nav>
    <Link to="/projects">Projects</Link>
    <Link to="/timeline">Timeline</Link>
    <Link to="/about">About</Link>
    <Link to="/">Home</Link>
  </nav>
)

export default Navbar;