import ThemeContext from '../../Context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {HomeContainer, NotFoundSection, Heading, Para} from './styledComponents'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme, changeTheme} = value
      const color = lightTheme ? '#000' : '#fff'
      const homeBg = lightTheme ? '#f9f9f9' : '#181818'
      const videosBg = lightTheme ? '#f9f9f9' : '#0f0f0f'
      const image = lightTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Header lightTheme={lightTheme} changeTheme={changeTheme} />
          <HomeContainer bgColor={homeBg}>
            <SideBar color={color} />
            <NotFoundSection bgColor={videosBg}>
              <img className="not-found" src={image} alt="not found" />
              <Heading color={color}>Page Not Found</Heading>
              <Para color={color}>
                We are sorry, the page you requested could not be found.
              </Para>
            </NotFoundSection>
          </HomeContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
