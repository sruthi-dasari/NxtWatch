import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  //   activeOption: '',
  //   updateActiveOption: () => {},
})

export default ThemeContext
