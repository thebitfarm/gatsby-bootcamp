import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'

const IndexPage = () => {
    return (

        <div>
            <Header />

            <h1>Hello.</h1>
            <h2>Stuff</h2>
            <p>Do you want a developer? <Link to="/contact">Contact me.</Link></p>

            <Footer />

        </div>
    )
}

export default IndexPage
