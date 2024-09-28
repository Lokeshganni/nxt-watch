import {Link} from 'react-router-dom'
import './gameItem.css'

const GameItem = ({game, isDarkTheme}) => {
  const {thumbnailUrl, title, viewCount,id} = game
  return (
    <li className="game-item-li-container">
    <Link to={`videos/${id}`}>
      <img src={thumbnailUrl} alt="video thumbnail" />
      <p style={{color: `${isDarkTheme ? '#ffffff' : '#000000'}`}}>{title}</p>
      <div className="watching-and-worldwide-container">
        <p>{viewCount} Watching</p>
        <p>Worldwide</p>
      </div>
      </Link>
    </li>
  )
}

export default GameItem
