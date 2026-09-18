"use client"

const Simulation = () =>
{
    const images = [ 
        {id: 1, image:"./assets/images/gallery/contraste_2.jpeg", text:"Foto com contraste", alt:"high-contrast image"},
        {id: 2, image:"./assets/images/gallery/simulation_1.jpeg", text:"O menu principal da solução", alt:"Simulation main menu with options"},
        {id: 3, image:"./assets/images/gallery/study.jpeg", text:"Um plano de estudos criado", alt:"JSON showing the study plan"},
        {id: 4, image:"./assets/images/gallery/simulation_2.jpeg", text:"A solução criando as tags", alt:"showing the solution by going through the steps"},
        {id: 5, image:"./assets/images/gallery/contraste_1.jpeg", text:"Imagem sem contraste", alt:"non-contrast image"},
        {id: 6, image:"./assets/images/gallery/simulation_3.jpeg", text:"A solução criando um plano de estudos", alt:"Solution: Creating the study plan"},
        {id: 7, image:"./assets/images/gallery/simulation_4.jpeg", text:"A pasta criada com base na tag", alt:"with the folders created and the photos saved"},
    ];

    return(
        <>
            <div className="grid grid-cols-2 gap-4 items-stretch p-6">
                <div key={images[4].id} className="border-4 p-6 rounded-2xl flex flex-col gap-3 transition-all duration-700 hover:scale-102">
                    <img className="w-full h-full" src={images[4].image} alt={images[4].alt} />
                    <h2 className="text-center text-lg">{images[4].text}</h2>
                </div>

                <div key={images[0].id} className="border-4 p-6 rounded-2xl flex flex-col gap-3 transition-all duration-700 hover:scale-102">
                    <img className="w-full h-full" src={images[0].image} alt={images[0].alt} />
                    <h2 className="text-center text-lg">{images[0].text}</h2>
                </div>

                <div key={images[1].id} className="border-4 p-6 rounded-2xl flex flex-col gap-3 transition-all duration-700 hover:scale-102">
                    <img className="w-full h-full" src={images[1].image} alt={images[1].alt} />
                    <h2 className="text-center text-lg">{images[1].text}</h2>
                </div>

                <div key={images[2].id} className="border-4 p-6 rounded-2xl flex flex-col gap-3 transition-all duration-700 hover:scale-102">
                    <img className="w-full h-full" src={images[2].image} alt={images[2].alt} />
                    <h2 className="text-center text-lg">{images[2].text}</h2>
                </div>

                <div key={images[3].id} className="border-4 p-6 rounded-2xl flex flex-col gap-3 transition-all duration-700 hover:scale-102">
                    <img className="w-full h-full" src={images[3].image} alt={images[3].alt} />
                    <h2 className="text-center text-lg">{images[3].text}</h2>
                </div>

                <div key={images[5].id} className="border-4 p-6 rounded-2xl flex flex-col gap-3 transition-all duration-700 hover:scale-102">
                    <img className="w-full h-full" src={images[5].image} alt={images[5].alt} />
                    <h2 className="text-center text-lg">{images[5].text}</h2>
                </div>

                <div key={images[6].id} className="border-4 p-6 rounded-2xl flex flex-col gap-3 col-span-2 transition-all duration-700 hover:scale-102">
                    <img className="w-full h-full" src={images[6].image} alt={images[6].alt} />
                    <h2 className="text-center text-lg">{images[6].text}</h2>
                </div>
            </div>
        </>
    )
}

export default Simulation;