import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './Home.scss';
import Header from '../../components/Header/Header';
import Video from '../../components/Video/Video';
import Section from '../../components/Section/Section';
import Commentbox from '../../components/Commentbox/Commentbox';
import Comment from '../../components/Comments/Comments';
import Nextvideo from '../../components/Nextvideo/Nextvideo';
// import Data from '../../data/video-details.json';

const Home = () => {
    const { videoId } = useParams();
    const [APIkey, setAPIkey] = useState("");
    const [videos, setVideos] = useState([]);
    const [activevideo, setActivevideo] = useState();

    useEffect(() => {
        axios.get("https://project-2-api.herokuapp.com/register")
            .then(response => {
                setAPIkey(response.data);
            });
    }, [])

    useEffect(() => {
        axios.get("https://project-2-api.herokuapp.com/videos?api_key=" + APIkey)
            .then(response => {
                setVideos(response.data)
            });
    }, [APIkey]);

    useEffect(() => {
        axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=` + APIkey)
            .then(response => {
                setActivevideo(response.data)
                // The window scroll renders the page and loads from top
                window.scrollTo(0, 0)
            });
    }, [APIkey, videoId]);

    return (
        // use fragmanets below
        <>
            {/* This allows to have a loading page before rendering the main page */}
            {!activevideo && <p>Loading page...</p>}
            {/* this allows for the code to wait for API to load before rendering */}
            {activevideo && (
                <>
                    <div>
                        <Header />
                        <Video poster={activevideo.image} />
                        <div className="belowvideo">
                            <div className="belowvideo__sectioncomments">
                                <Section sections={activevideo} />
                                <Commentbox commentlength={activevideo.comments.length} commentword={"Comments"} />
                                <Comment comments={activevideo.comments} />
                            </div>
                            <div className="belowvideo__nextvideo">
                                <p className="belowvideo__nextvideo--text">next videos</p>
                                <Nextvideo nextvideo={videos} activevideoid={activevideo.id} />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Home