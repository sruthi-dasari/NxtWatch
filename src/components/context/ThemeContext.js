import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  addSavedVideo: () => {},
})

export default ThemeContext
