import { createContext } from "react";

export const ThemeContext = createContext('dark');

// CONSTANTES COULEURS DU THEME
export const THEME = {
    light: {
        bgCol:'white',
        txtCol:'black'
    },
    dark: {
        bgCol:'black',
        txtCol:'white'
    }
}

