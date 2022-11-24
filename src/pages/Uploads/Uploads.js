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
                <div className="upload__thumbnail">
                    <p className="upload__thumbnail--words">video thumbnail</p>
                    <img src={Uploadimage} className="upload__thumbnail--image"></img>
                </div>
                <form id="publish" className="upload__comments">
                    <div className="upload__comments--a">
                        <label className="upload__comments--a--title" for="video title">title your video</label>
                        <input id="enter__video__title" className="upload__comments--a--input" type="text" value="" placeholder="add a title to your video"></input>
                    </div>
                    <div className="upload__comments--b">
                        <label className="upload__comments--b--title" for="video title">add a video description</label>
                        <textarea id="enter__video__title" className="upload__comments--b--input" type="text" placeholder="add a description to your video"></textarea>
                    </div>
                    <button className="upload__comments--publish">publish</button>
                </form>
                <Link to="/" className="upload__cancel">
                    <button className="upload__cancel--button">cancel</button>
                </Link>
            </div>
        </>
    )
}

export default Uploads