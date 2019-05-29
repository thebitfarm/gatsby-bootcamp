import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

import blogStyles from '../styles/blog.module.scss'

const GhostBlogPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allGhostPost( skip:0, limit:20) {
                totalCount
                edges {
                    node {
                        id
                        created_at(formatString:"MMMM do, YYYY")
                        slug
                        title
                        excerpt
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <h1>Ghost Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allGhostPost.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post} key={edge.node.id}>
                            <Link to={`/ghostblog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.created_at}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>

        </Layout>
    )
}

export default GhostBlogPage
