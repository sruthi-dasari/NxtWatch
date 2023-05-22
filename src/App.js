import './App.css'

import {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import ThemeContext from './components/context/ThemeContext'
// import Trending from './components/Trending'
// import Gaming from './components/Gaming'
// import SavedVideos from './components/SavedVideos'
// import VideoItemDetails from './components/VideoItemDetails'

class App extends Component {
  state = {
    isDarkTheme: false,
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          {/* <Route exact path="/trending" component={Trending} /> */}
          {/* <Route exact path="/gaming" component={Gaming} /> */}
          {/* <Route exact path="/saved-videos" component={SavedVideos} /> */}
          {/* <Route exact path="/videos/:id" component={VideoItemDetails} /> */}
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}
export default App
