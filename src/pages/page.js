import * as React from 'react'
import { parseDocument } from 'htmlparser2'
import { findAll, getText } from 'domutils'

import Layout from '../components/layout'

const PageTemplate = ({ pageContext }) => {
  const { title, contents } = pageContext
  const dom = parseDocument(contents)
  const headers = findAll(elem => ['h1', 'h2'].includes(elem.name), dom.children)
  return (
    <Layout>
      <div>
        <title>{title}</title>
        <div>
          <ul>
            {headers.map((header, idx) => (
              <li key={idx}>{getText(header)}</li>
            ))}
          </ul>
        </div>
        <div dangerouslySetInnerHTML={{ __html: contents }} />
      </div>
    </Layout>
  )
}

export default PageTemplate
