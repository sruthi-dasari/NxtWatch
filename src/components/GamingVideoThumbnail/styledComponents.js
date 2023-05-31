import styled from 'styled-components'

export const GamingVideoItemDetailsContainer = styled.div`
  padding: 10px;

  @media screen and (min-width: 576px) {
    // width: 350px;
  }
`

export const GamingVideoThumbnailImage = styled.img`
  height: 250px;
  //   width: 450px;
  width: 200px;
  @media screen and (min-width: 576px) {
    height: 300px;
    width: 230px;
  }
`

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  @media screen and (min-width: 576px) {
    // margin: 0px;
  }
`

export const VideoTitle = styled.h1`
  color: ${props => (props.$isDarkTheme ? '#ffffff' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 18px;
  margin-bottom: 10px;
  //   line-height: 0.5;
  margin-top: 0px;
`

export const ViewCount = styled.p`
  color: ${props => (props.$isDarkTheme ? '#64748b' : '#475569')};
  font-family: 'Roboto';
  //   font-weight: 500;
  width: 200px;
  line-height: 0.5;
  font-size: 18px;
  margin: 0px;
  @media screen and (min-width: 576px) {
    list-style: none;
  }
`

export const ViewersLocation = styled.p`
  color: ${props => (props.$isDarkTheme ? '#64748b' : '#475569')};
  font-family: 'Roboto';
  //   font-weight: 500;
  font-size: 18px;
  width: 200px;
  line-height: 0.5;
`
