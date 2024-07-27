import * as React from 'react'
import { graphql } from 'gatsby'
import { parseDocument } from 'htmlparser2'
import { findAll, getText } from 'domutils'

import Layout from '../components/layout'

const PageTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const dom = parseDocument(html)
  const headers = findAll(elem => ['h1', 'h2'].includes(elem.name), dom.children)
  return (
    <Layout>
      <div>
        <title>{frontmatter.title}</title>
        <div>
          <ul>
            {headers.map((header, idx) => (
              <li key={idx}>{getText(header)}</li>
            ))}
          </ul>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}
export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
