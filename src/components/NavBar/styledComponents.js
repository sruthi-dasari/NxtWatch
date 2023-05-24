import styled from 'styled-components'

import {IoMdMoon} from 'react-icons/io'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {FiLogOut, FiSun} from 'react-icons/fi'

// import Popup from 'reactjs-popup'

export const NavBarContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '')};
  @media screen and (min-width: 768px) {
    height: 100px;
    padding-left: 50px;
    padding-right: 50px;
  }
`

export const AppLogo = styled.img`
  height: 30px;
  width: 130px;
  @media screen and (min-width: 768px) {
    height: 30px;
    width: 150px;
  }
`

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
`
export const ThemeIconButton = styled.div`
  display: flex;
  align-items: center;
`

export const MoonIcon = styled(IoMdMoon)`
  height: 30px;
  width: 30px;
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 40px;
  }
`

export const SunIcon = styled(FiSun)`
  height: 30px;
  width: 30px;
  color: #ffffff;
`

export const MenuIconButton = styled.button`
  background: transparent;
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MenuIcon = styled(AiOutlineMenu)`
  height: 30px;
  width: 30px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '')};
`
export const ProfileIcon = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    height: 40px;
    width: 40px;
  }
`

export const LogoutIconButton = styled.button`
  background: transparent;
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutIcon = styled(FiLogOut)`
  height: 30px;
  width: 30px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '')};
`

export const LogoutButton = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
    background: transparent;
    border-color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
    height: 40px;
    width: 100px;
    font-size: 20px;
    border-width: 2px;
    font-weight: 700;
    border-radius: 4px;
  }
`
export const CloseIcon = styled(AiOutlineClose)`
  height: 28px;
  width: 35px;
`

// export const PopupContainer = styled(Popup)`
//   background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
// `

export const ModalContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 458px;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
`

export const PopupCloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  height: 30px;
  width: 30px;
`
