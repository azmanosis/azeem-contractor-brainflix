import './App.scss';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import {useState} from 'react';
import Section from './components/Section/Section';
import Commentbox from './components/Commentbox/Commentbox';
import Comment from './components/Comments/Comments';
import Nextvideo from './components/Nextvideo/Nextvideo';
import Data from '../src/data/video-details.json';
import VideoList from '../src/data/videos.json';


function App() {
  
  // const [video, setVideo] = useState(VideoList);
  const [videodetails, setVideoDetails] = useState(Data[0]);

  function changeVideo(title){
    

    // if(title !== Data.title) {
    //   const foundVideo = Data.find(element => element.title===title);
    //   setVideo(foundVideo);

    //   const filteredList = VideoList.filter((newVal) => {
    //     return newVal.title !== title;
    //   });

    //   setVideo(filteredList);
    // }

    setVideoDetails(title)
  }


  // function videoFilter(title){

  //   if(title === Data.title) {
  //     const filteredList = VideoList.filter((newVal) => {
  //       return newVal.title !== VideoList.title;
  //     });

  //     setVideo(filteredList);
  //   }
  // }

  const handleClickVideo = (id) => {
    Data.map(details => {
      if(details.id === id) {
        setVideoDetails(details)
      }
    })
  }

  return (
    <>
      {/* Header */}
      <Header />
      <Video poster={videodetails.image}/>
      <Section sections={videodetails}/>
      <Commentbox commentlength={videodetails.comments.length} commentword={"Comments"}/>
      <Comment comments={videodetails.comments} />
      <p className="nextvideo">next videos</p>
      <Nextvideo handleClickVideo={handleClickVideo} nextvideo={Data} activevideoid={videodetails.id}/> 
    </>
  )
}

export default App;
