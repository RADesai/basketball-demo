import React from 'react'
import Image from 'next/image'

export default function Footer() {
    return (
        <div className="bg-black p-3 fixed inset-x-0 bottom-0 grid grid-cols-3 text-purple-50 font-light text-md tracking-widest">
            <div className="text-left col-span-1 p-2">
                <div className="mb-1">
                    <a className="hover:text-purple-400" href="https://www.github.com/RADesai/" target="_blank">GITHUB</a>
                </div>
                <div className="mb-1">
                    <a className="hover:text-purple-400" href="https://www.linkedin.com/in/rajadesai/" target="_blank">LINKEDIN</a>
                </div>
                <div className="mb-1">
                    <a className="hover:text-purple-400" href="https://docs.google.com/document/d/1Lp5GuiES0C2x9IS_N5SWMYUCNsP3kIDEGaTLXX7KbHo/edit?usp=sharing" target="_blank">RESUME</a>
                </div>
            </div>
            <div className="col-span-1">
                <a href="/">
                    <Image src="/assets/logo_dark.png" alt="hoop-icon" height="128" width="128" className="object-cover" />
                </a>
            </div>
            <div className="text-right col-span-1 p-2">
                <div>Designed & Built by R.A. Desai</div>
            </div>
        </div>
    )
}
