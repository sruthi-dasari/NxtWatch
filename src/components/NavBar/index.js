import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import MenuView from '../MenuView'

import {
  NavBarContainer,
  AppLogo,
  OptionsContainer,
  ThemeIconButton,
  MenuIconButton,
  LogoutIconButton,
  MoonIcon,
  SunIcon,
  MenuIcon,
  LogoutIcon,
  CloseIcon,
  PopupContent,
  ModalContainer,
  PopupCloseButton,
  LogoutButton,
  ProfileIcon,
} from './styledComponents'
import ThemeContext from '../context/ThemeContext'

const NavBar = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickLogout = () => {
        // console.log('In onClickLogout()')
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      const overlayStyles = {
        backgroundColor: '#ffffff',
        height: '100vh',
        width: '100vw',
      }

      const onClickThemeButton = () => {
        toggleTheme()
      }

      return (
        <NavBarContainer isDarkTheme={isDarkTheme}>
          <AppLogo
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
          />
          <OptionsContainer>
            <ThemeIconButton data-testid="theme" onClick={onClickThemeButton}>
              {isDarkTheme ? <SunIcon /> : <MoonIcon />}
            </ThemeIconButton>

            <PopupContent
              modal
              trigger={
                <MenuIconButton type="button">
                  <MenuIcon isDarkTheme={isDarkTheme} />
                </MenuIconButton>
              }
              overlayStyle={overlayStyles}
            >
              {close => (
                <ModalContainer>
                  <PopupCloseButton
                    type="button"
                    // className="trigger-button"
                    onClick={() => close()}
                  >
                    <CloseIcon />
                  </PopupCloseButton>

                  <MenuView />
                </ModalContainer>
              )}
            </PopupContent>

            <ProfileIcon src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" />
            <LogoutIconButton type="button" onClick={onClickLogout}>
              <LogoutIcon isDarkTheme={isDarkTheme} />
            </LogoutIconButton>
            <LogoutButton
              type="button"
              isDarkTheme={isDarkTheme}
              onClick={onClickLogout}
            >
              Logout
            </LogoutButton>
          </OptionsContainer>
        </NavBarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(NavBar)
