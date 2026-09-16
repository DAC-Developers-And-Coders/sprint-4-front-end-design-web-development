"use client"

import { useState } from "react";

const ChooseRandomImage = (images, setRandomImage, setShowRandomImage) =>
{
    const index = Math.floor(Math.random() * images.length);
    console.log(images[index]);
    setRandomImage(images[index]);
    setShowRandomImage(true);
}

const Gallery = () =>
{
    const images = [
        "./assets/images/gallery/contraste_2.jpeg",
        "./assets/images/gallery/simulation_1.png",
        "./assets/images/gallery/study.jpeg",
        "./assets/images/gallery/simulation_2.jpeg",
        "./assets/images/gallery/contraste_1.jpeg",
        "./assets/images/gallery/simulation_3.jpeg",
        "./assets/images/gallery/simulation_4.jpeg",
        "./assets/images/gallery/simulation_5.png"
    ];

    const [randomImage, setRandomImage] = useState(images[0]);
    const [showRandomImage, setShowRandomImage] = useState(false);

    const stages = [
        {
            image: "./assets/images/gallery/etapa_1_foto.png",
            alt: "taking a photo"
        },
        {
            image: "./assets/images/gallery/etapa_2_foto.png",
            alt: "cropping the image"
        },
        {
            image: "./assets/images/gallery/etapa_3_foto.png",
            alt: "increasing contrast"
        },
        {
            image: "./assets/images/gallery/etapa_4_foto.png",
            alt: "creating a tag"
        },
        {
            image: "./assets/images/gallery/etapa_5_foto.png",
            alt: "storing the photo"
        }
    ];

    return(
        <>
            <section id="gallery">
                <div className="flow-gallery">
                    <h1>Galeria</h1>
                    <h2>Fluxo da ferramenta</h2>
                    <div className="flow-img-gallery">
                        <div className="photo-stages">
                            {stages.map((stage) => (
                                <img
                                    key={stage.image}
                                    src={stage.image}
                                    alt={stage.alt}
                                />
                            ))}
                        </div>

                        <div className="photo-stages">
                            {stages.map((stage) => (
                                <img
                                    key={stage.image}
                                    src={stage.image}
                                    alt={stage.alt}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="simulation-gallery">
                    <h2>Simulação</h2>

                    <div className="btn-random">
                        <button onClick={() => {
                            if(showRandomImage) {
                                setShowRandomImage(false);
                            } else {
                                ChooseRandomImage(images, setRandomImage, setShowRandomImage);
                            }
                        }}>{showRandomImage ? "Voltar para galeria" : "Ver imagem aleatória"}</button>
                    </div>

                    {showRandomImage ? (
                        <div className="random-photo-div">
                            <div className="random-simulation-photo"><img src={randomImage} alt="random simulation image" /></div>
                        </div>
                    ) : (
                        <div className="simulation-img-gallery">
                            <div className="simulation-photo row-2"><img src={images[0]} alt="image with contrast applied" loading ="lazy" /></div>
                            <div className="simulation-photo"><img src={images[1]} alt="tutorial menu" loading ="lazy" /></div>
                            <div className="simulation-photo"><img src={images[2]} alt="study plan" loading ="lazy" /></div>
                            <div className="simulation-photo"><img src={images[3]} alt="Tag recommendation" loading ="lazy" /></div>
                            <div className="simulation-photo row-2"><img src={images[4]} alt="image without applied contrast" loading ="lazy" /></div>
                            <div className="simulation-photo"><img src={images[5]} alt="with another tag recommendation" loading ="lazy" /></div>
                            <div className="simulation-photo col-2"><img src={images[6]} alt="folder storage" loading ="lazy" /></div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Gallery;