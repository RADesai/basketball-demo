import React from 'react'
import Image from 'next/image'

export default function Loader({ isMini }) {
    const spacing = isMini ? 'p-2 m-2' : 'p-10 m-10'
    const px = isMini ? '32' : '96'
    return (
        <div className="mx-auto text-center">
            <Image src="/assets/spinner.png" alt="NBA DEMO logo" height={px} width={px} className={ `animate-spin-slow ${spacing}` } />
        </div>
    )
}
