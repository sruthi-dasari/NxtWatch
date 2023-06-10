import {Component} from 'react'

import Cookies from 'js-cookie'

import {formatDistanceToNow} from 'date-fns'

import Loader from 'react-loader-spinner'

import NavBar from '../NavBar'

import ThemeContext from '../context/ThemeContext'

import LeftPanelView from '../LeftPanelView'

import {
  PanelAndMainContainer,
  LeftPanelViewInLargeScreen,
  VideoItemDetailsContainer,
  VideoPlayerContainer,
  VideoDetailsContainer,
  SuccessViewContainer,
  ReactPlayerContainer,
  VideoItemTitle,
  ViewsAndPublishedContainer,
  ViewCount,
  PublishedTime,
  LikeDislikeSaveContainer,
  Button,
  LikeIcon,
  LikeDislikeSaveText,
  DislikeIcon,
  SaveIcon,
  HorizontalLine,
  ChannelLogoAndSubscribersContainer,
  ChannelLogo,
  ChannelNameAndSubscribersCount,
  ChannelName,
  SubscribersCount,
  ChannelDescriptionContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewPara,
  FailureViewBtn,
  LoaderContainer,
} from './styledComponents'

const videoItemApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoItemApiStatus: videoItemApiStatusConstants.initial,
    videoItemData: [],
    isLiked: false,
    isDisliked: false,
    isSaved: false,
    saveText: 'Save',
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    console.log('In getVideoDetails()')
    this.setState({videoItemApiStatus: videoItemApiStatusConstants.loading})

    const {match} = this.props
    const {params} = match
    const {id} = params

    // console.log(match)

    const url = `https://apis.ccbp.in/videos/${id}`

    const jwtToken = Cookies.get('jwt_token')

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
      const updatedChannel = channelData => ({
        name: channelData.name,
        profileImageUrl: channelData.profile_image_url,
        subscriberCount: channelData.subscriber_count,
      })

      const formattedData = {
        channel: updatedChannel(data.video_details.channel),
        id: data.video_details.id,
        description: data.video_details.description,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }

      this.setState({
        videoItemData: formattedData,
        videoItemApiStatus: videoItemApiStatusConstants.success,
      })
    } else {
      this.setState({videoItemApiStatus: videoItemApiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getVideoDetails()
  }

  renderSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, removeVideo, savedVideosList} = value
        console.log('In renderSuccessView()')

        const {
          videoItemData,
          isLiked,
          isDisliked,
          isSaved,
          saveText,
        } = this.state

        const {
          title,
          viewCount,
          publishedAt,
          videoUrl,
          channel,
          description,
        } = videoItemData

        const {name, profileImageUrl, subscriberCount} = channel
        const publishedTime = formatDistanceToNow(new Date(publishedAt))

        const onClickLikeButton = () => {
          console.log('In onClickLikeButton()')
          if (isDisliked === true) {
            this.setState(prevState => ({isDisliked: !prevState.isDisliked}))
          }
          this.setState(prevState => ({isLiked: !prevState.isLiked}))
        }

        const onClickDislikeButton = () => {
          console.log('In onClickDislikeButton()')
          if (isLiked === true) {
            this.setState(prevState => ({isLiked: !prevState.isLiked}))
          }
          this.setState(prevState => ({isDisliked: !prevState.isDisliked}))
        }

        const onClickSaveButton = () => {
          console.log('In onClickSaveButton()')

          const alreadyPresent = savedVideosList.find(
            eachItem => eachItem.id === videoItemData.id,
          )

          if (alreadyPresent) {
            console.log('video is already present')
            removeVideo({...videoItemData})
          } else {
            console.log('video is not present')
            addVideo({...videoItemData})
          }
        }

        const isPresent = savedVideosList.find(
          eachItem => eachItem.id === videoItemData.id,
        )
        console.log('isPresent: ')
        console.log(isPresent)

        console.log('isSaved: ')
        console.log(isSaved)

        if (isPresent && !isSaved) {
          console.log('In if condition')
          // removeVideo({...videoItemData})

          this.setState(prevState => ({
            saveText: isPresent !== undefined ? 'Saved' : 'Save',
            isSaved: !prevState.isSaved,
          }))
        } else if (isPresent === undefined && isSaved === true) {
          console.log('In else if condition')

          this.setState(prevState => ({
            saveText: isPresent !== undefined ? 'Saved' : 'Save',
            isSaved: !prevState.isSaved,
          }))
        }

        return (
          <SuccessViewContainer $isDarkTheme={isDarkTheme}>
            <VideoPlayerContainer>
              <ReactPlayerContainer url={videoUrl} width="100%" height="100%" />
            </VideoPlayerContainer>
            <VideoDetailsContainer>
              <VideoItemTitle $isDarkTheme={isDarkTheme}>
                {title}
              </VideoItemTitle>
              <ViewsAndPublishedContainer>
                <ViewCount $isDarkTheme={isDarkTheme}>
                  {viewCount} views
                </ViewCount>
                <PublishedTime $isDarkTheme={isDarkTheme}>
                  {publishedTime}
                </PublishedTime>
              </ViewsAndPublishedContainer>
              <LikeDislikeSaveContainer>
                <Button onClick={onClickLikeButton}>
                  <LikeIcon $isDarkTheme={isDarkTheme} $isLiked={isLiked} />
                  <LikeDislikeSaveText
                    $isDarkTheme={isDarkTheme}
                    $isLiked={isLiked}
                  >
                    Like
                  </LikeDislikeSaveText>
                </Button>
                <Button onClick={onClickDislikeButton}>
                  <DislikeIcon
                    $isDarkTheme={isDarkTheme}
                    $isDisliked={isDisliked}
                  />
                  <LikeDislikeSaveText
                    $isDarkTheme={isDarkTheme}
                    $isDisliked={isDisliked}
                  >
                    Dislike
                  </LikeDislikeSaveText>
                </Button>
                <Button onClick={onClickSaveButton}>
                  <SaveIcon $isDarkTheme={isDarkTheme} $isSaved={isSaved} />
                  <LikeDislikeSaveText
                    $isDarkTheme={isDarkTheme}
                    $isSaved={isSaved}
                  >
                    {saveText}
                  </LikeDislikeSaveText>
                </Button>
              </LikeDislikeSaveContainer>
              <HorizontalLine />
              <ChannelLogoAndSubscribersContainer>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <ChannelNameAndSubscribersCount>
                  <ChannelName $isDarkTheme={isDarkTheme}>{name}</ChannelName>
                  <SubscribersCount $isDarkTheme={isDarkTheme}>
                    {subscriberCount} subscribers
                  </SubscribersCount>
                </ChannelNameAndSubscribersCount>
              </ChannelLogoAndSubscribersContainer>
              <ChannelDescriptionContainer $isDarkTheme={isDarkTheme}>
                {description}
              </ChannelDescriptionContainer>
            </VideoDetailsContainer>
          </SuccessViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <FailureViewContainer $isDarkTheme={isDarkTheme}>
            <FailureViewImage
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <FailureViewHeading $isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureViewHeading>
            <FailureViewPara $isDarkTheme={isDarkTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureViewPara>
            <FailureViewBtn onClick={this.onClickRetry}>Retry</FailureViewBtn>
          </FailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={50} width={50} />
    </LoaderContainer>
  )

  renderViewContainer = () => {
    console.log('In renderViewContainer()')
    const {videoItemApiStatus} = this.state
    switch (videoItemApiStatus) {
      case videoItemApiStatusConstants.success:
        return this.renderSuccessView()
      case videoItemApiStatusConstants.failure:
        return this.renderFailureView()
      case videoItemApiStatusConstants.loading:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    console.log('In VideoItemDetails render()')

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          /* const {isSaved} = this.state
          console.log(isSaved) */

          const {saveText, isSaved} = this.state
          console.log('saveText:')
          console.log(saveText)
          console.log('isSaved:')
          console.log(isSaved)

          // if (isSaved === true) {
          //   this.saveTheVideo()
          // }

          return (
            <>
              <NavBar />
              <PanelAndMainContainer>
                <LeftPanelViewInLargeScreen>
                  <LeftPanelView />
                </LeftPanelViewInLargeScreen>
                <VideoItemDetailsContainer
                  data-testid="videoItemDetails"
                  $isDarkTheme={isDarkTheme}
                >
                  {this.renderViewContainer()}
                </VideoItemDetailsContainer>
              </PanelAndMainContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
