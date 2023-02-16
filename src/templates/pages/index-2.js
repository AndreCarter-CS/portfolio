import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import Home from "../../pages/home";

const IndexPage = () => {
  return (
    <Layout>
      <Home 
        // content={data.home.edges[0].node} 
      />
    </Layout>
  )
}

export default IndexPage;

export const pageQuery = graphql`
  {
    home: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            greetings
            emoji
            subtitlePrefix
            subtitleHighlight
          }
          rawMarkdownBody
        }
      }
    }
  }
`