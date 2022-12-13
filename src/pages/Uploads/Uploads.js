import './Uploads.scss';
import Header from '../../components/Header/Header';
import Uploadimage from '../../assets/images/Upload-video-preview.jpg';
import { Link } from 'react-router-dom';

const Uploads = () => {
    return (
        <>
            {/* Header */}
            <Header />

            <div className="upload">
                <p className="upload__title">upload video</p>
                <div className="upload__section">
                    <div className="upload__section--thumbnail">
                        <p className="upload__section--thumbnail--words">video thumbnail</p>
                        <img src={Uploadimage} className="upload__section--thumbnail--image" alt="videos"></img>
                    </div>
                    <form id="publish" className="upload__section--comments">
                        <div className="upload__section--comments--a">
                            <label className="upload__section--comments--a--title" for="video title">title your video</label>
                            <input id="enter__video__title" className="upload__section--comments--a--input" type="text" value="" placeholder="Add a title to your video"></input>
                        </div>
                        <div className="upload__section--comments--b">
                            <label className="upload__section--comments--b--title" for="video title">add a video description</label>
                            <textarea id="enter__video__title" className="upload__section--comments--b--input" type="text" placeholder="Add a description to your video"></textarea>
                        </div>
                        <div className="upload__section--comments--link">
                            <button className="upload__section--comments--link--publish" onClick={event => event.preventDefault()}>publish</button>
                            <Link to="/" className="upload__section--comments--link--cancel">
                                <button className="upload__section--comments--link--cancel--button">cancel</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Uploads