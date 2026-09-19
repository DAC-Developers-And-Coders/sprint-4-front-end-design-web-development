const Hero = () =>
{
    return (
        <>
            <section id="hero" className="grid grid-cols-1 min-h-dvh items-center mx-8
            xl:grid-cols-2">
                <div className="flex flex-col gap-6 px-4 text-center">
                    <h1 className="text-4xl pt-4 md:pt-2 lg:text-5xl 2xl:text-6xl ">Camssify - Sua Câmera Focada em Estudos</h1>

                    <p className="text-2xl lg:text-3xl xl:text-4xl">
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