interface propsAbout {
    avatar_url: string;
    company: string;
}

export const About = ({ avatar_url, company }: propsAbout) => {
    return (
    <section className="flex flex-col mt-20 lg:flex-row">
        <div className="w-full justify-center flex lg:w-5/12 lg:justify-end lg:content-end">
            <img alt="Foto de Perfil" src={avatar_url} className='rounded-full w-40 lg:w-5/12' />
        </div>
        <div className="w-full text-center lg:text-left lg:w-7/12 justify-center content-center">
            <h1 className="text-8xl mt-5"> Samuel Santos </h1>
            <h2 className="text-2xl text-zinc-400 ml-7">Desenvolvedor Full-Stack</h2>
            <p className="mt-27 lg:w-3/4 p-4">Me chamo Samuel e sou desenvolvedor full-stack graduado em Analise e Desenvolvimento de Sistemas, sou focado em entregar as melhores soluções possíveis para a empresa, desenvolvendo aplicações de alta performance e de grande escalabilidade. Sou apaixonado por desenvolver e estou sempre pensando no próximo projeto que eu quero fazer. Atualmente estou trabalhando para a empresa <span className="font-bold text-lg">{ company }.</span></p>
        </div>
      </section>
    );
}