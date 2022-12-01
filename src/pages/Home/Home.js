import './Home.scss';
import Header from '../../components/Header/Header';
import Video from '../../components/Video/Video';
import { useState, useEffect } from 'react';
import Section from '../../components/Section/Section';
import Commentbox from '../../components/Commentbox/Commentbox';
import Comment from '../../components/Comments/Comments';
import Nextvideo from '../../components/Nextvideo/Nextvideo';
// import Data from '../../data/video-details.json';
import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


// Sprint-1 components
const Home = () => {
    const { id } = useParams()
    const url = `https://project-2-api.herokuapp.com/videos?api_key=ce6162de-a18f-4f0a-a1d8-43900ef59215`;
    const [videos, setVideos] = useState(null);


    let content = null



    useEffect(() => {
        axios.get(url)
            .then(response => {
                setVideos(response.data)
            })
        console.log(videos)
    }, [url]);


    // state = {
    //     videos: [],
    //     activeVideo: null,
    //   };
    //   componentDidMount() {
    //     axios
    //       .get(`${API_URL}videos/?api_key=${API_KEY}`)
    //       .then((response) => {
    //         this.setState({
    //           videos: response.data,
    //         });
    //         const activeVideoId = this.props.match.params.id || response.data[0].id;
    //         this.getActiveVideo(activeVideoId);
    //       })
    //       .catch((err) => console.log(err));
    //   }
    //   componentDidUpdate(prevProps) {
    //     const videoId = this.props.match.params.id;
    //     const prevVideoId = prevProps.match.params.id;
    //     if (videoId !== prevVideoId) {
    //       if (typeof videoId === "undefined") {
    //         const defaultVideoId = this.state.videos[0].id;
    //         this.getActiveVideo(defaultVideoId);
    //       }
    //       this.getActiveVideo(videoId).then(window.scrollTo(0, 0));
    //     }
    //   }
    //   getActiveVideo(videoId) {
    //     return axios
    //       .get(`${API_URL}videos/${videoId}?api_key=${API_KEY}`)
    //       .then((response) => {
    //         this.setState({
    //           activeVideo: response.data,
    //         });
    //       })
    //       .catch((err) => console.log(err));
    //   }


    if (videos) {

        const handleClickVideo = (id) => {
            videos.map(details => {
                if (details.id === id) {
                    setVideos(details)
                }
            })
        }

        // code from Fahd
        //Create a method to fetch matching id video
        //   fetchVideo = (videoId) => {
        //     axios
        //       .get(`…/videos/${videoId}`)
        //       .then((response) =>
        //         this.setState({
        //           selectedMovie: response.data,
        //         })
        //       )
        //       .catch((err) => console.error(err));
        //   };
        // Add turnery && 
        return
        <>
            {/* Header */}
            < Header />
            <Video poster={videos.image} />
            <div className="belowvideo">
                <div className="belowvideo__sectioncomments">
                    <Section sections={videos} />
                    <Commentbox commentlength={videos.comments.length} commentword={"Comments"} />
                    <Comment comments={videos.comments} />
                </div>
                <div className="belowvideo__nextvideo">
                    <p className="belowvideo__nextvideo--text">next videos</p>
                    <Nextvideo handleClickVideo={handleClickVideo} nextvideo={videos} activevideoid={videos.id} />
                </div>
            </div>
        </>
    }

    return (
        <div>{content}</div>
    )


    // Sprint 1 from Below
    // const [videodetails, setVideoDetails] = useState(Data[0]);


    // return (
    //     <>
    //         {/* Header */}
    //         <Header />
    //         <Video poster={videodetails.image} />
    //         <div className="belowvideo">
    //             <div className="belowvideo__sectioncomments">
    //                 <Section sections={videodetails} />
    //                 <Commentbox commentlength={videodetails.comments.length} commentword={"Comments"} />
    //                 <Comment comments={videodetails.comments} />
    //             </div>
    //             <div className="belowvideo__nextvideo">
    //                 <p className="belowvideo__nextvideo--text">next videos</p>
    //                 <Nextvideo handleClickVideo={handleClickVideo} nextvideo={Data} activevideoid={videodetails.id} />
    //             </div>
    //         </div>
    //     </>
    // )
}

export default Home