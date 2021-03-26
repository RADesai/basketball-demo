import React from 'react'
import Image from 'next/image'

import Loader from './Loader'

export default function Header({ isFetching }) {
    const animate = isFetching ? 'animate-pulse' : '';
    return (
        <div className="grid grid-cols-5">
            <div className="col-span-2 text-5xl pt-2 text-right">
                NBA
            </div>
            <div className="col-span-1">
                <a href="/">
                    <Image src="/assets/logo.png" alt="NBA DEMO logo" height="64" width="64" className={animate} />
                </a>
            </div>
            <div className="col-span-2 text-5xl pt-2 text-left">
                TRADE
                { isFetching ?
                    <div className="inline-block float-right pr-3"><Loader isMini={true} /></div>
                    : null
                }
            </div>
        </div>
    )
}
