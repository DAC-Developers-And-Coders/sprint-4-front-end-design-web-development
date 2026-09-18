const Link = ({ texto, href }) => <li><a href={href}>{texto}</a></li>

const Header = () =>
{
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
            <header className="bg-black text-snow sticky top-0 z-50 left-0 right-0 w-full flex items-center justify-between px-8 h-15">
                <h2 className="text-2xl max-md:text-lg">DAC - JOVI</h2>

                <nav>
                    <ul className="flex gap-6 items-center text-md px-6 max-md:text-[10px] max-md:gap-4">
                        {links}
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;