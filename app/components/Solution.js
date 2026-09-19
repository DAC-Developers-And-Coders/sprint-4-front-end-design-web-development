const Solution = () =>
{

    const functionsSolution = [
        {id: 1, title:"Tutorial inicial", text:"Ao abrir o modo estudos pela primeira vez, o sistema apresenta um tutorial de todas as funções do modo, para que o usuário não fique confuso. Este tutorial também pode ser reacessado quando o usuário desejar.", image:"./assets/images/solution/jovi-camera.jpg", imageAlt:"the cell phone camera"},
        {id: 2, title:"Recorte de fotos", text:"Assim que uma foto for tirada, o usuário terá a possibilidade de cortá-la instanâneamente, sem a necessidade de abrir a galeria para realizar o recorte.", image:"./assets/images/solution/crop-image.png", imageAlt:"crop an image"},
        {id: 3, title:"Melhor legibilidade de texto", text:"Ao tirar fotos de matérias escritas em notas, quadros, documentos ou livros, o sistema aumenta o contraste delas automaticamente, facilitando a leitura do texto escrito.", image:"./assets/images/solution/jovi-v70.jpg", imageAlt:"a hand holding a cell phone"},
        {id: 4, title:"Atribuição de tags às fotos", text:"O sistema adiciona um prefixo ao nome das fotos, que define a matéria contida nela. Esse prefixo é uma tag sugerida pelo sistema, através do reconhecimento de texto da imagem realizado pelo Google Gemini, ou criada manualmente pelo usuário.", image:"./assets/images/solution/gallery-image-serch.png", imageAlt:"a cell phone with the search bar showing the tag"},
        {id: 5, title:"Organização automática da galeria", text:"O sistema utiliza as tags atribuídas às fotos para criar pastas de mesmo nome e organizar as fotos na galeria, por matéria.", image:"./assets/images/solution/jovi-gallery.png", imageAlt:"a cell phone gallery"},
        {id: 6, title:"Geração de planos de estudos e armazenamento no Google Drive", text:"O sistema processa as fotos tiradas pelo usuário por meio de inteligência artificial, para identificar os conteúdos presentes nelas, e gera um plano de estudos personalizado com base nas matérias e nos assuntos identificados. Tanto as imagens processadas, quanto o plano de estudos, podem ser armazenados no Google Drive da conta Google do usuário, caso esta opção seja ativada.", image:"./assets/images/solution/jovi-camera-smartphone.jpg", imageAlt:"A black JOVI cell phon"}
    ]

    return(
        <>
            <section id="solution" className="grid grid-cols-1 gap-8 min-h-dvh mx-10">
                <h1 className="text-4xl pt-20 text-center">Solução</h1>
                <div className="text-center">
                    <p className="text-xl">
                        A equipe DAC, ao receber o desafio da JOVI, realizou uma pesquisa com 40 estudantes e identificou que uma das principais dificuldades no uso do celular para estudos é a desorganização da galeria, causada pela falta de tempo ou motivação. Para solucionar esse problema, a equipe desenvolveu o Camssify, uma ferramenta voltada à organização dos conteúdos de estudo, com as seguintes funções:
                    </p>
                </div>

                {functionsSolution.map((item) => (
                    <div key={item.id} className="grid grid-cols-1 gap-6 justify-items-center mx-8 ml-15 items-center text-center">
                        <div className="flex flex-col gap-2 w-full px-4">
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-md">{item.text}</p>
                        </div>

                        <div className="w-full text-center">
                            <img className="w-full transition-all duration-700 hover:scale-104 rounded-md" 
                            src={item.image} alt={item.imageAlt}
                        />
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}

export default Solution;