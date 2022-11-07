import './Video.scss';
import Videos from '../../data/video-details.json';

function Video() {
    return (
        <div>
            {
                Videos.map(video => {
                    return (
                        <video poster={video.image} className = "poster" key = {video.id}>
                        </video>
                    )
                })
            }
        </div>
    )
}

export default Video