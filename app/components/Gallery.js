"use client"

import { useState } from "react";
import Carousel from "./Carousel";


const Gallery = () =>
{
    const images = [ 
        {id: 1, image:"./assets/images/gallery/contraste_2.jpeg", text:"Foto com contraste", alt:"high-contrast image"},
        {id: 2, image:"./assets/images/gallery/simulation_1.png", text:"O menu principal da solução", alt:"Simulation main menu with options"},
        {id: 3, image:"./assets/images/gallery/study.jpeg", text:"Um plano de estudos criado", alt:"JSON showing the study plan"},
        {id: 4, image:"./assets/images/gallery/simulation_2.jpeg", text:"A solução criando as tags", alt:"showing the solution by going through the steps"},
        {id: 5, image:"./assets/images/gallery/contraste_1.jpeg", text:"Imagem sem contraste", alt:"non-contrast image"},
        {id: 6, image:"./assets/images/gallery/simulation_3.jpeg", text:"A solução criando um plano de estudos", alt:"Solution: Creating the study plan"},
        {id: 7, image:"./assets/images/gallery/simulation_4.jpeg", text:"A pasta criada com base na tag", alt:"with the folders created and the photos saved"},
    ];

    const stages = [
        { id:1, image: "./assets/images/gallery/etapa_1_foto.png", text:"O Usuário tira uma foto", alt: "taking a photo"},
        { id:2, image: "./assets/images/gallery/etapa_2_foto.png", text:"O Usuário pode recortar a foto no momento", alt: "cropping the image"},
        { id:3, image: "./assets/images/gallery/etapa_3_foto.png", text:"O constraste da imagem será melhorado", alt: "increasing contrast"},
        { id:4, image: "./assets/images/gallery/etapa_4_foto.png", text:"Será recomendado ao Usuário uma tag ou permitira que ele crie", alt: "creating a tag"},
        { id:5, image: "./assets/images/gallery/etapa_5_foto.png", text:"A foto será armazenada na pasta com o nome da tag", alt: "storing the photo"}
    ];

    return(
        <>
            <section id="gallery" className="grid grid-cols-1 h-screen gap-6 mx-8 justify-items-center">
                <h1 className="text-4xl pt-20 text-center">Galeria</h1>
                    <div className="max-w-300 h-165 border-2 rounded-2xl shadow-[0_0_50px] shadow-gray-700 transition-all duration-700 hover:scale-104">
                        <Carousel autoStage={true}>
                            {stages.map((stage) => (
                                <div key={stage.id || stage.image} className="min-w-full flex gap-8 items-center justify-center">
                                    <img 
                                    src={stage.image} 
                                    alt={stage.alt} 
                                    className="w1/2 h-150 pt-2"
                                    />
                                    <h2 className="w-1/2 text-4xl text-center">
                                    {stage.text}
                                    </h2>
                                </div>
                            ))}
                        </Carousel>
                    </div>
            </section>
        </>
    );
}

export default Gallery;