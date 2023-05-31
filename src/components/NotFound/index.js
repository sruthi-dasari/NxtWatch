import {
  NotFoundView,
  NotFoundImage,
  NotFoundHeading,
  NotFoundPara,
  PanelAndMainContainer,
  LeftPanelViewInLargeScreen,
} from './styledComponents'

import NavBar from '../NavBar'
import LeftPanelView from '../LeftPanelView'
import ThemeContext from '../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <NavBar />
          <PanelAndMainContainer>
            <LeftPanelViewInLargeScreen>
              <LeftPanelView />
            </LeftPanelViewInLargeScreen>
            <NotFoundView $isDarkTheme={isDarkTheme}>
              <NotFoundImage
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <NotFoundHeading $isDarkTheme={isDarkTheme}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundPara $isDarkTheme={isDarkTheme}>
                We are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundView>
          </PanelAndMainContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
