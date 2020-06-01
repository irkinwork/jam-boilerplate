const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     console.log(`!!!\n`, createFilePath({ node, getNode, basePath: `pages` }))
//
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

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
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })
  console.log(JSON.stringify(result, null, 4))

}