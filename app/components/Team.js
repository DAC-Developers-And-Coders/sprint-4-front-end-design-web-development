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
            <section id="team" className="grid grid-cols-1 min-h-dvh gap-8 mx-10">
                <h1 className="text-4xl pt-20 text-center lg:text-5xl">Conheça nossa Equipe!</h1>
                <h2 className="text-2xl text-center lg:text-4xl">Developers and Coders</h2>
                
                <div className="flex flex-wrap justify-center gap-5 p-4">
                    {team.map((member) => (
                        <div key={member.id} className="w-full h-auto border-3 rounded-2xl shadow-[0_0_50px] shadow-gray-700 transition-all duration-700 hover:scale-104 p-3 flex flex-col gap-2">
                            <h2 className="text-2xl text-center lg:text-4xl">{member.name}</h2>
                            <h3 className="text-xl text-center lg:text-3xl">{member.rm}</h3>
                            <p className="text-lg text-center lg:text-2xl">{member.text}</p> 
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Team;