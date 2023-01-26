import {Link} from 'react-router-dom'

import {Title, Name} from './styledComponents'
import './index.css'

const GamingCard = props => {
  const {gameDetails, lightTheme} = props
  const {id, title, thumbnailUrl, viewCount} = gameDetails

  const color = lightTheme ? '#000' : '#fff'

  return (
    <Link to={`/videos/${id}`} className="link">
      <li className="home-cardG">
        <img
          src={thumbnailUrl}
          alt="video thumbnail"
          className="video-thumbnailG"
        />
        <Title color={color} className="titleG">
          {title}
        </Title>
        <Name color={color} className="view-countG">
          {viewCount} Watching Worldwide
        </Name>
      </li>
    </Link>
  )
}
export default GamingCard
