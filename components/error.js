import React from 'react'
import Image from 'next/image'

export default function Error() {
    return (
        <div className="mx-auto text-center p-10 m-10">
            <Image src="/assets/error.png" alt="Error Occured" height={128} width={128} className="" />
            <div className="mt-4 text-xl">
                Something went wrong.<br/>Please try again or come back later.
            </div>
        </div>
    )
}
