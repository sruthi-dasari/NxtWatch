import styled from 'styled-components'

import {BiLike, BiDislike} from 'react-icons/bi'

import {MdPlaylistAdd} from 'react-icons/md'

import ReactPlayer from 'react-player'

export const VideoItemDetailsContainer = styled.div`
  width: 100vw;
`

export const SuccessViewContainer = styled.div`
  background-color: ${props => (props.$isDarkTheme ? '#0f0f0f' : '#f8fafc')};
`

export const VideoPlayerContainer = styled.div`
  padding-top: 20px;
  height: 360px;
  @media screen and (min-width: 768px) {
    height: 650px;
    width: 100%;
    padding: 20px;
  }
`

export const ReactPlayerContainer = styled(ReactPlayer)``

export const VideoDetailsContainer = styled.div`
  padding: 15px;
`

export const VideoItemTitle = styled.p`
  font-size: 21px;
  font-family: 'Roboto';
  color: ${props => (props.$isDarkTheme ? '#e2e8f0' : '#0f0f0f')};
`

export const ViewsAndPublishedContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-left: 0px;
  width: 200px;
`

export const ViewCount = styled.li`
  list-style: none;
  color: ${props => (props.$isDarkTheme ? '#94a3b8' : '#616e7c')};
  font-weight: 400;
`

export const PublishedTime = styled.li`
  color: ${props => (props.$isDarkTheme ? '#94a3b8' : '#616e7c')};
  font-weight: 400;
`

export const LikeDislikeSaveContainer = styled.ul`
  display: flex;
  padding-left: 0px;
`

export const Button = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  margin-right: 5px;
  cursor: pointer;
`

export const LikeIcon = styled(BiLike)`
  height: 27px;
  width: 27px;
  color: ${props => (props.$isDarkTheme ? '#94a3b8' : '#64748b')};
  color: ${props => (props.$isLiked ? '#4f46e5' : '')};
  margin-right: 5px;
`

export const DislikeIcon = styled(BiDislike)`
  height: 27px;
  width: 27px;
  color: ${props => (props.$isDarkTheme ? '#94a3b8' : '#64748b')};
  color: ${props => (props.$isDisliked ? '#4f46e5' : '')};
  margin-right: 5px;
`

export const SaveIcon = styled(MdPlaylistAdd)`
  height: 27px;
  width: 27px;
  color: ${props => (props.$isDarkTheme ? '#94a3b8' : '#64748b')};
  color: ${props => (props.$isSaved ? '#4f46e5' : '')};
  margin-right: 5px;
`

export const LikeDislikeSaveText = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${props => (props.$isDarkTheme ? '#94a3b8' : '#64748b')};
  color: ${props => (props.$isLiked ? '#4f46e5' : '')};
  color: ${props => (props.$isDisliked ? '#4f46e5' : '')};
  color: ${props => (props.$isSaved ? '#4f46e5' : '')};
  margin: 0px;
`

export const HorizontalLine = styled.hr``

export const ChannelLogoAndSubscribersContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ChannelLogo = styled.img`
  height: 65px;
  width: 65px;
  margin-right: 10px;
`

export const ChannelNameAndSubscribersCount = styled.div``

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => (props.$isDarkTheme ? '#f1f1f1' : '#0f0f0f')};
`

export const SubscribersCount = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => (props.$isDarkTheme ? '#94a3b8' : '#616e7c')};
`

export const ChannelDescriptionContainer = styled.p`
  font-family: 'Roboto';
  font-weight: 300;
  color: ${props => (props.$isDarkTheme ? '#e2e8f0' : '#475569')};
  line-height: 1.5;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: ${props => (props.$isDarkTheme ? '#181818' : '#f9f9f9')};
`

export const FailureViewImage = styled.img`
  height: 200px;
  width: 240px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    height: 350px;
    width: 390px;
    margin-bottom: 10px;
  }
`
export const FailureViewHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  color: ${props => (props.$isDarkTheme ? '#ffffff' : '#181818')};
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const FailureViewPara = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 400;
  color: ${props => (props.$isDarkTheme ? '#94a3b8' : '#64748b')};
  margin-bottom: 20px;
  text-align: center;
`
export const FailureViewBtn = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  height: 50px;
  width: 140px;
`
export const PanelAndMainContainer = styled.div`
  display: flex;
`
export const LeftPanelViewInLargeScreen = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const LoaderContainer = styled.div``
