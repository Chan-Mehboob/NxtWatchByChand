import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {Title, Name} from './styledComponents'
import './index.css'

const HomeVideoCard = props => {
  const {cardDetails, lightTheme} = props
  const {
    id,
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = cardDetails
  const dateFormat = formatDistanceToNow(new Date(publishedAt))
  const color = lightTheme ? '#000' : '#fff'

  return (
    <Link to={`/videos/${id}`} className="link">
      <li className="home-cardH">
        <img
          src={thumbnailUrl}
          alt="video thumbnail"
          className="video-thumbnailH"
        />
        <div className="channel-secH">
          <img
            src={profileImageUrl}
            alt="channel logo"
            className="channel-logoH"
          />
          <div className="channel-infoH">
            <Title color={color} className="titleH">
              {title}
            </Title>
            <Name color={color} className="nameH">
              {name}
            </Name>
            <div className="views-dateH">
              <Name color={color} className="view-countH">
                {viewCount} views
              </Name>
              <BsDot size="20" color={color} />
              <Name color={color} className="date-formatH">
                {dateFormat}
              </Name>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default HomeVideoCard
