const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allContentfulArticle {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulArticle.edges.forEach(({ node }) => {
    console.log(node)
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.slug,
      },
    })
  })
}