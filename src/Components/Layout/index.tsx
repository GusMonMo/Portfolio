import ThemeButton from "@/Components/ThemeButton/index"
import styles from './styles.module.scss'
import { Outlet } from "react-router-dom"

export default function Layout(){

    return(
        <>
        <header className={styles.header}>
            <ThemeButton/>
        </header>
        <Outlet/>
        </>
    )
}