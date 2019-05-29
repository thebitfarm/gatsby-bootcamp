
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
    const ghostPostTemplate = path.resolve(`./src/templates/ghostblog.js`)
    const [mdData, ghostData] = await Promise.all([
        graphql(`
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
    `), 
        graphql(`
        query {
            allGhostPost( skip:0, limit:20, sort: { fields:created_at, order: DESC} ) {
                totalCount
                edges {
                    node {
                        id
                        slug
                        title
                        excerpt
                    }
                }
            }
        }
    `)])

    mdData.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
             component: blogPostTemplate,
             path: `/blog/${edge.node.fields.slug}`,
             context: {
                 slug: edge.node.fields.slug,
                 id: edge.node.id
             }
        })
    })

    ghostData.data.allGhostPost.edges.forEach((edge) => {
        createPage({
             component: ghostPostTemplate,
             path: `/ghostblog/${edge.node.slug}`,
             context: {
                 slug: edge.node.slug,
                 id: edge.node.id
             }
        })
    })

}
