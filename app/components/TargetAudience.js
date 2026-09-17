const TargetAudience = () =>
{
    const typeAudience = [
        {id: 1, title:"Primário",text:"São os estudantes, que podem utilizar as ferramentas para organizar seus materiais e facilitar o acesso aos conteúdos, tornando os estudos mais práticos e eficientes."},
        {id: 2,title:"Secundário",text:"São os professores, que podem utilizar a ferramenta para organizar e separar materiais de aula, facilitando o acesso e o compartilhamento dos conteúdos com os alunos."},
        {id: 3, title:"Terciário",text:"São pessoas em geral que desejam utilizar algumas das funcionalidades da ferramenta no dia a dia, como organizar fotos de viagens, animais de estimação, momentos especiais, entre outros."}
    ]

    return(
        <>
            <section id="target-audience" className="grid grid-cols-1 gap-8 h-screen mx-8">
                <h1 className="text-4xl pt-20 text-center">Público-alvo</h1>

                {typeAudience.map((type) => (
                    <div key={type.id} className="flex flex-col items-center">
                        <div className="shadow-[0_0_50px] shadow-gray-700 flex flex-col text-center gap-8 p-8 w-400 h-50 rounded-2xl bg-black transition-all duration-700 hover:scale-104">
                            <h2 className="text-2xl text-gray-400">{type.title}</h2>
                            <p className="text-xl text-snow">{type.text}</p>
                        </div>  
                    </div>
                ))}

            </section>
        </>
    );
}

export default TargetAudience;