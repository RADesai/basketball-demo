import React from 'react'

import Header from './Header'
import Footer from './Footer'


const Layout = props => {
    return (
        <div className="text-center text-purple-800 pb-40">
            <Header isFetching={props.playerQuery?.isFetching()} />
            { React.cloneElement(props.children, props) }
            <Footer />
        </div>
    )
}

export default Layout
