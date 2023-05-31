import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

// import Popup from 'reactjs-popup'

import MenuView from '../MenuView'
import './index.css'

import {
  NavBarContainer,
  AppLogo,
  OptionsContainer,
  ThemeIconContainer,
  ThemeIconButton,
  MenuIconContainer,
  MenuIconButton,
  LogoutIconContainer,
  LogoutIconButton,
  MoonIcon,
  SunIcon,
  MenuIcon,
  LogoutIcon,
  CloseIcon,
  PopupContainer,
  ModalContainer,
  PopupCloseButton,
  LogoutContainer,
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
        <NavBarContainer $isDarkTheme={isDarkTheme}>
          <Link to="/">
            <AppLogo
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <OptionsContainer>
            <ThemeIconContainer>
              <ThemeIconButton data-testid="theme" onClick={onClickThemeButton}>
                {isDarkTheme ? <SunIcon /> : <MoonIcon />}
              </ThemeIconButton>
            </ThemeIconContainer>
            <PopupContainer
              modal
              trigger={
                <MenuIconContainer>
                  <MenuIconButton type="button">
                    <MenuIcon $isDarkTheme={isDarkTheme} />
                  </MenuIconButton>
                </MenuIconContainer>
              }
              overlayStyle={overlayStyles}
              $isDarkTheme={isDarkTheme}
            >
              {close => (
                <>
                  <ModalContainer $isDarkTheme={isDarkTheme}>
                    <PopupCloseButton
                      type="button"
                      // className="trigger-button"
                      onClick={() => close()}
                    >
                      <CloseIcon $isDarkTheme={isDarkTheme} />
                    </PopupCloseButton>
                    <MenuView />
                  </ModalContainer>
                </>
              )}
            </PopupContainer>

            <ProfileIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <LogoutIconContainer>
              <LogoutIconButton onClick={onClickLogout}>
                <LogoutIcon $isDarkTheme={isDarkTheme} />
              </LogoutIconButton>
            </LogoutIconContainer>
            <LogoutContainer>
              <LogoutButton $isDarkTheme={isDarkTheme} onClick={onClickLogout}>
                Logout
              </LogoutButton>
            </LogoutContainer>
          </OptionsContainer>
        </NavBarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(NavBar)
