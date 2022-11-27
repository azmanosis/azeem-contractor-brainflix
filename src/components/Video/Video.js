import './Video.scss';
import { useState } from 'react';
import play from '../../assets/icons/play.svg';
import pause from '../../assets/icons/pause.svg';

function Video(props) {

    // let name = 'play';
    const [name, setName] = useState(play);

    const handleClick = () => {
        setName(pause);
    }

    return (
        <div className="container">
            <video poster={props.poster} className="container__video">
            </video>
            <div className="container__controls">
                <div className="container__controls--button">
                    <button onClick={handleClick} className="container__controls--button--play">{name}</button>
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