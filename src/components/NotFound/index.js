import {
  NotFoundView,
  NotFoundImage,
  NotFoundHeading,
  NotFoundPara,
  PanelAndMainContainer,
  LeftPanelViewInLargeScreen,
} from './styledComponents'

import NavBar from '../NavBar'
import LeftPanelView from '../LeftPanelView'

const NotFound = () => (
  <>
    <NavBar />
    <PanelAndMainContainer>
      <LeftPanelViewInLargeScreen>
        <LeftPanelView />
      </LeftPanelViewInLargeScreen>
      <NotFoundView>
        <NotFoundImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          alt="not found"
        />
        <NotFoundHeading>Page Not Found</NotFoundHeading>
        <NotFoundPara>
          We are sorry, the page you requested could not be found.
        </NotFoundPara>
      </NotFoundView>
    </PanelAndMainContainer>
  </>
)

export default NotFound
