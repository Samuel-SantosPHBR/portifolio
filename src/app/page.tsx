import { About } from "@/components/About";
import { Navbar } from "@/components/Navbar";
import All, { FaAws } from "react-icons/fa";

const tecnologies = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'NodeJs',
  'React',
  'NextJS',
  'Nest',
  'AWS',
  'Serveless',
  'HTML5',
  'CSS3',
  'JavaScript',
  'NodeJs',
  'React',
  'NextJS',
  'Nest',
  'AWS',
  'HTML5',
  'CSS3',
  'JavaScript',
  'NodeJs',
  'React',
  'NextJS',
  'Nest',
  'AWS',
];

const navBaList = [
  'Sobre',
  'Minhas Tecnologias',
  'Carreira',
  'Formação Academica',
  'Projetos'
]

export default async function Home() {

  const company = 'Exemplo';

  return (
    <main>
      <Navbar list={navBaList} />
      <About avatar_url="https://avatars.githubusercontent.com/u/38257067?v=4" company={company} />
      <section className="flex space-x-8 w-3/6 m-auto flex-wrap justify-center content-center px-10 mt-10">
        { tecnologies.map((tec) => (
          <span className="text-lg bg-gray-900 p-2 rounded-md text-gray-400 mt-2" key={tec}>{tec}</span>
        )) }
      </section>
    </main>
  )
}
