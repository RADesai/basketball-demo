import React from 'react'
import Image from 'next/image'

export default function Loader() {
    return (
        <div className="mx-auto text-center">
            <Image src="/assets/spinner.png" alt="NBA DEMO logo" height="96" width="96" className="animate-spin-slow p-10 m-10" />
            <div className="text-2xl font-light">Loading...</div>
        </div>
    )
}
