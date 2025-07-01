import ThemeButton from "@/Components/ThemeButton/index"
import { Link } from "react-router-dom"
import styles from './styles.module.scss'
import { Outlet } from "react-router-dom"

export default function Layout(){

    return(
        <>
        <header className={styles.header}>
            <nav>
                <Link to='/'><h6>Home</h6></Link>
                <Link to='/curriculo'><h6>Meu Currículo</h6></Link>
            </nav>
            <ThemeButton/>
        </header>
        <Outlet/>
        </>
    )
}