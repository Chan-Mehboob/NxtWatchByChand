import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import ThemeContext from '../../Context/ThemeContext'
import SideBar from '../SideBar'

import Header from '../Header'
import './index.css'
import {
  HomeContainer,
  VideoSection,
  Title,
  Name,
  Hr,
  LikeButton,
  Para,
  Heading,
  Button,
  Image,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoData: {},
    like: false,
    dislike: false,
    save: false,
  }

  componentDidMount() {
    this.getApiVideoData()
  }

  getApiVideoData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = {
        id: fetchedData.video_details.id,
        title: fetchedData.video_details.title,
        videoUrl: fetchedData.video_details.video_url,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        name: fetchedData.video_details.channel.name,
        profileImageUrl: fetchedData.video_details.channel.profile_image_url,
        subscriberCount: fetchedData.video_details.channel.subscriber_count,
        viewCount: fetchedData.video_details.view_count,
        publishedAt: fetchedData.video_details.published_at,
        description: fetchedData.video_details.description,
      }

      this.setState({
        videoData: updatedData,
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
          const {addSavedVideos, lightTheme, changeTheme} = value

          const onAddSavedVideos = () => {
            const {videoData} = this.state
            this.setState(prevState => ({save: !prevState.save}))
            addSavedVideos(videoData)
          }

          const onToggleLike = () => {
            this.setState(prevState => ({
              like: !prevState.like,
              dislike: false,
            }))
          }

          const onToggleDisLike = () => {
            this.setState(prevState => ({
              dislike: !prevState.dislike,
              like: false,
            }))
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
                  We are having some trouble to complete your request. Please
                  try again.
                </Para>
                <Button
                  className="retry-btn"
                  type="button"
                  onClick={this.getApiVideoData}
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

          const renderVideosList = () => {
            const {videoData, like, dislike, save} = this.state
            const {
              title,
              videoUrl,
              name,
              profileImageUrl,
              subscriberCount,
              viewCount,
              publishedAt,
              description,
            } = videoData
            const color = lightTheme ? '#000' : '#fff'
            const dateFormat = formatDistanceToNow(new Date(publishedAt))
            const changedColorLike = like ? '#2563eb' : '#64748b'
            const changedColorDisLike = dislike ? '#2563eb' : '#64748b'
            const saveColor = save ? '#2563eb' : '#64748b'
            const saveText = save ? 'Saved' : 'Save'

            return (
              <>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="80vw"
                  height="70vh"
                />
                <Title color={color} className="title">
                  {title}
                </Title>
                <div className="views-like">
                  <div className="views-date">
                    <Name color={color} className="view-count">
                      {viewCount} views
                    </Name>
                    <BsDot size="20" color={color} />
                    <Name color={color} className="date-format">
                      {dateFormat}
                    </Name>
                  </div>
                  <div className="likes-sec">
                    <LikeButton onClick={onToggleLike}>
                      <AiOutlineLike size="20" color={changedColorLike} />
                      <Para changedColor={changedColorLike} className="like">
                        Like
                      </Para>
                    </LikeButton>
                    <LikeButton onClick={onToggleDisLike}>
                      <AiOutlineDislike size="20" color={changedColorDisLike} />
                      <Para changedColor={changedColorDisLike} className="like">
                        Dislike
                      </Para>
                    </LikeButton>
                    <LikeButton color={saveColor} onClick={onAddSavedVideos}>
                      <BiListPlus size="20" color={color} />
                      <Para color={saveColor} className="like">
                        {saveText}
                      </Para>
                    </LikeButton>
                  </div>
                </div>
                <Hr color={color} />
                <div className="comments-sec">
                  <img
                    src={profileImageUrl}
                    alt="channel logo"
                    className="channel-logo"
                  />
                  <div className="channel-infoo">
                    <Name color={color}>{name}</Name>
                    <Name className="count" color={color}>
                      {subscriberCount} subscribers
                    </Name>
                    <Name color={color}>{description}</Name>
                  </div>
                </div>
              </>
            )
          }

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

          const color = lightTheme ? '#000' : '#fff'
          const videosBg = lightTheme ? '#f9f9f9' : '#0f0f0f'

          return (
            <>
              <Header lightTheme={lightTheme} changeTheme={changeTheme} />
              <HomeContainer data-testid="videoItemDetails" bgColor={videosBg}>
                <SideBar color={color} />

                <VideoSection>{getApiStatus()}</VideoSection>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default VideoItemDetails
