import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  @media screen and (min-width: 576px) {
    width: 350px;
  }
`

export const VideoThumbnailImage = styled.img`
  height: 250px;
  width: 450px;
  @media screen and (min-width: 576px) {
    height: 190px;
    width: 100%;
  }
`

export const VideoDetails = styled.div`
  display: flex;
  margin-top: 10px;

  @media screen and (min-width: 576px) {
    // margin: 0px;
  }
`

export const ProfileImage = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 10px;
`

export const TextDetails = styled.div`
  width: 350px;
  @media screen and (min-width: 576px) {
    width: 100%;
  }
`

export const VideoTitle = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 18px;
  margin-bottom: 10px;
  line-height: 1.5;
  margin-top: 0px;
`

export const SubDetails = styled.ul`
  display: flex;
  padding-left: 0px;
  min-width: 200px;
  justify-content: space-between;
  @media screen and (min-width: 576px) {
    flex-direction: column;
  }
`

export const ChannelName = styled.li`
  list-style: none;
  color: #64748b;
  font-family: 'Roboto';
  font-weight: 500;
  width: 300px;
  line-height: 1.5;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`

export const ViewAndPublishedTimeContainer = styled.div`
  display: flex;
  min-width: 250px;
  justify-content: space-between;
  @media screen and (min-width: 576px) {
    width: 180px;
  }
`

export const ViewCount = styled.li`
  color: #64748b;
  font-family: 'Roboto';
  font-weight: 500;
  width: 200px;
  line-height: 1.5;
  @media screen and (min-width: 576px) {
    list-style: none;
  }
`

export const PublishedTime = styled.li`
  color: #64748b;
  font-family: 'Roboto';
  font-weight: 500;
  width: 200px;
  line-height: 1.5;
`
