import {Component} from 'react'

import {
  GamingVideoItemDetailsContainer,
  GamingVideoThumbnailImage,
  VideoDetails,
  VideoTitle,
  ViewCount,
  ViewersLocation,
} from './styledComponents'
import ThemeContext from '../context/ThemeContext'

class GamingVideoThumbnail extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const {videoDetails} = this.props
          // console.log(videoDetails)
          const {thumbnailUrl, title, viewCount} = videoDetails

          return (
            <GamingVideoItemDetailsContainer>
              <GamingVideoThumbnailImage src={thumbnailUrl} />
              <VideoDetails>
                <VideoTitle $isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                <ViewCount $isDarkTheme={isDarkTheme}>
                  {viewCount} Watching
                </ViewCount>
                <ViewersLocation $isDarkTheme={isDarkTheme}>
                  Worldwide
                </ViewersLocation>
              </VideoDetails>
            </GamingVideoItemDetailsContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default GamingVideoThumbnail
