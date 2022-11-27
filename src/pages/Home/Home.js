import './Home.scss';
import Header from '../../components/Header/Header';
import Video from '../../components/Video/Video';
import { useState } from 'react';
import Section from '../../components/Section/Section';
import Commentbox from '../../components/Commentbox/Commentbox';
import Comment from '../../components/Comments/Comments';
import Nextvideo from '../../components/Nextvideo/Nextvideo';
import Data from '../../data/video-details.json';

// Make API call and use params
import { useParams } from 'react-router-dom';
import axios from 'axios';


// function to use params from api videoId
function VideoId() {
    const params = useParams();
    return <div>{params.videoId}</div>
}

let apiKey = '';

function getApiKey() {
    if (apiKey = '') {
        let userURL = "https://project-2-api.herokuapp.com/register";
        return axios.get(userURL).then((response) => {
            apiKey = response.data.api_key;
            return Promise.resolve(apiKey)
        })
    } else {
        return Promise.resolve(apiKey)
    }
}

getVideoData()

axios.get("https://project-2-api.herokuapp.com/register").then((response) => {
    apiKey = response.data.api_key;
    return apiKey
}).then((apiKey) => {
    axios.get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}/`)
        .then((response) => console.log(response));
}).catch(error => console.log(error));

function getVideoData() {
    getApiKey().then((apiKey) => axios.get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}/`))
        .then((response) => {
            videodetails = response.data
            Infinity(videodetails)
        }).catch(error => console.log(error));
}

let videodetails = []

// Sprint-1 components
const Home = () => {

    const [videodetails, setVideoDetails] = useState(Data[0]);


    const handleClickVideo = (id) => {
        Data.map(details => {
            if (details.id === id) {
                setVideoDetails(details)
            }
        })
    }

    return (
        <>
            {/* Header */}
            <Header />
            <Video poster={videodetails.image} />
            <div className="belowvideo">
                <div className="belowvideo__sectioncomments">
                    <Section sections={videodetails} />
                    <Commentbox commentlength={videodetails.comments.length} commentword={"Comments"} />
                    <Comment comments={videodetails.comments} />
                </div>
                <div className="belowvideo__nextvideo">
                    <p className="belowvideo__nextvideo--text">next videos</p>
                    <Nextvideo handleClickVideo={handleClickVideo} nextvideo={Data} activevideoid={videodetails.id} />
                </div>
            </div>
        </>
    )
}

export default Home