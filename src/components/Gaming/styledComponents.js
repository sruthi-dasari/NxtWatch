import styled from 'styled-components'
import {SiYoutubegaming} from 'react-icons/si'

export const GamingContainer = styled.div`
  width: 100vw;
  background-color: ${props => (props.$isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const GamingBar = styled.div`
  display: flex;
  padding: 20px;
  background-color: ${props => (props.$isDarkTheme ? '#181818' : '#ebebeb')};
`

export const GamingIconContainer = styled.div`
  border-radius: 40px;
  height: 65px;
  width: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.$isDarkTheme ? '#000000' : '#d7dfe9')};
  margin-right: 15px;
`

export const GamingIcon = styled(SiYoutubegaming)`
  height: 30px;
  width: 30px;
  color: #ff0000;
`

export const GamingHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 26px;
  color: ${props => (props.$isDarkTheme ? '#f9f9f9' : '')};
`

export const LoaderContainer = styled.div``

export const GamingFailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: ${props => (props.$isDarkTheme ? '#000000' : '')};
`
export const GamingFailureViewImage = styled.img`
  height: 200px;
  width: 240px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    height: 350px;
    width: 390px;
    margin-bottom: 10px;
  }
`
export const GamingFailureViewHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  color: ${props => (props.$isDarkTheme ? '#ffffff' : '#181818')};
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const GamingFailureViewPara = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 400;
  color: #64748b;
  margin-bottom: 20px;
  text-align: center;
`
export const GamingFailureViewBtn = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  height: 50px;
  width: 140px;
`

export const GamingVideoItemsContainer = styled.div`
  background-color: ${props => (props.$isDarkTheme ? '#000000' : '')};
  padding-top: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: ${props => (props.$isDarkTheme ? '#000000' : '')};
  }
`
export const PanelAndMainContainer = styled.div`
  display: flex;
`
export const LeftPanelViewInLargeScreen = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
