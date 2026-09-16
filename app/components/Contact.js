const Options = ({ link, asset, imgAlt, txt }) =>
{
    return(
        <div className="option">
            <a href={link} target="_blank"><img src={asset} alt={imgAlt} loading="lazy"/></a>
            <h2>{txt}</h2>
        </div>
    );
}

const Contact = () =>
{
    const links = ['https://www.linkedin.com/in/gabrielnovagapereira/', 'mailto:developersandcodersfiap@gmail.com', 'https://www.linkedin.com/in/andrevictorgoncalvesnascimento/'];
    const assets = ['./assets/images/contact/LinkedIn.jpg', './assets/images/contact/Email.jpg'];
    const imgAlts = ['LinkedIn icon', 'Gmail icon'];
    const txts = ['Gabriel Novaga', 'Nosso Email', 'André Nascimento'];
    const options = [];

    for(let i = 0; i <= 2; i++){
        if(i == 0 || i == 2)
            options.push(<Options key={i} link={links[i]} asset={assets[0]} imgAlts={imgAlts[0]} txt={txts[i]}/>)
        else
            options.push(<Options key={i} link={links[i]} asset={assets[i]} imgAlts={imgAlts[i]} txt={txts[i]}/>)
    }

    return(
        <>
            <section id="contact">
                <div className="title-contact">
                    <h1>Contato</h1>
                    <h3>
                        Gostaria de falar conosco? Pode nos encontrar nas seguintes plataformas!
                    </h3>
                </div>
                <div className="options-contact">
                    {options}
                </div>

                <footer>
                    <img src="./assets/images/DAC_logo_mini.png" alt="Dac icon" />
                    <a href="https://www.fiap.com.br/" target="_blank"><img src="./assets/images/fiap_logo.png" alt="fiap icon" /></a>
                    <a href="https://www.jovimobile.com/" target="_blank"><img src="./assets/images/jovi_logo_white.png" alt="jovi icon" /></a>
                </footer>
            </section>
        </>
    );
}

export default Contact;