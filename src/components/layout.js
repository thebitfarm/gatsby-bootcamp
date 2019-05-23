import React from 'react'

import '../styles/index.scss'
import layoutStyles from '../styles/layout.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'



const Layout = (props) => {
    return (

        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
