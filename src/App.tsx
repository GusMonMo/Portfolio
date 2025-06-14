
function App() {

  return (
    <>
      <header>
        
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <div className="barra central"/>
      </div>
      <section>
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
      <main>

      </main>
    </>
  )
}

export default App
