import {Component} from 'react'
import Cookies from 'js-cookie'

import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../Context/ThemeContext'

import {
  HomeContainer,
  HomeVideosSection,
  SearchSection,
  SearchButton,
  InputSearch,
  HomeVideosList,
  Banner,
  BannerHeading,
  Image,
  GetItNowButton,
  CloseButton,
  Button,
  Para,
  Heading,
  Body,
} from './styledComponents'

import SideBar from '../SideBar'

import Header from '../Header'
import HomeVideoCard from '../HomeVideoCard'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

let searchInput

class Home extends Component {
  state = {
    homeVideosList: [],
    apiStatus: apiStatusConstants.initial,
    inputSearch: '',
    close: false,
  }

  componentDidMount() {
    this.getApiVideos()
  }

  getApiVideos = async () => {
    const {inputSearch} = this.state
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${inputSearch}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      this.setState({
        homeVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onChangeSearch = event => {
    searchInput = event.target.value
  }

  onClickSearch = () => {
    this.setState({inputSearch: searchInput}, this.getApiVideos)
  }

  render() {
    const {close} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme, changeTheme} = value
          const onClickClose = () => {
            this.setState({close: true})
          }

          const noSearchResultsView = () => (
            <div className="container">
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
                className="failure-img"
              />
              <Heading>No Search results found</Heading>
              <Para>Try different key words or remove search filter</Para>
              <Button
                className="retry-btn"
                type="button"
                onClick={this.getApiVideos}
              >
                Retry
              </Button>
            </div>
          )

          const renderVideosList = () => {
            const {homeVideosList} = this.state
            if (homeVideosList.length === 0) {
              return noSearchResultsView()
            }
            return (
              <>
                {homeVideosList.map(each => (
                  <HomeVideoCard
                    cardDetails={each}
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

          const homeBg = lightTheme ? '#f9f9f9' : '#181818'
          const color = lightTheme ? '#000' : '#fff'
          const videosBg = lightTheme ? '#f8fafc' : '#000'
          const NxtWatchLogo = lightTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          return (
            <HomeContainer data-testid="home" bgColor={homeBg}>
              <Header lightTheme={lightTheme} changeTheme={changeTheme} />
              <Body>
                <SideBar color={color} />
                <HomeVideosSection bgColor={videosBg}>
                  {close ? null : (
                    <Banner data-testid="banner">
                      <CloseButton data-testid="close" onClick={onClickClose}>
                        <AiOutlineClose size="20" />
                      </CloseButton>
                      <Image src={NxtWatchLogo} alt="nxt watch logo" />
                      <BannerHeading>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerHeading>
                      <GetItNowButton type="button">GET IT NOW</GetItNowButton>
                    </Banner>
                  )}

                  <SearchSection>
                    <InputSearch
                      onChange={this.onChangeSearch}
                      type="search"
                      placeholder="Search"
                    />
                    <SearchButton
                      data-testid="searchButton"
                      onClick={this.onClickSearch}
                      type="button"
                    >
                      <AiOutlineSearch />
                    </SearchButton>
                  </SearchSection>
                  <HomeVideosList>{getApiStatus()}</HomeVideosList>
                </HomeVideosSection>
              </Body>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Home
