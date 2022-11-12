import './Video.scss';

function Video (props) {
    return (
        <div className="container">
            <video poster={props.poster} className="container__video">
            </video>
            <div className="container__controls">
                <div className="container__controls--button">
                    <img className="container__controls--button--play"></img>
                </div>
                <div className="container__controls--timeline">
                    <div className="container__controls--timeline--bar">
                        <div className="container__controls--timeline--bar--inner"></div>
                    </div>
                </div>
                <div className="container__controls--fullvolume">
                    <img className="container__controls--fullvolume--fullscreen"></img>
                    <img className="container__controls--fullvolume--volume"></img>
                </div>
            </div>
        </div>
    )
}

export default Video