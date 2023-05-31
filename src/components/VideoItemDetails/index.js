import {Component} from 'react'

import Cookies from 'js-cookie'

import NavBar from '../NavBar'

import {
  VideoItemDetailsContainer,
  VideoPlayerContainer,
  SuccessViewContainer,
  ReactPlayerContainer,
  VideoItemTitle,
  ViewsAndPublishedContainer,
  ViewCount,
  PublishedTime,
  LikeDislikeSaveContainer,
  LikeButton,
  LikeIcon,
  DislikeButton,
  DislikeIcon,
  SaveButton,
  SaveIcon,
  ChannelLogoAndSubscribersContainer,
  HorizontalLine,
  ChannelDescriptionContainer,
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
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({videoItemApiStatus: videoItemApiStatusConstants.loading})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    // console.log(response)
    const data = await response.json()
    console.log(data)

    const updatedChannel = channelData => ({
      name: channelData.name,
      profileImageUrl: channelData.profile_image_url,
      subscriberCount: channelData.subscriber_count,
    })

    const formattedData = {
      channel: updatedChannel(data.video_details.channel),
      description: data.video_details.description,
      publishedAt: data.video_details.published_at,
      thumbnailUrl: data.video_details.thumbnail_url,
      title: data.video_details.title,
      videoUrl: data.video_details.video_url,
      viewCount: data.video_details.view_count,
    }

    // console.log(formattedData)

    this.setState({
      videoItemData: formattedData,
      videoItemApiStatus: videoItemApiStatusConstants.success,
    })
  }

  renderSuccessView = () => {
    console.log('In renderSuccessView()')
    const {videoItemData} = this.state
    const {title, viewCount, publishedAt, videoUrl} = videoItemData
    return (
      <SuccessViewContainer>
        <VideoPlayerContainer>
          <ReactPlayerContainer url={videoUrl} />
        </VideoPlayerContainer>
        <VideoItemTitle>{title}</VideoItemTitle>
        <ViewsAndPublishedContainer>
          <ViewCount>{viewCount}</ViewCount>
          <PublishedTime>{publishedAt}</PublishedTime>
        </ViewsAndPublishedContainer>
        <LikeDislikeSaveContainer>
          <LikeButton>
            <LikeIcon />
          </LikeButton>
          <DislikeButton>
            <DislikeIcon />
          </DislikeButton>
          <SaveButton>
            <SaveIcon />
          </SaveButton>
        </LikeDislikeSaveContainer>
        <HorizontalLine />
        {/* <ChannelLogoAndSubscribersContainer></ChannelLogoAndSubscribersContainer>
          <ChannelDescriptionContainer></ChannelDescriptionContainer> */}
      </SuccessViewContainer>
    )
  }

  renderViewContainer = () => {
    console.log('In renderViewContainer()')
    const {videoItemApiStatus} = this.state
    switch (videoItemApiStatus) {
      case videoItemApiStatusConstants.success:
        return this.renderSuccessView()
      //   case videoItemApiStatusConstants.failure:
      //     return this.renderFailureView()
      //   case videoItemApiStatusConstants.loading:
      //     return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    console.log('In VideoItemDetails render()')
    return (
      <VideoItemDetailsContainer>
        <NavBar />
        {this.renderViewContainer()}
      </VideoItemDetailsContainer>
    )
  }
}

export default VideoItemDetails
