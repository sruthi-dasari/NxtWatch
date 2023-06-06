import {Component} from 'react'

import {
  PanelAndMainContainer,
  LeftPanelViewInLargeScreen,
  SavedVideosContainer,
  SavedVideosView,
  SavedVideosBar,
  SavedVideosIconContainer,
  SavedVideosIcon,
  SavedVideosHeading,
  SavedVideoItemsContainer,
} from './styledComponents'

import NavBar from '../NavBar'
import LeftPanelView from '../LeftPanelView'
import NoVideos from '../NoVideos'
import ThemeContext from '../context/ThemeContext'
import VideoThumbnail from '../VideoThumbnail'

class SavedVideos extends Component {
  state = {}

  render() {
    console.log('In SavedVideos render()')
    return (
      <ThemeContext.Consumer>
        {value => {
          const {savedVideosList, isDarkTheme} = value
          console.log(savedVideosList)
          const showNoVideosView = savedVideosList.length === 0

          const renderSavedVideosView = () => (
            <SavedVideosView>
              <SavedVideosBar $isDarkTheme={isDarkTheme}>
                <SavedVideosIconContainer $isDarkTheme={isDarkTheme}>
                  <SavedVideosIcon />
                </SavedVideosIconContainer>

                <SavedVideosHeading $isDarkTheme={isDarkTheme}>
                  Saved Videos
                </SavedVideosHeading>
              </SavedVideosBar>
              <SavedVideoItemsContainer $isDarkTheme={isDarkTheme}>
                {savedVideosList.map(eachItem => (
                  <VideoThumbnail videoDetails={eachItem} key={eachItem.id} />
                ))}
              </SavedVideoItemsContainer>
            </SavedVideosView>
          )

          return (
            <>
              <NavBar />
              <PanelAndMainContainer>
                <LeftPanelViewInLargeScreen>
                  <LeftPanelView />
                </LeftPanelViewInLargeScreen>
                <SavedVideosContainer
                  data-testid="savedVideos"
                  $isDarkTheme={isDarkTheme}
                >
                  {showNoVideosView ? <NoVideos /> : renderSavedVideosView()}
                </SavedVideosContainer>
              </PanelAndMainContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
