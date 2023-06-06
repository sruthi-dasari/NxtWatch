import styled from 'styled-components'

import {IoMdMoon} from 'react-icons/io'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {FiLogOut, FiSun} from 'react-icons/fi'

import Popup from 'reactjs-popup'

export const NavBarContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.$isDarkTheme ? '#212121' : '')};
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

export const OptionsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 120px;
  list-style: none;
  padding-left: 0px;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
`

export const ThemeIconContainer = styled.li``

export const ThemeIconButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
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

export const MenuIconContainer = styled.li`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MenuIconButton = styled.button`
  background: transparent;
  border: none;
`

export const MenuIcon = styled(AiOutlineMenu)`
  height: 30px;
  width: 30px;
  color: ${props => (props.$isDarkTheme ? '#ffffff' : '')};
`
export const ProfileIcon = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    height: 40px;
    width: 40px;
  }
`

export const LogoutIconContainer = styled.li`
  @media screen and (min-width: 768px) {
    display: none;
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
  color: ${props => (props.$isDarkTheme ? '#ffffff' : '')};
`

export const LogoutContainer = styled.li`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const LogoutButton = styled.button`
  @media screen and (min-width: 768px) {
    justify-content: center;
    align-items: center;
    color: ${props => (props.$isDarkTheme ? '#ffffff' : '#3b82f6')};
    background: transparent;
    border-color: ${props => (props.$isDarkTheme ? '#ffffff' : '#3b82f6')};
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
  color: ${props => (props.$isDarkTheme ? '#f1f1f1' : '')};
`

export const MenuPopupContainer = styled(Popup)``

export const MenuModalContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${props => (props.$isDarkTheme ? '#212121' : '#ffffff')};
  padding: 20px;
`

export const MenuPopupCloseButton = styled.button`
  align-self: flex-end;
  justify-self: flex-start;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  height: 30px;
  width: 30px;
`

export const LogoutPopupContainer = styled(Popup)``

export const LogoutModalContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 450px;
  background-color: ${props => (props.$isDarkTheme ? '#212121' : '#ffffff')};
  padding: 20px;
  border-radius: 10px;
  margin: 40px;

  @media screen and (min-width: 768px) {
    width: 650px;
  }
`

export const LogoutPopupTitle = styled.p`
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: ${props => (props.$isDarkTheme ? 300 : 500)};
  color: ${props => (props.$isDarkTheme ? '#f1f5f9' : '#00306e')};
  margin-bottom: 50px;
`

export const LogoutPopupButtonsContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`

export const LogoutAndCancelButton = styled.button`
  font-size: 23px;
  height: 60px;
  width: 120px;
  border-radius: 5px;
  font-weight: 600;
`

export const LogoutPopupCancelButton = styled(LogoutAndCancelButton)`
  background: transparent;
  border: ${props =>
    props.$isDarkTheme ? '1px solid #f1f5f9' : '1px solid #00306e'};
  color: ${props => (props.$isDarkTheme ? '#64748b' : '#94a3b8')};
`

export const LogoutPopupConfirmButton = styled(LogoutAndCancelButton)`
  background-color: #3b82f6;
  border: none;
  color: #ffffff;
`
