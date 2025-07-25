import Button from "@/Components/SkillsButton/index"
import Project from "@/Components/Project/index"
import { FadeInSection } from "@/Hooks/fadeInSection"
import CssIcon from "../Assets/CssIcon.png"
import ExpressIcon from "../Assets/ExpressIcon.png"
import JavascriptIcon from "../Assets/JavaScriptIcon.png"
import MySqlIcon from "../Assets/MySqlcon.png"
import ReactIcon from "../Assets/ReactIcon.png"
import SassIcon from "../Assets/SassIcon.png"
import NodeIcon from "../Assets/NodeIcon.png"
import TypescriptIcon from "../Assets/TypeScriptIcon.png"
import Fintracker from '../Assets/ProjImages/logo.png'

function App() {

  return (
    <>
      <div className="capa" id="inicio">
        <div className="background"/>
        <h2>Olá, seja bem vindo ao meu portfolio</h2>
        <h1>Meu nome é Gustavo Monteiro</h1>
        <h3>Sou desenvolvedor front-end</h3>
        <nav>
          <div className="barra nav"/>
          <a href="https://github.com/GusMonMo" target="_blank" rel="noopener noreferrer">
            <img src="/Assets/GithubIcon.png" alt="Github" className="icon"/>
          </a>
           <a href="https://www.instagram.com/gusta.m_m/" target="_blank" rel="noopener noreferrer">
            <img src="/Assets/IconInstagram.png" alt="Instagram" className="icon"/>
          </a>
           <a href="https://www.linkedin.com/in/devgus/" target="_blank" rel="noopener noreferrer">
            <img src="/Assets/LinkedinIcon.png" alt="Linkedin" className="icon"/>
          </a>
           <div className="barra nav"/>
        </nav>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <div className="barra central"/>
      </div>
      <FadeInSection>
        <section id="aboutMe">
          <h2>QUEM SOU EU ?</h2>
          <div className="barra section"/> <br />
          <p>
            Sou um acadêmico de engenharia de software e desenvolvedor front-end ambicionado em desenvolvimento de sistemas coorporativos e utilitários.
          </p> <br />
          <p>
            Com dois anos de experiência usando TypeScript, ReactJs, NextJS, CSS, SASS e alguns frameworks desses, concluí alguns projetos pessoais que consolidaram muito do meu aprendizado e me capacitou a fazer a diferença em qualquer demanda.
          </p> <br />
          <p>
            Atualmente estudo, além das tecnologias acima, NodeJS, Express e MySQL para ir além na minha stack.
          </p>
        </section>
          <div className="buttonContainer">
            <Button iconSrc= {CssIcon} skillName="CSS"/>
            <Button iconSrc= {SassIcon} skillName="SASS"/>
            <Button iconSrc= {JavascriptIcon} skillName="JavaScript"/>
            <Button iconSrc= {ReactIcon} skillName="React"/>
            <Button iconSrc= {TypescriptIcon} skillName="TypeScript"/>
            <Button iconSrc= {NodeIcon} skillName="NodeJS"/>
            <Button iconSrc= {ExpressIcon} skillName="Express"/>
            <Button iconSrc= {MySqlIcon} skillName="MySQL"/>
          </div>
      </FadeInSection>

      <FadeInSection>
        <main id="projects">
          <h2>VEJA ALGUNS DOS MEUS PROJETOS ABAIXO</h2>
          <div className="barra main"/>
          <div className="projContainer">
            <Project projName="Fintracker"
            imgSrc= {Fintracker} 
            projLink="https://dashboard-coral-one-90.vercel.app/" 
            usedTechs={["React", "TypeScript", "Sass"]}
            description="Fintracker é um projeto pessoal de um controlador financeiro com autenticação local. 
            A aplicação consiste em uma página de registro que armazena os dados do formulário no localStorage e 
            define um token de autenticação. Os dados financeiros do usuário são criados e modificados com base 
            nesse token. Este método é adequado para dados não confidenciais e não possui conexão com um 
            banco de dados, tornando a aplicação fácil e leve. Os dados são totalmente excluídos se o cache do 
            navegador for limpo."
            />
          </div>
        </main>
      </FadeInSection>
    </>
  )
}

export default App
