import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

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
  MenuModalContainer,
  MenuPopupCloseButton,
  LogoutContainer,
  LogoutButton,
  ProfileIcon,
  LogoutModalContainer,
  LogoutPopupTitle,
  LogoutPopupButtonsContainer,
  LogoutPopupCancelButton,
  LogoutPopupConfirmButton,
} from './styledComponents'
import ThemeContext from '../context/ThemeContext'

const NavBar = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickConfirm = () => {
        // console.log('In onClickConfirm()')
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

            {/* <MenuPopupContainer */}
            <Popup
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
              //   className="menu-popup-content"
              //   className="popup-content"
            >
              {close => (
                <>
                  <MenuModalContainer $isDarkTheme={isDarkTheme}>
                    {/* <div className="menu-popup-modal-container"> */}
                    {/* <div className="modal-container"> */}
                    <MenuPopupCloseButton
                      type="button"
                      // className="trigger-button"
                      onClick={() => close()}
                    >
                      <CloseIcon $isDarkTheme={isDarkTheme} />
                    </MenuPopupCloseButton>
                    <MenuView />
                  </MenuModalContainer>
                  {/* </div> */}
                </>
              )}
            </Popup>
            {/* </MenuPopupContainer> */}
            <ProfileIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <LogoutIconContainer>
              {/* <LogoutPopupContainer> */}
              <Popup
                modal
                trigger={
                  <LogoutIconButton>
                    <LogoutIcon $isDarkTheme={isDarkTheme} />
                  </LogoutIconButton>
                }
                className="logout-popup-content"
              >
                {close => (
                  <>
                    {/* <div className="logout-popup-modal-container"> */}
                    <LogoutModalContainer $isDarkTheme={isDarkTheme}>
                      <LogoutPopupTitle $isDarkTheme={isDarkTheme}>
                        Are you sure you want to logout?
                      </LogoutPopupTitle>

                      <LogoutPopupButtonsContainer>
                        <LogoutPopupCancelButton
                          type="button"
                          className="trigger-button"
                          onClick={() => close()}
                          $isDarkTheme={isDarkTheme}
                        >
                          Cancel
                        </LogoutPopupCancelButton>
                        <LogoutPopupConfirmButton
                          type="button"
                          className="trigger-button"
                          onClick={onClickConfirm}
                        >
                          Confirm
                        </LogoutPopupConfirmButton>
                      </LogoutPopupButtonsContainer>
                    </LogoutModalContainer>
                    {/* </div> */}
                  </>
                )}
              </Popup>
              {/* </LogoutPopupContainer> */}
            </LogoutIconContainer>
            <LogoutContainer>
              <Popup
                modal
                trigger={
                  <LogoutButton $isDarkTheme={isDarkTheme}>Logout</LogoutButton>
                }
                className="logout-popup-content"
              >
                {close => (
                  <>
                    {/* <div className="logout-popup-modal-container"> */}
                    <LogoutModalContainer $isDarkTheme={isDarkTheme}>
                      <LogoutPopupTitle $isDarkTheme={isDarkTheme}>
                        Are you sure, you want to logout?
                      </LogoutPopupTitle>

                      <LogoutPopupButtonsContainer>
                        <LogoutPopupCancelButton
                          type="button"
                          className="trigger-button"
                          onClick={() => close()}
                          $isDarkTheme={isDarkTheme}
                        >
                          Cancel
                        </LogoutPopupCancelButton>
                        <LogoutPopupConfirmButton
                          type="button"
                          className="trigger-button"
                          onClick={onClickConfirm}
                        >
                          Confirm
                        </LogoutPopupConfirmButton>
                      </LogoutPopupButtonsContainer>
                    </LogoutModalContainer>
                    {/* </div> */}
                  </>
                )}
              </Popup>
            </LogoutContainer>
          </OptionsContainer>
        </NavBarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(NavBar)
