import {Component} from 'react'
import ReactPlayer from 'react-player'
import {BsFillPlayBtnFill} from 'react-icons/bs'
import './index.css'

const videosList = [
  {
    id: 1,
    url: 'https://www.youtube.com/watch?v=6mrh4o2RPpI',
    img:
      'https://i.ytimg.com/vi/6mrh4o2RPpI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYmA2ZYhxEU3jpSgMDV3IEycCa4g',
  },
  {
    id: 2,
    url:
      'https://www.youtube.com/watch?v=XXYlFuWEuKI&list=RDXXYlFuWEuKI&start_radio=1',
    img:
      'https://i.ytimg.com/vi/XXYlFuWEuKI/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAVxfT5zvzKOwFKKlZESGDIerVWHA',
  },
  {
    id: 3,
    url: 'https://www.youtube.com/watch?v=qFLhGq0060w',
    img:
      'https://i.ytimg.com/vi/qFLhGq0060w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLJmRrBxW0KZ3yZAUFwOWMrNCzsA',
  },
]

class VideoPlayer extends Component {
  state = {
    isPlaying: true,
    activeVideId: videosList[0].id,
  }

  onClikingPlayPauseButton = () => {
    this.setState(prvState => ({
      isPlaying: !prvState.isPlaying,
    }))
  }

  onClikingvidoImg = event => {
    console.log(event.target.value)
  }

  render() {
    const {isPlaying} = this.state
    return (
      <div className="video-container">
        <div className="box-1">
          <div className="iconContainer">
            <BsFillPlayBtnFill className="icon" />
            <h1 className="tube">SpamTube</h1>
          </div>
          <div className="responsive-container">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=qFLhGq0060w"
              playing={isPlaying}
              pip="true"
            />
          </div>
          <button
            type="button"
            onClick={this.onClikingPlayPauseButton}
            className="button"
          >
            play and pause
          </button>
        </div>
        <div>
          {videosList.map(item => (
            <button
              type="button"
              className="thumbnailButton"
              onClic={this.onClikingvidoImg}
            >
              <img src={item.img} className="thumbnailImg" />
            </button>
          ))}
        </div>
      </div>
    )
  }
}

export default VideoPlayer
