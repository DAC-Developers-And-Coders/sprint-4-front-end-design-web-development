const Contact = () =>
{
    const contacts = [
        {id: 1, name:"Gabriel Novaga", image:"./assets/images/contact/LinkedIn.jpg", alt:"Gmail icon", link: "https://www.linkedin.com/in/gabrielnovagapereira/"},
        {id: 2, name:"Nosso Email", image:"./assets/images/contact/Email.jpg", alt:"LinkedIn icon", link: "mailto:developersandcodersfiap@gmail.com"},
        {id: 3, name:"André Nascimento", image:"./assets/images/contact/LinkedIn.jpg", alt:"Gmail icon", link: "https://www.linkedin.com/in/andrevictorgoncalvesnascimento/"}
    ]

    return(
        <>
            <section id="contact" className="grid grid-cols-1 min-h-dvh gap-8">
                <h1 className="text-4xl pt-20 text-center lg:text-5xl">Contato</h1>
                <h2 className="text-xl text-center mx-10 lg:text-2xl 2xl:text-4xl">Gostaria de falar conosco? Pode nos encontrar nas seguintes plataformas!</h2>
                <div className="grid grid-cols-1 gap-3 mx-10 md:justify-items-center xl:grid-cols-3 xl:gap-6 2xl:gap-8">
                    {contacts.map((contact) => (
                        <div key={contact.id} className="border-3 rounded-2xl transition-all duration-700 hover:scale-102 p-3 flex flex-col gap-1 items-center text-center md:w-70 lg:w-100">
                            <a href={contact.link} target="_blank">
                                <img className="size-40 lg:size-65 2xl:size-70" src={contact.image}></img>
                            </a>
                            <h2 className="text-xl lg:text-3xl 2xl:text-4xl">{contact.name}</h2>
                        </div>
                    ))}
                </div>

                <footer className=" bg-black w-full h-25 mt-auto grid grid-cols-3 gap-2 items-center justify-items-center">
                    <img className="size-20 h-fit" src="./assets/images/DAC_logo_mini.png" alt="Dac icon"/>
                    <a href="https://www.fiap.com.br/" target="_blank"><img className="size-20 h-fit" src="./assets/images/fiap_logo.png" alt="fiap icon" /></a>
                    <a href="https://www.jovimobile.com/" target="_blank"><img className="size-20 h-fit" src="./assets/images/jovi_logo_white.png" alt="jovi icon" /></a>
                </footer>
            </section>
        </>
    );
}

export default Contact;