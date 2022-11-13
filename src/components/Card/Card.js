import './Card.scss'

const Card = (props) => {
    console.log(props);
    return (
        <>
            <div className="videos" onClick={() => props.handleClickVideo(props.id)}>
                <div className="videos__container">
                    <img src={props.image} className="videos__container--image" alt=""></img>
                </div>
                <div className="videos__heading">
                    <p className="videos__heading--title">{props.title}</p>
                    <p className="videos__heading--channel">{props.channel}</p>
                </div>
            </div>
        </>
    )
}
export default Card;