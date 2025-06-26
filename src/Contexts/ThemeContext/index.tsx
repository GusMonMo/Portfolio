import { createContext, useState } from "react";
import type { ThemeType } from "./types";

export const ThemeContext = createContext<ThemeType | undefined>(undefined)

export function ThemeProvider({children}:{children:React.ReactNode}){
    const [theme, setTheme] = useState("light")
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}