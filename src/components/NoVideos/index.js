import {Component} from 'react'

import {
  NoVideosContainer,
  NoVideosImage,
  NoVideosTitle,
  NoVideosDescription,
} from './styledComponents'

import ThemeContext from '../context/ThemeContext'

class NoVideos extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <NoVideosContainer $isDarkTheme={isDarkTheme}>
              <NoVideosImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <NoVideosTitle $isDarkTheme={isDarkTheme}>
                No saved videos found
              </NoVideosTitle>
              <NoVideosDescription $isDarkTheme={isDarkTheme}>
                You can save the videos while watching them
              </NoVideosDescription>
            </NoVideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NoVideos
