const { pages } = require('./pagedrop.json')

exports.createPages = ({ actions: { createPage } }) => {
  for (const page of pages) {
    const { slug } = page
    createPage({
      path: `/${slug}/`,
      component: require.resolve('./src/pages/page.js'),
      context: page
    })
  }
}

