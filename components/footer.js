import React from 'react'
import Image from 'next/image'

const links = [
    { linkText: 'GITHUB', href: 'https://www.github.com/RADesai/' },
    { linkText: 'LINKEDIN', href: 'https://www.linkedin.com/in/rajadesai/' },
    { linkText: 'RESUME', href: 'https://docs.google.com/document/d/1Lp5GuiES0C2x9IS_N5SWMYUCNsP3kIDEGaTLXX7KbHo/edit?usp=sharing' }
]

const getLink = ({ href, linkText }) => (
    <div key={href} className="mb-1">
        <a className="hover:text-NBA-BLUE" href={href} target="_blank">{linkText}</a>
    </div>
)

export default function Footer() {
    return (
        <div className="bg-black p-3 fixed inset-x-0 bottom-0 grid grid-cols-3 text-NBA-RED font-light text-md tracking-widest">
            <div className="text-left col-span-1 p-2">
                { links.map(link => getLink(link)) }
            </div>
            <div className="col-span-1">
                <a href="/">
                    <Image src="/assets/logo_dark.png" alt="hoop-icon" height="128" width="128" className="object-cover" />
                </a>
            </div>
            <div className="text-right col-span-1 p-2 text-NBA-BLUE">
                <div>Designed & Built by:</div>
                <div>R.A. Desai</div>
            </div>
        </div>
    )
}
