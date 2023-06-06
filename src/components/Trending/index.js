import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {
  TrendingContainer,
  TrendingBar,
  TrendingIconContainer,
  TrendingIcon,
  TrendingHeading,
  LoaderContainer,
  TrendingFailureViewContainer,
  TrendingFailureViewImage,
  TrendingFailureViewHeading,
  TrendingFailureViewPara,
  TrendingFailureViewBtn,
  TrendingVideoItemsContainer,
  PanelAndMainContainer,
  LeftPanelViewInLargeScreen,
} from './styledComponents'

import NavBar from '../NavBar'
import VideoThumbnail from '../VideoThumbnail'
import ThemeContext from '../context/ThemeContext'

import LeftPanelView from '../LeftPanelView'

const trendingApiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'IN_PROGRESS',
  initial: 'INITIAL',
  noResults: 'NO_RESULTS',
}

class Trending extends Component {
  state = {
    trendingApiStatus: trendingApiStatusConstants.initial,
    trendingData: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({trendingApiStatus: trendingApiStatusConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const trendingUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(trendingUrl, options)
    const data = await response.json()

    // console.log(data)

    if (response.ok) {
      const updatedChannel = channelDetail => ({
        name: channelDetail.name,
        profileImageUrl: channelDetail.profile_image_url,
      })

      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        channel: updatedChannel(eachItem.channel),
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      //   console.log(updatedData)

      this.setState({
        trendingData: updatedData,
        trendingApiStatus: trendingApiStatusConstants.success,
      })
    } else {
      this.setState({trendingApiStatus: trendingApiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getTrendingVideos()
  }

  renderTrendingSuccessView = () => {
    // console.log('In renderTrendingSuccessView()')
    const {trendingData} = this.state
    // console.log(trendingData)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <TrendingBar $isDarkTheme={isDarkTheme}>
                <TrendingIconContainer $isDarkTheme={isDarkTheme}>
                  <TrendingIcon />
                </TrendingIconContainer>

                <TrendingHeading $isDarkTheme={isDarkTheme}>
                  Trending
                </TrendingHeading>
              </TrendingBar>
              <TrendingVideoItemsContainer $isDarkTheme={isDarkTheme}>
                {trendingData.map(eachItem => (
                  <VideoThumbnail videoDetails={eachItem} key={eachItem.id} />
                ))}
              </TrendingVideoItemsContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
    // console.log(trendingData)
  }

  renderTrendingLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={50} width={50} />
    </LoaderContainer>
  )

  renderTrendingFailureView = () => {
    console.log('In renderTrendingFailureView')
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <TrendingFailureViewContainer $isDarkTheme={isDarkTheme}>
              <TrendingFailureViewImage
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
              />
              <TrendingFailureViewHeading $isDarkTheme={isDarkTheme}>
                Oops! Something Went Wrong
              </TrendingFailureViewHeading>
              <TrendingFailureViewPara>
                We are having some trouble to complete your request. Please try
                again.
              </TrendingFailureViewPara>
              <TrendingFailureViewBtn onClick={this.onClickRetry}>
                Retry
              </TrendingFailureViewBtn>
            </TrendingFailureViewContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderTrendingView = () => {
    const {trendingApiStatus} = this.state
    switch (trendingApiStatus) {
      case trendingApiStatusConstants.loading:
        return this.renderTrendingLoadingView()
      case trendingApiStatusConstants.success:
        return this.renderTrendingSuccessView()
      case trendingApiStatusConstants.failure:
        return this.renderTrendingFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <NavBar />
              <PanelAndMainContainer>
                <LeftPanelViewInLargeScreen>
                  <LeftPanelView />
                </LeftPanelViewInLargeScreen>
                <TrendingContainer
                  data-testid="trending"
                  $isDarkTheme={isDarkTheme}
                >
                  {this.renderTrendingView()}
                </TrendingContainer>
              </PanelAndMainContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
