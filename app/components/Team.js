const Team = () =>
{
    const team = [
        {id: 1, name:"ANDRÉ VICTOR NASCIMENTO", rm:"RM 570567", text:"Responsável pelo desenvolvimento do sistema em Python, documentação e Team Leader, auxiliando na organização, planejamento e evolução do projeto."},
        {id: 2, name:"DAVI DIAS DE SOUZA FREITAS", rm:"RM 574089", text:"Responsável pelo desenvolvimento do sistema em Python, contribuindo para a implementação e aprimoramento das principais funcionalidades."},
        {id: 3, name:"DAVID MIKAEL DIAS DA SILVA", rm:"RM 571637", text:"Responsável pelo desenvolvimento do sistema em Python, contribuindo para a implementação e aprimoramento das principais funcionalidades."},
        {id: 4, name:"GABRIEL NOVAGA PEREIRA", rm:"RM 573196", text:"Responsável pelo desenvolvimento em HTML, CSS e JavaScript, além de atuar como Team Leader, coordenando tarefas e decisões técnicas."},
        {id: 5, name:"MATHEUS MONTEIRO DA SILVA", rm:"RM 573842", text:"Auxilia no desenvolvimento do site, contribuindo com ideias, melhorias visuais e implementação de recursos para aprimorar a experiência dos usuários."}
    ]
    return(
        <>
            <section id="team" className="grid grid-cols-1 h-screen gap-8 mx-8 content-start max-md:h-[140dvh]">
                <h1 className="text-4xl pt-20 text-center h-30">Conheça nossa Equipe!</h1>
                <h2 className="text-2xl text-center h-10">Developers and Coders</h2>
                
                <div className="flex flex-wrap justify-center gap-5 p-4">
                    {team.map((member) => (
                        <div key={member.id} className="w-full h-80 max-md:h-52 md:w-[calc(33.3%-1.5rem)] border-3 rounded-2xl shadow-[0_0_50px] shadow-gray-700 transition-all duration-700 hover:scale-104 p-3 flex flex-col gap-8 max-md:gap-2">
                            <h2 className="text-3xl text-center max-md:text-xl">{member.name}</h2>
                            <h3 className="text-2xl text-center max-md:text-lg">{member.rm}</h3>
                            <p className="text-xl text-center max-md:text-md">{member.text}</p> 
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Team;