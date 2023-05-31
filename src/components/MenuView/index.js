import {Component} from 'react'

import {withRouter} from 'react-router-dom'

import {
  MenuContainer,
  Option,
  HomeIcon,
  TrendingIcon,
  GamingIcon,
  SavedVideosIcon,
  HomeOptionText,
  TrendingOptionText,
  GamingOptionText,
  SavedVideosOptionText,
  LinkItem,
} from './styledComponents'
import ThemeContext from '../context/ThemeContext'

class MenuView extends Component {
  render() {
    // console.log('In MenuView()')
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const {location} = this.props
          const {pathname} = location
          // console.log(pathname)
          return (
            <MenuContainer $isDarkTheme={isDarkTheme}>
              <LinkItem to="/" $isDarkTheme={isDarkTheme}>
                <Option type="button">
                  <HomeIcon
                    $isDarkTheme={isDarkTheme}
                    $isActive={pathname === '/'}
                  />
                  <HomeOptionText
                    $isDarkTheme={isDarkTheme}
                    $isActive={pathname === '/'}
                  >
                    Home
                  </HomeOptionText>
                </Option>
              </LinkItem>
              <LinkItem to="/trending" $isDarkTheme={isDarkTheme}>
                <Option type="button">
                  <TrendingIcon
                    $isDarkTheme={isDarkTheme}
                    $isActive={pathname === '/trending'}
                  />
                  <TrendingOptionText
                    $isDarkTheme={isDarkTheme}
                    $isActive={pathname === '/trending'}
                  >
                    Trending
                  </TrendingOptionText>
                </Option>
              </LinkItem>
              <LinkItem to="/gaming" $isDarkTheme={isDarkTheme}>
                <Option type="button">
                  <GamingIcon
                    $isDarkTheme={isDarkTheme}
                    $isActive={pathname === '/gaming'}
                  />
                  <GamingOptionText
                    $isDarkTheme={isDarkTheme}
                    $isActive={pathname === '/gaming'}
                  >
                    Gaming
                  </GamingOptionText>
                </Option>
              </LinkItem>
              <LinkItem to="/saved-videos" $isDarkTheme={isDarkTheme}>
                <Option type="button">
                  <SavedVideosIcon
                    $isDarkTheme={isDarkTheme}
                    $isActive={pathname === '/saved-videos'}
                  />
                  <SavedVideosOptionText
                    $isDarkTheme={isDarkTheme}
                    $isActive={pathname === '/saved-videos'}
                  >
                    Saved videos
                  </SavedVideosOptionText>
                </Option>
              </LinkItem>
            </MenuContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(MenuView)
