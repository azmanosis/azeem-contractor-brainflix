import './Uploads.scss';
import Header from '../../components/Header/Header';
import Uploadimage from '../../assets/images/Upload-video-preview.jpg';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Uploads = () => {
    const [videosData, setVideodata] = useState([]);
    const formRef = useRef();

    const handleClick = () => {
        window.alert("Your Video Data is Uploaded")
    };

    const addVideo = (e) => {
        e.preventDefault();
        const video_data = {
            title: formRef.current.title.value,
            description: formRef.current.description.value
        }

        axios.post("http://localhost:8080/videos", video_data).then((response) => {
            axios.get("http://localhost:8080/videos").then((response) => {
                setVideodata(response.data)
            })
        })
    };

    return (
        <>
            <Header />

            <div className="upload">
                <p className="upload__title">upload video</p>
                <div className="upload__section">
                    <div className="upload__section--thumbnail">
                        <p className="upload__section--thumbnail--words">video thumbnail</p>
                        <img src={Uploadimage} className="upload__section--thumbnail--image" alt="videos"></img>
                    </div>
                    <form id="publish" className="upload__section--comments" onSubmit={addVideo} ref={formRef}>
                        <div className="upload__section--comments--a">
                            <label className="upload__section--comments--a--title" htmlFor="title">title your video</label>
                            <input id="title" className="upload__section--comments--a--input" type="text" name="title" placeholder="Add a title to your video"></input>
                        </div>
                        <div className="upload__section--comments--b">
                            <label className="upload__section--comments--b--title" htmlFor="description">add a video description</label>
                            <textarea id="description" className="upload__section--comments--b--input" name="description" type="text" placeholder="Add a description to your video"></textarea>
                        </div>
                        <div className="upload__section--comments--link">
                            <button className="upload__section--comments--link--publish" onClick={handleClick} >publish</button>
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