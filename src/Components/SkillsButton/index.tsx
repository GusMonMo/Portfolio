import React from "react";
import styles from './styles.module.scss'
import { UseTheme } from "@/Contexts/ThemeContext/hook";

type buttonProps = {
    iconSrc: string;
    skillName: string;
}

const Button: React.FC<buttonProps> = ({iconSrc, skillName}) => {
    const {theme} = UseTheme()
    return(
        <div className= {`${styles.button} ${theme === 'dark' ? styles.dark : ''}`}>
            <img src={iconSrc} alt="icon" className={styles.iconButton} />
            <span className={styles.separator}/>
            <span className={styles.skillName}>{skillName}</span>
        </div>
    )
}

export default Button;