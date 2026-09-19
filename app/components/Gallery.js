"use client"

import Carousel from "./Carousel";
import Simulation from "./Simulation";

const Gallery = () =>
{
    const stages = [
        { id:1, image: "./assets/images/gallery/etapa_1_foto.png", text:"O Usuário tira uma foto", alt: "taking a photo"},
        { id:2, image: "./assets/images/gallery/etapa_2_foto.png", text:"O Usuário pode recortar a foto no momento", alt: "cropping the image"},
        { id:3, image: "./assets/images/gallery/etapa_3_foto.png", text:"O constraste da imagem será melhorado", alt: "increasing contrast"},
        { id:4, image: "./assets/images/gallery/etapa_4_foto.png", text:"Será recomendado ao Usuário uma tag ou permitira que ele crie", alt: "creating a tag"},
        { id:5, image: "./assets/images/gallery/etapa_5_foto.png", text:"A foto será armazenada na pasta com o nome da tag", alt: "storing the photo"}
    ];

    return(
        <>
            <section id="gallery" className="grid grid-cols-1 min-h-dvh gap-8 mx-12 justify-items-center">
                <h1 className="text-4xl pt-20 text-center lg:text-5xl">Galeria</h1>
                <h2 className="text-2xl text-center lg:text-3xl">Fluxo da Ferramenta</h2>
                <div className="w-full h-full border-2 rounded-2xl shadow-[0_0_50px] shadow-gray-700 transition-all duration-700 hover:scale-104">
                    <Carousel autoStage={true}>
                        {stages.map((stage) => (
                            <div key={stage.id || stage.image} className="min-w-full flex flex-col gap-5 items-center justify-center lg:flex-row 2xl:gap-15">
                                <img 
                                    src={stage.image} 
                                    alt={stage.alt} 
                                    className="w1/2 h-150 pt-2"
                                />
                                <h2 className="w-1/2 text-sm text-center md:text-lg lg:text-3xl 2xl:w-[40%]  2xl:text-4xl">
                                    {stage.text}
                                </h2>
                            </div>
                        ))}
                    </Carousel>
                </div>
                <h2 className="text-2xl text-center lg:text-3xl">Simulação</h2>
                <Simulation/>
            </section>
        </>
    );
}

export default Gallery;