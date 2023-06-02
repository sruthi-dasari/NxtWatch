import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const VideoThumbnailContainer = styled.li`
  //   padding: 10px;
  list-style: none;
  @media screen and (min-width: 576px) {
    width: 350px;
  }
`

export const VideoThumbnailImage = styled.img`
  height: 250px;
  width: 100%;
  @media screen and (min-width: 576px) {
    height: 190px;
  }
`

export const VideoDetails = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 15px;

  @media screen and (min-width: 576px) {
    // margin: 0px;
    width: 100%;
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
    width: 300px;
  }
`

export const VideoTitle = styled.p`
  color: ${props => (props.$isDarkTheme ? '#ffffff' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 18px;
  margin-bottom: 10px;
  line-height: 1.5;
  margin-top: 0px;
`

export const SubDetails = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0px;
  max-width: 300px;
  justify-content: space-between;
  margin-top: 0px;
  margin-bottom: 30px;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ChannelName = styled.p`
  list-style: none;
  color: #64748b;
  font-family: 'Roboto';
  font-weight: 500;
  //   width: 300px;
  line-height: 1.5;
  margin: 0px;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`

export const ViewAndPublishedTimeContainer = styled.ul`
  display: flex;
  min-width: 200px;
  justify-content: space-between;
  margin: 0px;
  padding-left: 0px;
  @media screen and (min-width: 576px) {
    min-width: 200px;
  }
`

export const ViewCountItem = styled.li`
  list-style: disc;
  color: #64748b;
  @media screen and (min-width: 576px) {
    list-style: none;
  }
`

export const ViewCount = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-weight: 500;
  //   width: 200px;
  line-height: 1.5;
  margin: 0px;
`

export const PublishedTimeItem = styled.li`
  list-style: disc;
  color: #64748b;
  @media screen and (min-width: 576px) {
    list-style: disc;
    color: #64748b;
  }
`

export const PublishedTime = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-weight: 500;
  //   width: 200px;
  line-height: 1.5;
  margin: 0px;
`
