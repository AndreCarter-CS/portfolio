/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  createPage({
    path: "/about",
    component: require.resolve("./src/pages/about.js"),
    context: {},
    defer: true,
  });

  createPage({
    path: "/timeline",
    component: require.resolve("./src/pages/timeline.js"),
    context: {},
    defer: true,
  });

  createPage({
    path: "/projects",
    component: require.resolve("./src/pages/projects.js"),
    context: {},
    defer: true,
  });
}
