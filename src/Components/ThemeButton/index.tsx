import styles from './styles.module.scss'
import { UseTheme } from '@/Contexts/ThemeContext/hook';
function ThemeButton(){
    const {theme, setTheme} = UseTheme()
    const handleChangeTheme = () => {
        if(theme === 'light'){
            setTheme('dark')
            document.body.classList.toggle('dark');
        } else if(theme === 'dark'){
            setTheme('light')
            document.body.classList.toggle('dark');
        }
    }
    return(
        <>
        <button className={`{styles.themeButton} ${theme === 'dark' ? styles.dark : ''}`} onClick={handleChangeTheme}>
            <div className={styles.track}>
                <div className={styles.circle}/>
                <div className={styles.moonIcon}/>
                <div className={styles.sunIcon}/>
            </div>
        </button>
        </>
    )
}

export default ThemeButton;