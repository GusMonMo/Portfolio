import styles from './styles.module.scss'

function Curriculo() {
    return(
        <>
        <main className={styles.curriculumBody}>
            <section className={styles.overview}>
                <h1>Gustavo Monteiro</h1>
                <h2>Desenvolvedor web</h2>
                <div className={styles.bar}/>
            </section>
        </main>
        </>
    )
}

export default Curriculo;