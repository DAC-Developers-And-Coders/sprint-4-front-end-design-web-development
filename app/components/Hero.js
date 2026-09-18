const Hero = () =>
{
    return (
        <>
            <section id="hero" className="grid grid-cols-2 min-h-screen max-md:h-[110dvh] items-center mx-8 max-md:grid-cols-1 max-md:gap-10">
                <div className="flex flex-col gap-6 px-4 max-md:gap-4 max-md:pt-5">
                    <h1 className="text-6xl max-md:text-4xl max-md:text-center">Camssify - Sua Câmera Focada em Estudos</h1>

                    <p className="text-2xl text-balance max-md:text-center">
                        A Developers and Coders, em parceria com a JOVI, apresenta um projeto inovador que busca transformar a maneira como você organiza e potencializa seus
                        estudos, de forma inteligente.
                    </p>
                </div>

                <div className="w-full">
                    <img className= "w-full h-full" src="assets/images/Jovi-Phone.jpg" alt="a cell phone in the water"/>
                </div>
            </section>
        </>
    );
}

export default Hero;