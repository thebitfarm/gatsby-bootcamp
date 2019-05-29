import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
    query (
        $id: String!
    ) {
        ghostPost( id: { eq: $id} ) {
            id
            created_at(fromNow:true)
            slug
            title
            html
        }
    }
    `

const GhostBlog = (props) => {

    console.log('@@@@@@@@', JSON.stringify(props, undefined, 4))

    return (
        <Layout>
            This is the blog template
            <h2><Link to={'/ghostblog/' + props.pageContext.slug}>{props.data.ghostPost.title}</Link></h2>
            <p>{props.data.ghostPost.created_at}</p>
            <div dangerouslySetInnerHTML={{ __html: props.data.ghostPost.html }}></div>

        </Layout>
    )
}

export default GhostBlog
