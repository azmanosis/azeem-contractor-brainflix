import './Card.scss';
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <>
            <Link to={`/videos/${props.id}`} className="videolink" >
                <div className="videos">
                    <div className="videos__container">
                        <img src={props.image} className="videos__container--image" alt="videos"></img>
                    </div>
                    <div className="videos__heading">
                        <p className="videos__heading--title">{props.title}</p>
                        <p className="videos__heading--channel">{props.channel}</p>
                    </div>
                </div>
                {/* <div></div> */}
            </Link>
        </>
    )
}
export default Card;