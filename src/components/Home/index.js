import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {Component} from 'react'
import NavBar from '../NavBar'
import VideoThumbnail from '../VideoThumbnail'
// import MenuView from '../MenuView'

import LeftPanelView from '../LeftPanelView'

import {
  HomeContainer,
  PremiumBanner,
  LogoAndCloseContainer,
  AppLogoInBanner,
  CloseButton,
  BannerText,
  BannerBtn,
  SearchBarAndVideosContainer,
  SearchBarContainer,
  SearchBarInputContainer,
  SearchBarInput,
  SearchIconContainer,
  SearchIcon,
  CloseIcon,
  LoaderContainer,
  VideoItemsContainer,
  NoResultsAndFailureViewContainer,
  NoResultsAndFailureViewImage,
  NoResultsAndFailureViewHeading,
  NoResultsAndFailureViewPara,
  NoResultsAndFailureViewBtn,
  PanelAndMainContainer,
  LeftPanelViewInLargeScreen,
  //   FailureViewContainer,
  //   FailureViewImage,
  //   FailureViewHeading,
} from './styledComponents'
import ThemeContext from '../context/ThemeContext'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'IN_PROGRESS',
  initial: 'INITIAL',
  noResults: 'NO_RESULTS',
}

class Home extends Component {
  state = {
    videosData: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    showBanner: true,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchInput} = this.state
    // console.log('In getVideos()')
    this.setState({apiStatus: apiStatusConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    // const url = 'https://apis.ccbp.in/videos/all?search='
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    // console.log(data)

    if (response.ok) {
      //   console.log('response is ok')
      //   console.log(data.total)

      if (data.total > 0) {
        const updatedChannel = channelDetail => ({
          name: channelDetail.name,
          profileImageUrl: channelDetail.profile_image_url,
        })

        const updatedData = data.videos.map(eachItem => ({
          channel: updatedChannel(eachItem.channel),
          id: eachItem.id,
          publishedAt: eachItem.published_at,
          thumbnailUrl: eachItem.thumbnail_url,
          title: eachItem.title,
          viewCount: eachItem.view_count,
        }))

        this.setState({
          videosData: updatedData,
          apiStatus: apiStatusConstants.success,
        })
      } else if (data.total === 0) {
        this.setState({apiStatus: apiStatusConstants.noResults})
      }
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value}, this.getVideos)
  }

  renderSuccessView = () => {
    // console.log('In renderSuccessView()')
    const {videosData} = this.state

    // console.log(videosData)
    return (
      <VideoItemsContainer>
        {videosData.map(eachItem => (
          <VideoThumbnail videoDetails={eachItem} key={eachItem.id} />
        ))}
      </VideoItemsContainer>
    )
  }

  renderFailureView = () => (
    //   {
    //     console.log('In renderFailureView')

    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <NoResultsAndFailureViewContainer>
            <NoResultsAndFailureViewImage
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <NoResultsAndFailureViewHeading isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </NoResultsAndFailureViewHeading>
            <NoResultsAndFailureViewPara>
              We are having some trouble to complete your request. Please try
              again.
            </NoResultsAndFailureViewPara>
            <NoResultsAndFailureViewBtn type="button">
              Retry
            </NoResultsAndFailureViewBtn>
          </NoResultsAndFailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderLoadingView = () => (
    //   {
    // console.log('In renderLoadingView()')
    // return
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={50} width={50} />
    </LoaderContainer>
  )
  //   }

  renderNoResultsView = () => (
    //   {
    // console.log('In renderNoResultsView')
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <NoResultsAndFailureViewContainer>
            <NoResultsAndFailureViewImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoResultsAndFailureViewHeading isDarkTheme={isDarkTheme}>
              No Search results found
            </NoResultsAndFailureViewHeading>
            <NoResultsAndFailureViewPara>
              Try different keywords or remove search filter
            </NoResultsAndFailureViewPara>
            <NoResultsAndFailureViewBtn type="button">
              Retry
            </NoResultsAndFailureViewBtn>
          </NoResultsAndFailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
    // return
  )
  //   }

  renderViewContainer = () => {
    // console.log('In renderViewContainer()')
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.noResults:
        return this.renderNoResultsView()
      default:
        return null
    }
  }

  onClickCloseBanner = () => {
    this.setState(prevState => ({showBanner: !prevState.showBanner}))
  }

  render() {
    // console.log('In Home render()')
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {searchInput, showBanner} = this.state
          return (
            <>
              <NavBar />
              <PanelAndMainContainer>
                <LeftPanelViewInLargeScreen>
                  <LeftPanelView />
                </LeftPanelViewInLargeScreen>
                <HomeContainer>
                  {showBanner ? (
                    <PremiumBanner>
                      <LogoAndCloseContainer>
                        <AppLogoInBanner src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
                        <CloseButton
                          data-testid="close"
                          onClick={this.onClickCloseBanner}
                        >
                          <CloseIcon />
                        </CloseButton>
                      </LogoAndCloseContainer>
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerText>
                      <BannerBtn type="button">GET IT NOW</BannerBtn>
                    </PremiumBanner>
                  ) : (
                    ''
                  )}

                  <SearchBarAndVideosContainer isDarkTheme={isDarkTheme}>
                    <SearchBarContainer>
                      <SearchBarInputContainer isDarkTheme={isDarkTheme}>
                        <SearchBarInput
                          isDarkTheme={isDarkTheme}
                          type="search"
                          placeholder="Search"
                          value={searchInput}
                          onChange={this.onChangeSearchInput}
                        />
                      </SearchBarInputContainer>
                      <SearchIconContainer isDarkTheme={isDarkTheme}>
                        <SearchIcon isDarkTheme={isDarkTheme} />
                      </SearchIconContainer>
                    </SearchBarContainer>
                    {this.renderViewContainer()}
                  </SearchBarAndVideosContainer>
                </HomeContainer>
              </PanelAndMainContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
