import styled from 'styled-components'

export const NotFoundView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.$isDarkTheme ? '#181818' : '#f9f9f9')};
  width: 100%;
  @media screen and (max-width: 767px) {
    height: 90vh;
  }
  @media screen and (min-width: 768px) {
    padding: 80px;
  }
`

export const NotFoundImage = styled.img`
  height: 350px;
  width: 400px;
  @media screen and (min-width: 768px) {
    height: 500px;
    width: 600px;
  }
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.$isDarkTheme ? '#f9f9f9' : '#1e293b')};
  font-weight: 700;
  font-size: 22px;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 45px;
  }
`

export const NotFoundPara = styled.p`
  font-size: 16px;
  text-align: center;
  font-family: 'Roboto';
  color: ${props => (props.$isDarkTheme ? '#94a3b8' : '#475569')};
  width: 320px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    width: 100%;
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
