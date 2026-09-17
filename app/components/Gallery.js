"use client"

import { useState } from "react";
import Carousel from "./Carousel";


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

    const stages = [
        { id:1, image: "./assets/images/gallery/etapa_1_foto.png", alt: "taking a photo"},
        { id:2, image: "./assets/images/gallery/etapa_2_foto.png", alt: "cropping the image"},
        { id:3, image: "./assets/images/gallery/etapa_3_foto.png", alt: "increasing contrast"},
        { id:4, image: "./assets/images/gallery/etapa_4_foto.png", alt: "creating a tag"},
        { id:5, image: "./assets/images/gallery/etapa_5_foto.png", alt: "storing the photo"}
    ];

    return(
        <>
            <section id="gallery" className="grid grid-cols-1 h-screen mx-8">
                <h1 className="text-4xl pt-20 text-center">Galeria</h1>
                    <div className="max-w-80">
                        <Carousel autoStage={true}>
                            {stages.map((stage) => (
                                <img
                                key={stage.id || stage.image} 
                                src={stage.image}/>
                            ))}
                        </Carousel>
                    </div>
            </section>
        </>
    );
}

export default Gallery;