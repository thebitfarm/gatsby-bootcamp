import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
    query (
        $id: String!
    ) {
        markdownRemark(id: {eq: $id}) {
        id
        frontmatter {
            title
            date
        }
        html
        timeToRead
        }
    }
    `

const Blog = (props) => {

    console.log('@@@@@@@@', JSON.stringify(props, undefined, 4))

    return (
        <Layout>
            This is the blog template
            <h2><Link to={'/blog/' + props.pageContext.slug}>{props.data.markdownRemark.frontmatter.title}</Link></h2>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <p>{props.data.markdownRemark.timeToRead} min to read</p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>

        </Layout>
    )
}

export default Blog
