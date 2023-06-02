import styled from 'styled-components'

export const NoVideosContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.$isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  //   background-color: #f9f9f9;
`

export const NoVideosImage = styled.img`
  height: 350px;
  width: 450px;
  margin-bottom: 40px;
`

export const NoVideosTitle = styled.h1`
  font-size: 36px;
  color: ${props => (props.$isDarkTheme ? '#f1f5f9' : '#181818')};
  font-family: 'Roboto';
`

export const NoVideosDescription = styled.p`
  font-size: 25px;
  color: ${props => (props.$isDarkTheme ? '#f1f5f9' : '#475569')};
  font-family: 'Roboto';
  font-weight: 400;
`
