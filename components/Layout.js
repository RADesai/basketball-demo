import React from 'react'

import Header from './header'
import Footer from './footer'


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
