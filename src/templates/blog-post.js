import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const post = data.contentfulArticle.childContentfulArticleTextTextNode.childMarkdownRemark
  return (
    <Layout>
      <div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
        childContentfulArticleTextTextNode {
          childMarkdownRemark {
            html
          }
        }
    }
  }
`