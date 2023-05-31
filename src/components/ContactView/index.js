import ThemeContext from '../context/ThemeContext'

import {
  ContactViewContainer,
  ContactHeading,
  SocialMediaContainer,
  ContactText,
  SocialMediaIcon,
} from './styledComponents'

const ContactView = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <ContactViewContainer>
          <ContactHeading $isDarkTheme={isDarkTheme}>CONTACT US</ContactHeading>
          <SocialMediaContainer>
            <SocialMediaIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
            <SocialMediaIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
            <SocialMediaIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
          </SocialMediaContainer>
          <ContactText $isDarkTheme={isDarkTheme}>
            Enjoy! Now to see your channels and recommendations!
          </ContactText>
        </ContactViewContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default ContactView
