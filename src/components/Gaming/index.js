import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import {GiTechnoHeart} from 'react-icons/gi'
import ThemeContext from '../../Context/ThemeContext'
import GamingCard from '../GamingCard'

import {
  GameContainer,
  GamingVideosSection,
  GamingVideosList,
  GamingHeadSection,
  GamingHeading,
  Image,
  Button,
  Heading,
  Para,
  Body,
} from './styledComponents'

import SideBar from '../SideBar'

import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingVideosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getApiVideos()
  }

  getApiVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      this.setState({
        gamingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme, changeTheme} = value
          const color = lightTheme ? '#000' : '#fff'

          const videosBg = lightTheme ? '#f9f9f9' : '#0f0f0f'

          const renderVideosList = () => {
            const {gamingVideosList} = this.state

            return (
              <>
                {gamingVideosList.map(each => (
                  <GamingCard
                    gameDetails={each}
                    key={each.id}
                    lightTheme={lightTheme}
                  />
                ))}
              </>
            )
          }

          const renderFailureView = () => {
            const FailureUrl = lightTheme
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

            return (
              <div className="container">
                <Image
                  className="failure-img"
                  src={FailureUrl}
                  alt="failure view"
                />
                <Heading>Oops! Something Went Wrong</Heading>
                <Para>
                  We are having some trouble to complete your request.Please try
                  again
                </Para>
                <Button
                  className="retry-btn"
                  type="button"
                  onClick={this.getApiVideos}
                >
                  Retry
                </Button>
              </div>
            )
          }

          const renderLoadingView = () => (
            <div className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
            </div>
          )

          const getApiStatus = () => {
            const {apiStatus} = this.state
            switch (apiStatus) {
              case apiStatusConstants.success:
                return renderVideosList()
              case apiStatusConstants.failure:
                return renderFailureView()
              case apiStatusConstants.inProgress:
                return renderLoadingView()
              default:
                return null
            }
          }
          return (
            <>
              <GameContainer data-testid="gaming" bgColor={videosBg}>
                <Header lightTheme={lightTheme} changeTheme={changeTheme} />

                <Body>
                  <SideBar color={color} />

                  <GamingVideosSection>
                    <GamingHeadSection>
                      <GiTechnoHeart size="35" color="red" />
                      <GamingHeading color={color}>Gaming</GamingHeading>
                    </GamingHeadSection>
                    <GamingVideosList>{getApiStatus()}</GamingVideosList>
                  </GamingVideosSection>
                </Body>
              </GameContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Gaming
