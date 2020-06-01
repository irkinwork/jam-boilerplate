import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <h1
        >
          Amazing Pandas Eating Things
        </h1>
        {/*<h4>{data.allMarkdownRemark.totalCount} Posts</h4>*/}
        {data.allContentfulArticle.edges.map(({ node }) => (
          <div>
            <Link
              to={node.slug}
            >
              <h3
              >
                {node.title}{" "}
                <span
                >
                  — {node.publishedAt}
                </span>
              </h3>
                {/*<p>{node.excerpt}</p>*/}
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulArticle {
      edges {
        node {
          slug
          title
          publishedAt
        }
      }
    }
  }
`