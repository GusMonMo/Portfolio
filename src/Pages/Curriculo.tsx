import { Link } from "react-router-dom"
import '../Styles/_Curriculo.scss'

function Curriculo() {
    return(
        <>
        <header>
            <div className="headerSeparator"/>
            <nav><Link to="/home"><h5>Inicio</h5></Link></nav>
            <div className="headerSeparator"/>
        </header>
        <main className="curriculumBody">
        <h1>Ainda estou construindo essa página, espere um pouquinho por favor</h1>
            <h2></h2>
        </main>
        </>
    )
}

export default Curriculo;