"use client"

import { useState } from "react";
import {Menu, X} from "lucide-react"

const Link = ({ texto, href }) => <li><a href={href}>{texto}</a></li>

const Header = () =>
{
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavBar = () => {
        setIsOpen(!isOpen)
    }

    const linkStrings = {
        link1: {href: "#hero", texto: "Início"},
        link2: {href: "#solution", texto: "Solução"},
        link3: {href: "#target-audience", texto: "Público-Alvo"},
        link4: {href: "#gallery", texto: "Galeria"},
        link5: {href: "#team", texto: "Nossa Equipe"},
        link6: {href: "#contact", texto: "Contato"},
        link7: {href: "/login", texto: "Login"}
    };

    const links = Object.entries(linkStrings).map(([key, link]) => (
        <Link key={key} texto={link.texto} href={link.href} />
    ));
    
    return(
        <>
            <header className="bg-black text-snow sticky top-0 z-50 left-0 right-0 w-full flex flex-wrap items-center justify-between px-8 h-20 md:h-15">
                <h2 className="text-sm md:text-xl 2xl:text-3xl">DAC - JOVI</h2>

                <nav>
                    <ul className="hidden items-center 
                    sm:flex sm:gap-3 sm:text-[10px]
                    md:gap-4 md:text-sm 2xl:text-lg">
                        {links}
                    </ul>
                    <button onClick={toggleNavBar} className="sm:hidden">
                        {isOpen ? <X /> : <Menu/>}
                </button>
                </nav>
                {isOpen && (
                    <ul className="flex gap-6 flex-row items-center text-[7px] list-none sm:hidden">
                        {links}
                    </ul>
                )}
            </header>
        </>
    );
}

export default Header;