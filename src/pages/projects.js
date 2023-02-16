import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Projects = () => (
  <Layout>
    <h1>Hi from the Projects page</h1>
    <p>Welcome to Projects</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Projects" />

export default Projects
