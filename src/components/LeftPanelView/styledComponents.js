import styled from 'styled-components'

export const LeftPanelViewContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '')};
  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`
