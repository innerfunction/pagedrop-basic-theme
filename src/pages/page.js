import * as React from 'react'
import { parseDocument } from 'htmlparser2'
import { findAll, getText, getOuterHTML } from 'domutils'
import Layout from '../components/layout'

const PageTemplate = ({ pageContext }) => {
  const { page, site } = pageContext
  const dom = parseDocument(page.contents)
  // Find header elems
  const headers = findAll(elem => ['h1', 'h2'].includes(elem.name), dom.children)
  // Generate menu items from header elems
  const menuItems = headers.map((header, idx) => {
    const title = getText(header)
    const ref = `h${idx}`
    // Set ID anchor on each header elem
    header.attribs.id = ref
    return { title, href: `#${ref}` }
  })
  return (
    <Layout siteTitle={site.title} footerText={site.footerText} menuItems={menuItems}>
      <div>
        <div>
          <title>{page.title}</title>
        </div>
        <div dangerouslySetInnerHTML={{ __html: getOuterHTML(dom) }} />
      </div>
    </Layout>
  )
}

export default PageTemplate
