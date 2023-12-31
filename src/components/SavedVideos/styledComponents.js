import styled from 'styled-components'
import {ImFire} from 'react-icons/im'

export const PanelAndMainContainer = styled.div`
  display: flex;
`
export const LeftPanelViewInLargeScreen = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const SavedVideosContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => (props.$isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const SavedVideosView = styled.div``

export const SavedVideosBar = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.$isDarkTheme ? '#181818' : '#ebebeb')};
`

export const SavedVideosIconContainer = styled.div`
  border-radius: 40px;
  height: 65px;
  width: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.$isDarkTheme ? '#000000' : '#d7dfe9')};
  margin-right: 15px;
`

export const SavedVideosIcon = styled(ImFire)`
  height: 30px;
  width: 30px;
  color: #ff0000;
`

export const SavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 26px;
  color: ${props => (props.$isDarkTheme ? '#f9f9f9' : '')};
`
export const SavedVideoItemsContainer = styled.ul`
  background-color: ${props => (props.$isDarkTheme ? '#000000' : '')};
  padding-top: 30px;
  padding-left: 0px;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: ${props => (props.$isDarkTheme ? '#000000' : '')};
  }
`
