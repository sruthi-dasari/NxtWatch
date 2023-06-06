import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {
  GamingContainer,
  GamingBar,
  GamingIconContainer,
  GamingIcon,
  GamingHeading,
  LoaderContainer,
  GamingFailureViewContainer,
  GamingFailureViewImage,
  GamingFailureViewHeading,
  GamingFailureViewPara,
  GamingFailureViewBtn,
  GamingVideoItemsContainer,
  PanelAndMainContainer,
  LeftPanelViewInLargeScreen,
} from './styledComponents'

import NavBar from '../NavBar'
import GamingVideoThumbnail from '../GamingVideoThumbnail'
import ThemeContext from '../context/ThemeContext'

import LeftPanelView from '../LeftPanelView'

const gamingApiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'IN_PROGRESS',
  initial: 'INITIAL',
  noResults: 'NO_RESULTS',
}

class Gaming extends Component {
  state = {
    gamingApiStatus: gamingApiStatusConstants.initial,
    gamingData: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({gamingApiStatus: gamingApiStatusConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const gamingUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(gamingUrl, options)
    const data = await response.json()

    console.log(data)

    if (response.ok) {
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      //   console.log(updatedData)

      this.setState({
        gamingData: updatedData,
        gamingApiStatus: gamingApiStatusConstants.success,
      })
    } else {
      this.setState({gamingApiStatus: gamingApiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getGamingVideos()
  }

  renderGamingSuccessView = () => {
    // console.log('In renderGamingSuccessView()')
    const {gamingData} = this.state
    // console.log(gamingData)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <GamingBar $isDarkTheme={isDarkTheme}>
                <GamingIconContainer $isDarkTheme={isDarkTheme}>
                  <GamingIcon />
                </GamingIconContainer>
                <GamingHeading $isDarkTheme={isDarkTheme}>Gaming</GamingHeading>
              </GamingBar>

              <GamingVideoItemsContainer $isDarkTheme={isDarkTheme}>
                {gamingData.map(eachItem => (
                  <GamingVideoThumbnail
                    videoDetails={eachItem}
                    key={eachItem.id}
                  />
                ))}
              </GamingVideoItemsContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
    // console.log(gamingData)
  }

  renderGamingLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={50} width={50} />
    </LoaderContainer>
  )

  renderGamingFailureView = () => {
    console.log('In renderGamingFailureView')
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <GamingFailureViewContainer $isDarkTheme={isDarkTheme}>
              <GamingFailureViewImage
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
              />
              <GamingFailureViewHeading $isDarkTheme={isDarkTheme}>
                Oops! Something Went Wrong
              </GamingFailureViewHeading>
              <GamingFailureViewPara>
                We are having some trouble to complete your request. Please try
                again.
              </GamingFailureViewPara>
              <GamingFailureViewBtn onClick={this.onClickRetry}>
                Retry
              </GamingFailureViewBtn>
            </GamingFailureViewContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderGamingView = () => {
    const {gamingApiStatus} = this.state
    switch (gamingApiStatus) {
      case gamingApiStatusConstants.loading:
        return this.renderGamingLoadingView()
      case gamingApiStatusConstants.success:
        return this.renderGamingSuccessView()
      case gamingApiStatusConstants.failure:
        return this.renderGamingFailureView()
      default:
        return null
    }
  }

  render() {
    // console.log('In Gaming render()')
    return (
      <>
        <NavBar />
        <PanelAndMainContainer>
          <LeftPanelViewInLargeScreen>
            <LeftPanelView />
          </LeftPanelViewInLargeScreen>
          <GamingContainer data-testid="gaming">
            {this.renderGamingView()}
          </GamingContainer>
        </PanelAndMainContainer>
      </>
    )
  }
}

export default Gaming
