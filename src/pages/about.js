import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <h1>Hi from the About page</h1>
    <p>Welcome to About</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="About Me" />

export default About
