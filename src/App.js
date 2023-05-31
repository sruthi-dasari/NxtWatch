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
// import SavedVideos from './components/SavedVideos'
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
    // activeOption: optionConstants.home,
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

  //   updateActiveOption = pathname => {
  //     // console.log('In updateActiveOption()')
  //     const activeOption = this.checkOption(pathname)
  //     console.log(activeOption)
  //     this.setState({activeOption})
  //   }

  render() {
    // console.log('In App.js render()')
    const {
      isDarkTheme,
      // activeOption
    } = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          //   updateActiveOption: this.updateActiveOption,
          //   activeOption,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          {/* <ProtectedRoute exact path="/saved-videos" component={SavedVideos} /> */}
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
