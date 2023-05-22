import {Component} from 'react'

import {
  MenuContainer,
  Option,
  HomeIcon,
  TrendingIcon,
  GamingIcon,
  SavedVideosIcon,
  OptionText,
  LinkItem,
} from './styledComponents'
import ThemeContext from '../context/ThemeContext'

const optionConstants = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

class MenuView extends Component {
  state = {
    activeOption: optionConstants.home,
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {activeOption} = this.state
          return (
            <MenuContainer isDarkTheme={isDarkTheme}>
              <LinkItem to="/" isDarkTheme={isDarkTheme}>
                <Option type="button">
                  <HomeIcon
                    isDarkTheme={isDarkTheme}
                    isActive={activeOption === 'HOME'}
                  />
                  <OptionText isDarkTheme={isDarkTheme}>Home</OptionText>
                </Option>
              </LinkItem>
              <LinkItem to="/trending" isDarkTheme={isDarkTheme}>
                <Option type="button">
                  <TrendingIcon isDarkTheme={isDarkTheme} />
                  <OptionText isDarkTheme={isDarkTheme}>Trending</OptionText>
                </Option>
              </LinkItem>
              <LinkItem to="/gaming" isDarkTheme={isDarkTheme}>
                <Option type="button">
                  <GamingIcon isDarkTheme={isDarkTheme} />
                  <OptionText isDarkTheme={isDarkTheme}>Gaming</OptionText>
                </Option>
              </LinkItem>
              <LinkItem to="/saved-videos" isDarkTheme={isDarkTheme}>
                <Option type="button">
                  <SavedVideosIcon isDarkTheme={isDarkTheme} />
                  <OptionText isDarkTheme={isDarkTheme}>
                    Saved videos
                  </OptionText>
                </Option>
              </LinkItem>
            </MenuContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default MenuView
