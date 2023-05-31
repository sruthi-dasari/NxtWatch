import styled from 'styled-components'

export const ContactViewContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContactHeading = styled.p`
  color: ${props => (props.$isDarkTheme ? '#ffffff' : '#1e293b')};
  font-weight: 500;
  font-size: 22px;
  font-family: 'Roboto';
`
// #1e293b
export const SocialMediaContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 150px;
    display: flex;
    justify-content: space-between;
  }
`

export const ContactText = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => (props.$isDarkTheme ? '#ffffff' : '#1e293b')};
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 500;
    width: 220px;
  }
`

export const SocialMediaIcon = styled.img`
  height: 20px;
  width: 20px;
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 40px;
  }
`
