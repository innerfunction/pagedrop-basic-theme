import * as React from 'react'
import Header from './header'
import './layout.css'

const Layout = ({ siteTitle, footerText, menuItems, children }) => (
  <>
    <Header title={siteTitle} menuItems={menuItems} />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `var(--size-content)`,
        padding: `var(--size-gutter)`,
      }}
    >
      <main>{children}</main>
      <footer
        style={{
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
        }}
      >
        {footerText ?? (<a href="https://pagedrop.com">Pagedrop</a>)}
      </footer>
    </div>
  </>
)

export default Layout
