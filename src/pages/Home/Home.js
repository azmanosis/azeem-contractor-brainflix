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
import Data from '../../data/video-details.json';


// Sprint-1 components
const Home = () => {
    const { videoId } = useParams();
    const [APIkey, setAPIkey] = useState("");
    const [videos, setVideos] = useState([]);
    const [activevideo, setActivevideo] = useState(Data[0]);

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
                console.log(response.data)
            });
    }, [APIkey])

    useEffect(() => {
        axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=` + APIkey)
            .then(response => {
                setActivevideo(response.data)
                console.log(response.data)
            });
    }, [APIkey, videoId]);

    return (
        <div>
            <Header />
            {activevideo &&
                <Video poster={activevideo.image} />
            }
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
    )

    // const handleClickVideo = (id) => {
    //     Data.map(details => {
    //         if (details.id === id) {
    //             setVideos(details)
    //         }
    //     })
    // }

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



    // Sprint 1 from Below
    // const [videodetails, setVideoDetails] = useState(Data[0]);

    // const handleClickVideo = (id) => {
    //     Data.map(details => {
    //         if (details.id === id) {
    //             setVideos(details)
    //         }
    //     })
    // }

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