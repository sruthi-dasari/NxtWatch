import MenuView from '../MenuView'
import ContactView from '../ContactView'

import ThemeContext from '../context/ThemeContext'

import {LeftPanelViewContainer} from './styledComponents'

const LeftPanelView = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <LeftPanelViewContainer isDarkTheme={isDarkTheme}>
          <MenuView />
          <ContactView />
        </LeftPanelViewContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default LeftPanelView
