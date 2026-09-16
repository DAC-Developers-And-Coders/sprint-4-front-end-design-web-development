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
            <header>
                <h2>DAC - JOVI</h2>

                <nav>
                    <ul>
                        {links}
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;