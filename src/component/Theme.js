
import React from 'react'

export const themes = { // contient les données stockées et leurs valeurs
  light: {
    text:"#111",
    color: "#A80000",
    backgroundColor: '#fff',
  },
  dark: {
    text:"#FFF",
    color: '#0000A8',
    backgroundColor: "#111",

  },
}

export const ThemeContext = React.createContext(
  themes.light, // valeur par défaut
)
