import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>

            <h1>Hello.</h1>
            <h2>Stuff</h2>
            <p>Do you want a developer? <Link to="/contact">Contact me.</Link></p>

        </Layout>
    )
}

export default IndexPage
