import './Nextvideo.scss';

const Nextvideo = (props) => {
    return props.nextvideo.map((video) => {
        return (
            <>
                <img src={video.image} alt=""></img>
                <h1>{video.title}</h1>
                <p>{video.channel}</p>
            </>
        )
    })
}

export default Nextvideo