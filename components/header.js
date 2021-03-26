import React from 'react'

export default function Header({ isFetching }) {
    const animate = isFetching ? 'animate-pulse' : '';
    return (
        <div className={ `text-5xl p-2 text-center ${animate}` }>
            <a href="/">
                NBA TRADE DEMO
            </a>
        </div>
    )
}
