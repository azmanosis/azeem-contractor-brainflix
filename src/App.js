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
  // Initial state to Data [0]
  // Initializing state for Video list
  const Videos = VideoList[1];
  const NextVideo = Videos.filter((video) => {
    return video.id !== selectivevideo.id;
  })

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
      
      <Comment names={selectivevideo.comments}/>
      {/* Nextvideo */}
      <Nextvideo nextvideo={NextVideo}/>
    </div>
  );
}

export default App;
