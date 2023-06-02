import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

import {
  VideoThumbnailContainer,
  VideoThumbnailImage,
  VideoDetails,
  ProfileImage,
  TextDetails,
  VideoTitle,
  SubDetails,
  ChannelName,
  ViewAndPublishedTimeContainer,
  ViewCountItem,
  ViewCount,
  PublishedTimeItem,
  PublishedTime,
  LinkItem,
} from './styledComponents'
import ThemeContext from '../context/ThemeContext'

class VideoThumbnail extends Component {
  render() {
    console.log('In VideoThumbnail render()')
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const {videoDetails} = this.props
          // console.log(videoDetails)
          const {
            id,
            thumbnailUrl,
            channel,
            title,
            viewCount,
            publishedAt,
          } = videoDetails
          const {profileImageUrl, name} = channel
          const publishedTime = formatDistanceToNow(new Date(publishedAt))

          return (
            <LinkItem to={`/videos/${id}`}>
              <VideoThumbnailContainer>
                <VideoThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
                <VideoDetails>
                  <ProfileImage src={profileImageUrl} alt="channel logo" />
                  <TextDetails>
                    <VideoTitle $isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                    <SubDetails>
                      <ChannelName>{name}</ChannelName>
                      <ViewAndPublishedTimeContainer>
                        <ViewCountItem>
                          <ViewCount>{viewCount} views</ViewCount>
                        </ViewCountItem>
                        <PublishedTimeItem>
                          <PublishedTime>{publishedTime}</PublishedTime>
                        </PublishedTimeItem>
                      </ViewAndPublishedTimeContainer>
                    </SubDetails>
                  </TextDetails>
                </VideoDetails>
              </VideoThumbnailContainer>
            </LinkItem>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoThumbnail
