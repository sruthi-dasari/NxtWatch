import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

import {
  VideoItemDetailsContainer,
  VideoThumbnailImage,
  VideoDetails,
  ProfileImage,
  TextDetails,
  VideoTitle,
  SubDetails,
  ChannelName,
  ViewAndPublishedTimeContainer,
  ViewCount,
  PublishedTime,
} from './styledComponents'
import ThemeContext from '../context/ThemeContext'

class VideoThumbnail extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const {videoDetails} = this.props
          // console.log(videoDetails)
          const {
            thumbnailUrl,
            channel,
            title,
            viewCount,
            publishedAt,
          } = videoDetails
          const {profileImageUrl, name} = channel
          const publishedTime = formatDistanceToNow(new Date(publishedAt))

          return (
            <VideoItemDetailsContainer>
              <VideoThumbnailImage src={thumbnailUrl} />
              <VideoDetails>
                <ProfileImage src={profileImageUrl} />
                <TextDetails>
                  <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                  <SubDetails>
                    <ChannelName>{name}</ChannelName>
                    <ViewAndPublishedTimeContainer>
                      <ViewCount>{viewCount} views</ViewCount>
                      <PublishedTime>{publishedTime}</PublishedTime>
                    </ViewAndPublishedTimeContainer>
                  </SubDetails>
                </TextDetails>
              </VideoDetails>
            </VideoItemDetailsContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoThumbnail
