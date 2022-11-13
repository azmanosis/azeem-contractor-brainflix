import './Card.scss'

const Card = (props) => {
    console.log(props);
    return (
        <>
        <div className="videos__container" onClick={() => props.handleClickVideo(props.id)}>
            <div className="videos__container--image">
                <img src={props.image} className="videos__container--image--width" alt=""></img>
            </div>
            <div className="videos__container--heading">
                <p className="videos__container--heading--title">{props.title}</p>
                <p className="videos__container--heading--channel">{props.channel}</p>
            </div>
        </div>
        </>
    )
        
        // <div className="videos__container" onClick={() => props.handleClickVideo(videos)}>
        //         <div className="videos__container--image">
        //             <img className="videos__container--image--width" src={video.image} alt=""></img>
        //         </div>
        //         <div className="videos__container--2">
        //             <p className="videos__title">{video.title}</p>
        //             <p className="videos__channel">{video.channel}</p>
        //         </div>
        //     </div>
}
export default Card;