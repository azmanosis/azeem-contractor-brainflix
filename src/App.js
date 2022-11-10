import './App.scss';
import Header from './components/Header/Header';
import Data from '../src/data/video-details.json';
import VideoList from '../src/data/videos.json';
import Video from './components/Video/Video';
import Section from './components/Section/Section';
import Comment from './components/Comments/Comments';
import Nextvideo from './components/Nextvideo/Nextvideo';


function App() {

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
      <Section title={selectivevideo.title}/>
      <Section channel={selectivevideo.channel}/>
      <Section views={selectivevideo.views}/>
      <Section likes={selectivevideo.likes}/>
      <Section timestamp={selectivevideo.timestamp}/>
      <Section description={selectivevideo.description}/>
      
      <Comment comments={selectivevideo.comments}/>
      {/* Nextvideo */}
      <Nextvideo nextvideo={NextVideo}/>
      {/* <Nextvideo/> */}
    </div>
  );
}

export default App;
