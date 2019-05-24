
const path = require('path')


module.exports.onCreateNode = ({ node, actions }) => {
    const { createNode, createNodeField } = actions

    if( node.internal.type === 'MarkdownRemark') {
        console.log(JSON.stringify(node, undefined, 4))

        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })


    }

}

module.exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`./src/templates/blog.js`)
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
             component: blogPostTemplate,
             path: `/blog/${edge.node.fields.slug}`,
             context: {
                 slug: edge.node.fields.slug,
                 id: edge.node.id
             }
        })
    })

}
