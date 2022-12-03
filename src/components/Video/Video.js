import './Video.scss';

function Video(props) {
    console.log(props)
    return (
        <div className="container">
            <video poster={props.poster} className="container__video">
            </video>
            <div className="container__controls">
                <div className="container__controls--button">
                    <button className="container__controls--button--play"></button>
                </div>
                <div className="container__controls--timeline">
                    <div className="container__controls--timeline--bar">
                        <div className="container__controls--timeline--bar--inner"></div>
                    </div>
                </div>
                <div className="container__controls--fullvolume">
                    <button className="container__controls--fullvolume--fullscreen"></button>
                    <button className="container__controls--fullvolume--volume"></button>
                </div>
            </div>
        </div>
    )
}

export default Video