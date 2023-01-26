import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {Title, Name} from './styledComponents'
import './index.css'

const TrendingCard = props => {
  const {trendDetails, lightTheme} = props
  const {id, title, thumbnailUrl, name, viewCount, publishedAt} = trendDetails
  const dateFormat = formatDistanceToNow(new Date(publishedAt))
  const color = lightTheme ? '#000' : '#fff'

  return (
    <Link to={`/videos/${id}`} className="link">
      <li className="home-card">
        <img
          src={thumbnailUrl}
          alt="video thumbnail"
          className="video-thumbnail"
        />
        <div className="channel-sec">
          <Title color={color} className="title">
            {title}
          </Title>
          <Name color={color} className="name">
            {name}
          </Name>
          <div className="views-date">
            <Name color={color} className="view-count">
              {viewCount} views
            </Name>
            <BsDot size="20" color={color} />
            <Name color={color} className="date-format">
              {dateFormat}
            </Name>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default TrendingCard
