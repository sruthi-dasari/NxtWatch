import styled from 'styled-components'

import {AiFillHome} from 'react-icons/ai'
import {ImFire} from 'react-icons/im'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'

import {Link} from 'react-router-dom'

export const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0px;
  margin: 0px;
  background-color: ${props => (props.isDarkTheme ? 'transparent' : '#ffffff')};
`

export const Option = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 130px;
  background: transparent;
  border: none;
  margin: 10px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 180px;
  }
`

export const OptionText = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
  font-weight: 400;
  width: 90px;
  &:hover {
    font-weight: 700;
  }

  @media screen and (min-width: 768px) {
    width: 120px;
    display: flex;
    justify-content: flex-start;
    font-size: 18px;
  }
`

export const HomeIcon = styled(AiFillHome)`
  height: 20px;
  width: 20px;
  color: ${props => (props.isDarkTheme ? '#7e858e' : '#424242')};
  &:hover {
    color: #ff0000;
  }

  @media screen and (min-width: 768px) {
    height: 20px;
    width: 20px;
  }
`

export const TrendingIcon = styled(ImFire)`
  height: 20px;
  width: 20px;
  color: ${props => (props.isDarkTheme ? '#7e858e' : '#424242')};
  //   @media screen and (min-width: 768px) {
  //     height: 30px;
  //     width: 30px;
  //   }
`

export const GamingIcon = styled(SiYoutubegaming)`
  height: 20px;
  width: 20px;
  color: ${props => (props.isDarkTheme ? '#7e858e' : '#424242')};
  //   @media screen and (min-width: 768px) {
  //     height: 30px;
  //     width: 30px;
  //   }
`

export const SavedVideosIcon = styled(RiMenuAddLine)`
  height: 20px;
  width: 20px;
  color: ${props => (props.isDarkTheme ? '#7e858e' : '#424242')};
  //   @media screen and (min-width: 768px) {
  //     height: 30px;
  //     width: 30px;
  //   }
`
export const LinkItem = styled(Link)`
  text-decoration: none;
  &:hover {
    background-color: ${props => (props.isDarkTheme ? '#383838' : '#cbd5e1')};
  }
`
