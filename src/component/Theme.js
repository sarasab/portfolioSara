
import React from 'react'

export const themes = { // contient les données stockées et leurs valeurs
  light: {
    color: '#000',
    backgroundColor: '#fff',
  },
  dark: {
    color: '#fff',
    backgroundColor: '#000',
  },
}

export const ThemeContext = React.createContext(
  themes.light, // valeur par défaut
)
