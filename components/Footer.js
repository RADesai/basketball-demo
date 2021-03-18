import React from 'react'
import Image from 'next/image'

export default function Footer() {
    return (
        <div className="bg-black p-2 fixed inset-x-0 bottom-0 grid grid-cols-3">
            <div className="text-purple-50 font-light text-sm text-left col-span-1">
                <div>
                    <a className="hover:text-purple-400" href="https://www.github.com/RADesai/" target="_blank">Github</a>
                </div>
                <div>
                    <a className="hover:text-purple-400" href="https://www.linkedin.com/in/rajadesai/" target="_blank">LinkedIn</a>
                </div>
                <div>
                    <a className="hover:text-purple-400" href="https://docs.google.com/document/d/1Lp5GuiES0C2x9IS_N5SWMYUCNsP3kIDEGaTLXX7KbHo/edit?usp=sharing" target="_blank">Resume</a>
                </div>
            </div>
            <div className="col-span-1">
                <Image src="/assets/logo_dark.png" alt="hoop-icon" height="128" width="128" className="object-cover" />
            </div>
            <div className="text-purple-50 font-light text-sm text-right col-span-1">
                <div div>Designed & Coded by R.A. Desai</div>
            </div>
        </div>
    )
}
