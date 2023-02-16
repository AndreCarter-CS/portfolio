import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Timeline = () => (
  <Layout>
    <h1>Hi from the Timeline</h1>
    <p>Welcome to Timeline</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Timeline" />

export default Timeline
