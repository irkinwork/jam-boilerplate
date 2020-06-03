import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <div>
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
                  — {node.createdAt}
                </span>
              </h3>
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
          createdAt
        }
      }
    }
  }
`