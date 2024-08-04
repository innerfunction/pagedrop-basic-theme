import * as React from 'react'

const Seo = ({ description, title, children }) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="pagedrop" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {children}
  </>
)

export default Seo
