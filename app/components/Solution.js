const Solution = () =>
{
    return(
        <>
            <section id="solution">
                <div className="explain-solution">
                    <h1>Solução</h1>
                    <p>
                        A equipe DAC, ao receber o desafio da JOVI, realizou uma pesquisa com 40 estudantes e identificou que uma das principais dificuldades no uso do celular para estudos é a desorganização da galeria, causada pela falta de tempo ou motivação. Para solucionar esse problema, a equipe desenvolveu o Camssify, uma ferramenta voltada à organização dos conteúdos de estudo, com as seguintes funções:
                    </p>
                </div>

                <div className="functions-solution">
                    <div className="text-functions-solution">
                        <h3>Tutorial inicial</h3>
                        <p>
                            Ao abrir o modo estudos pela primeira vez, o sistema apresenta um tutorial de todas as funções do modo, para que o usuário não fique confuso. Este tutorial também pode ser reacessado quando o usuário desejar.
                        </p>
                    </div>

                    <div className="image-functions-solution">
                        <img src="./assets/images/solution/jovi-camera.jpg" alt="the cell phone camera" />
                    </div>
                </div>

                <div className="functions-solution">
                    <div className="text-functions-solution">
                        <h3>Recorte de fotos</h3>
                        <p>
                            Assim que uma foto for tirada, o usuário terá a possibilidade de cortá-la instanâneamente, sem a necessidade de abrir a galeria para realizar o recorte.
                        </p>
                    </div>

                    <div className="image-functions-solution">
                        <img src="./assets/images/solution/crop-image.png" alt="crop an image" />
                    </div>
                </div>

                <div className="functions-solution">
                    <div className="text-functions-solution">
                        <h3>Melhor legibilidade de texto</h3>
                        <p>
                            Ao tirar fotos de matérias escritas em notas, quadros, documentos ou livros, o sistema aumenta o contraste delas automaticamente, facilitando a leitura do texto escrito.
                        </p>
                    </div>
            
                    <div className="image-functions-solution">
                        <img src="./assets/images/solution/jovi-v70.jpg" alt="a hand holding a cell phone" />
                    </div>
                </div>

                <div className="functions-solution">
                    <div className="text-functions-solution">
                        <h3>Atribuição de tags às fotos</h3>
                        <p>
                            O sistema adiciona um prefixo ao nome das fotos, que define a matéria contida nela. Esse prefixo é uma tag sugerida pelo sistema, através do reconhecimento de texto da imagem realizado pelo Google Gemini, ou criada manualmente pelo usuário.
                        </p>
                    </div> 

                    <div className="image-functions-solution">
                        <img src="./assets/images/solution/gallery-image-serch.png" alt="a cell phone with the search bar showing the tag" />
                    </div>
                </div>

                <div className="functions-solution">
                    <div className="text-functions-solution">
                        <h3>Organização automática da galeria</h3>
                        <p>
                            O sistema utiliza as tags atribuídas às fotos para criar pastas de mesmo nome e organizar as fotos na galeria, por matéria.
                        </p>
                    </div>
                    
                    <div className="image-functions-solution">
                        <img src="./assets/images/solution/jovi-gallery.png" alt="a cell phone gallery" />
                    </div>
                </div>

                <div className="functions-solution">
                    <div className="text-functions-solution">
                        <h3>Geração de planos de estudos e armazenamento no Google Drive</h3>
                        <p>
                            O sistema processa as fotos tiradas pelo usuário por meio de inteligência artificial, para identificar os conteúdos presentes nelas, e gera um plano de estudos personalizado com base nas matérias e nos assuntos identificados.<br />
                            Tanto as imagens processadas, quanto o plano de estudos, podem ser armazenados no Google Drive da conta Google do usuário, caso esta opção seja ativada.
                        </p>
                    </div>
                    
                    <div className="image-functions-solution">
                        <img src="./assets/images/solution/jovi-camera-smartphone.jpg" alt="A black JOVI cell phone" />
                    </div>
                </div>

            </section>
        </>
    );
}

export default Solution;