
function App() {

  return (
    <>
      <header>
        Inicio Contato Projetos Currículo
      </header>
      <div className="capa">
        <div className="background"/>
        <h2>Olá, seja bem vindo ao meu portfolio</h2>
        <h1>Meu nome é Gustavo Monteiro</h1>
        <h3>Sou desenvolvedor full-stack</h3>
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
           <a href="" target="_blank" rel="noopener noreferrer">
            <img src="/Assets/mail-vector.png" alt="Email" className="icon"/>
          </a>
           <div className="barra nav"/>
        </nav>
      </div>
    </>
  )
}

export default App
