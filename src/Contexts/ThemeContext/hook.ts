import { useContext } from "react"
import { ThemeContext } from "."

export function UseTheme(){
    const context = useContext(ThemeContext)
    if(!context){
        throw new Error("UseTheme must be inside ThemeProvider.")
    }
    return context
}