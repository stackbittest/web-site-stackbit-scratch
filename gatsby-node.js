const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResult = await graphql(`
	query {
	  allMarkdownRemark {
		  edges {
			node {
			  frontmatter {
                urlfragment,
				lookandfeel,
				message
			  }
			}
		  }
	  }
	}
  `)
  nodes = queryResult.data.allMarkdownRemark.edges
  nodes.forEach(({ node }) => {
    createPage({
	  path: node.frontmatter.urlfragment,
	  component: path.resolve(`./src/templates/${node.frontmatter.lookandfeel}.js`),
	  context: {
	    frontmatter: node.frontmatter,
	  },
    })
  })
};
