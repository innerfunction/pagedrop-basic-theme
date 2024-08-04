import * as React from 'react'
import NavigationMenu from './navigation-menu'

const Header = ({ title, menuItems }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <div style={{ fontSize: `var(--font-sm)`, textDecoration: `none` }}>
      {title}
    </div>
    {menuItems && <NavigationMenu menuItems={menuItems} />}
  </header>
)

export default Header
