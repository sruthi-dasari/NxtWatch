import './App.css'

import {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import ThemeContext from './components/context/ThemeContext'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'

const optionConstants = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideosList: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  checkOption = pathname => {
    switch (pathname) {
      case pathname === '/':
        return optionConstants.home
      case pathname === '/trending':
        return optionConstants.trending
      case pathname === '/gaming':
        return optionConstants.gaming
      case pathname === '/saved-videos':
        return optionConstants.savedVideos
      default:
        return null
    }
  }

  addVideo = videoData => {
    console.log('In addVideo()')
    const {savedVideosList} = this.state
    // console.log(videoData)
    const updatedSavedVideosList = [...savedVideosList, videoData]
    this.setState({savedVideosList: updatedSavedVideosList})
  }

  removeVideo = videoData => {
    console.log('In removeVideo()')
    const {savedVideosList} = this.state

    const filteredVideos = savedVideosList.filter(
      eachItem => eachItem.id !== videoData.id,
    )
    this.setState({savedVideosList: filteredVideos})
  }

  render() {
    console.log('In App.js render()')
    const {isDarkTheme, savedVideosList} = this.state
    console.log('Saved videos list is:')
    console.log(savedVideosList)
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          savedVideosList,
          toggleTheme: this.toggleTheme,
          addVideo: this.addVideo,
          removeVideo: this.removeVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}
export default App
