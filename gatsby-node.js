exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allPagesJson {
        edges {
          node {
            id
            slug
            title
            contents
          }
        }
      }
      site {
        siteMetadata {
          title,
          settings {
            footerText
          }
        }
      }
    }
  `)
  const { site } = results.data
  results.data.allPagesJson.edges.forEach(edge => {
    const page = edge.node
    createPage({
      path: `/${page.slug}/`,
      component: require.resolve('./src/pages/page.js'),
      context: { page, site }
    })
  })
}

