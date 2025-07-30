import React from  "react";
import styles from './styles.module.scss'
import { UseTheme } from "@/Contexts/ThemeContext/hook";

type props = {
    imgSrc?: string;
    projName: string;
    usedTechs: string[];
    usedLibs: string[];
    projLink: string;
    description?: string;
}

const Project: React.FC<props> = ({imgSrc, projName, usedTechs, usedLibs, projLink, description}) => {
    const {theme} = UseTheme()
    return(
        <div>

        <div className={styles.projSpace}>
            <div className={styles.projInfo}>
                <div className={styles.imgCover}>
                    <a href={projLink} target="_blank" rel="noopener noreferrer">
                        <img className={styles.image} src= {imgSrc} alt="Imagem" />
                    </a>
                </div>

                <h2 className={styles.projName}>{projName}</h2>
                <h4>{usedTechs.join(', ')}</h4>
                <h4>Libs: {usedLibs.join(', ')}</h4>
                <a href={projLink}  target="_blank" rel="noopener noreferrer" className={styles.projLink}>Acessar Projeto</a>
            
            </div>

            <div className={`${styles.descriptionSpace} ${theme === 'dark' ? styles.dark : ''}`}>
                <p>{description}</p>
            </div>

        </div>
            <div className={styles.projBar}/>
        </div>
    )
}

export default Project;