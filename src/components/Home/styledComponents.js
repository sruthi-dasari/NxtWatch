import styled from 'styled-components'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

export const HomeContainer = styled.div`
  width: 100%;
`

export const PremiumBanner = styled.div`
  padding: 30px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');

  @media screen and (min-width: 576px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size: cover;
  }
`

export const LogoAndCloseContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const AppLogoInBanner = styled.img`
  height: 45px;
  width: 180px;
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
`

export const CloseIcon = styled(AiOutlineClose)`
  height: 20px;
  width: 20px;
`

export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  width: 300px;
`

export const BannerBtn = styled.button`
  border: 1px solid #000000;
  font-family: 'Roboto';
  font-size: 20px;
  background: transparent;
  padding: 10px;
  font-weight: 600;
  color: #181818;
`

export const SearchBarAndVideosContainer = styled.div`
  background-color: ${props => (props.$isDarkTheme ? '#181818' : '#f9f9f9')};
  padding: 10px;
`

export const SearchBarContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  @media screen and (min-width: 576px) {
    width: 600px;
    margin-top: 20px;
    margin-bottom: 30px;
  }
`

export const SearchBarInputContainer = styled.div`
  border: 1px solid #909090;
  height: 40px;
  width: 100%;
  padding: 10px;
  display: flex;
  background-color: ${props =>
    props.$isDarkTheme ? 'transparent' : '#ffffff'};
`

export const SearchBarInput = styled.input`
  background: transparent;
  border: none;
  width: 100%;
  height: 100%;
  font-size: 16px;
  outline: none;
  color: ${props => (props.$isDarkTheme ? '#f1f1f1' : '#000000')};
`

export const SearchIconContainerButton = styled.button`
  background-color: ${props => (props.$isDarkTheme ? '#424242' : '#f1f5f9')};
  width: 100px;
  height: 40px;
  border: 1px solid #909090;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SearchIcon = styled(AiOutlineSearch)`
  height: 20px;
  width: 20px;
  color: ${props => (props.$isDarkTheme ? '#909090' : '#606060')};
`

export const LoaderContainer = styled.div``

export const VideoItemsContainer = styled.ul`
  padding-left: 0px;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
  }
`

export const NoResultsAndFailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  padding: 20px;
`

export const NoResultsAndFailureViewImage = styled.img`
  height: 200px;
  width: 240px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    height: 350px;
    width: 390px;
    margin-bottom: 10px;
  }
`
export const NoResultsAndFailureViewHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  color: ${props => (props.$isDarkTheme ? '#ffffff' : '#181818')};
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const NoResultsAndFailureViewPara = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 400;
  color: #64748b;
  margin-bottom: 20px;
  text-align: center;
`
export const NoResultsAndFailureViewBtn = styled.button`
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
export const PanelAndMainContainer = styled.div`
  display: flex;
`
export const LeftPanelViewInLargeScreen = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
