import {Component} from 'react'

import {
  GamingVideoItemDetailsContainer,
  GamingVideoThumbnailImage,
  VideoDetails,
  VideoTitle,
  ViewCount,
  ViewersLocation,
  LinkItem,
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
          const {id, thumbnailUrl, title, viewCount} = videoDetails

          return (
            <LinkItem to={`/videos/${id}`}>
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
            </LinkItem>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default GamingVideoThumbnail
