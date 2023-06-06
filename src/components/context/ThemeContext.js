import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  savedVideosList: [],
  addVideo: () => {},
  removeVideo: () => {},
})

export default ThemeContext
