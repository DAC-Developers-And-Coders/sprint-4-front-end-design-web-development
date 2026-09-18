const Options = ({ link, asset, imgAlt, txt }) =>
{
    return(
        <div>
            <a href={link} target="_blank"><img src={asset} alt={imgAlt} loading="lazy"/></a>
            <h2>{txt}</h2>
        </div>
    );
}

const Contact = () =>
{
    const contacts = [
        {id: 1, name:"Gabriel Novaga", image:"./assets/images/contact/LinkedIn.jpg", alt:"Gmail icon", link: "https://www.linkedin.com/in/gabrielnovagapereira/"},
        {id: 2, name:"Nosso Email", image:"./assets/images/contact/Email.jpg", alt:"LinkedIn icon", link: "mailto:developersandcodersfiap@gmail.com"},
        {id: 3, name:"André Nascimento", image:"./assets/images/contact/LinkedIn.jpg", alt:"Gmail icon", link: "https://www.linkedin.com/in/andrevictorgoncalvesnascimento/"}
    ]

    return(
        <>
            <section id="contact" className="grid grid-cols-1 min-h-screen gap-8">
                <h1 className="text-4xl pt-20 text-center h-30">Contato</h1>
                <h2 className="text-2xl text-center h-10">Gostaria de falar conosco? Pode nos encontrar nas seguintes plataformas!</h2>
                <div className="grid grid-cols-3 gap-3 mx-8">
                    {contacts.map((contact) => (
                        <div key={contact.id} className="border-3 rounded-2xl transition-all duration-700 hover:scale-102 p-3 flex flex-col gap-8 items-center text-center">
                            <a href={contact.link}>
                                <img className="w-100" src={contact.image}></img>
                            </a>
                            <h2 className="text-4xl">{contact.name}</h2>
                        </div>
                    ))}
                </div>

                <footer className=" bg-black w-full h-25 mt-auto grid grid-cols-3 gap-2 items-center justify-items-center">
                    <img className="w-37.5 h-fit" src="./assets/images/DAC_logo_mini.png" alt="Dac icon"/>
                    <a href="https://www.fiap.com.br/" target="_blank"><img className="w-37.5 h-fit" src="./assets/images/fiap_logo.png" alt="fiap icon" /></a>
                    <a href="https://www.jovimobile.com/" target="_blank"><img className="w-37.5 h-fit" src="./assets/images/jovi_logo_white.png" alt="jovi icon" /></a>
                </footer>
            </section>
        </>
    );
}

export default Contact;