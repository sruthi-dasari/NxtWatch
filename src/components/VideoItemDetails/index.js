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

  renderSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, addSavedVideo} = value
        // console.log('In renderSuccessView()')

        const {videoItemData, isLiked, isDisliked, isSaved} = this.state

        const saveText = isSaved ? 'Saved' : 'Save'
        // console.log(videoItemData)
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

        const onClickSaveButton = () => {
          console.log('In onClickSaveButton()')
          this.setState(
            prevState => ({isSaved: !prevState.isSaved}),
            addSavedVideo({...videoItemData, isSaved}),
          )
        }

        const onClickLikeButton = () => {
          console.log('In onClickLikeButton()')
          this.setState(prevState => ({isLiked: !prevState.isLiked}))
        }

        const onClickDislikeButton = () => {
          console.log('In onClickDislikeButton()')
          this.setState(prevState => ({isDisliked: !prevState.isDisliked}))
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
                <ChannelLogo src={profileImageUrl} />
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
            <FailureViewBtn type="button">Retry</FailureViewBtn>
          </FailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderLoadingView = () => (
    // {
    // console.log('In renderLoadingView()')
    // return
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={50} width={50} />
    </LoaderContainer>
  )
  //   }

  renderViewContainer = () => {
    // console.log('In renderViewContainer()')
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

  //   saveTheVideo = () => (
  //     <ThemeContext.Consumer>
  //       {value => {
  //         const {addSavedVideo} = value

  //         console.log('In saveTheVideo()')

  //         const {isSaved, videoItemData} = this.state
  //         addSavedVideo({...videoItemData, isSaved})
  //       }}
  //     </ThemeContext.Consumer>
  //   )

  render() {
    console.log('In VideoItemDetails render()')
    const {isSaved} = this.state
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
          <VideoItemDetailsContainer>
            {this.renderViewContainer()}
          </VideoItemDetailsContainer>
        </PanelAndMainContainer>
      </>
    )
  }
}

export default VideoItemDetails
