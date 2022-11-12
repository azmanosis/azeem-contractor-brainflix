import './App.scss';
import Header from './components/Header/Header';
import Data from '../src/data/video-details.json';
import VideoList from '../src/data/videos.json';
import Video from './components/Video/Video';
import {useState} from 'react';
import Section from './components/Section/Section';
import Comment from './components/Comments/Comments';
import Nextvideo from './components/Nextvideo/Nextvideo';


function App() {
  
  // const [video, setVideo] = useState(VideoList);
  // const [videodetails, setVideoDetails] = useState(Data[0]);

  // function changeVideo(title){
  //   if(title !== Data.title) {
  //     const foundVideo = Data.find(element => element.title===title);
  //     setVideo(foundVideo);

  //     const filteredList = VideoList.filter((newVal) => {
  //       return newVal.title !== title;
  //     });

  //     setVideo(filteredList);
  //   }
  // }

  // function videoFilter(title){

  //   if(title === Data.title) {
  //     const filteredList = VideoList.filter((newVal) => {
  //       return newVal.title !== VideoList.title;
  //     });

  //     setVideo(filteredList);
  //   }
  // }



  const selectivevideo = Data[0]
  const NextVideo = VideoList
  
  // Initial state to Data [0]
  // Initializing state for Video list

  return (
    <div>
      {/* Header */}
      <Header />
      {/* Video */}
      <Video poster={selectivevideo.image}/>
      {/* Section */}
      <Section title={selectivevideo.title} channel={selectivevideo.channel} views= {selectivevideo.views} likes={selectivevideo.likes} timestamp={selectivevideo.timestamp}/>
      
      <Comment comments={selectivevideo.comments}/>
      {/* Nextvideo */}
      <Nextvideo nextvideo={NextVideo}/>
      {/* <Nextvideo/> */}
    </div>
  );

  // return (
  //   <>
  //     {/* Header */}
  //     <Header/>
  //     <Video maindata={videodetails}/>
  //     <VideoDesc maindata={videodetails}/>
  //     <Nextvideo data={video} changeVideo={changeVideo} videoFilter={videoFilter}/>
  //   </>
  // )
}

export default App;
