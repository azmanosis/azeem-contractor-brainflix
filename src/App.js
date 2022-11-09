import './App.scss';
import Header from './components/Header/Header';
import Data from '../src/data/video-details.json';
import VideoList from '../src/data/videos.json';
import Video from './components/Video/Video';
import Section from './components/Section/Section';
import Comment from './components/Comments/Comments';
import Nextvideo from './components/Nextvideo/Nextvideo';


function App() {

  const details = Data[0]
  // change name from details to selective video
  // Initial state to Data [0]
  // Initializing state for Video list
  // const VidList = VideoList.filter((video) => {
  //   return video.id != details.id
  // })
  const VidList = VideoList

  return (
    <div>
      {/* Header */}
      <Header />
      {/* Video */}
      <Video poster={details.image}/>
      {/* Section */}
      <Section title={details.title}/>
      <Section channel={details.channel}/>
      <Section views={details.views}/>
      <Section likes={details.likes}/>
      <Section timestamp={details.timestamp}/>
      <Section description={details.description}/>
      {/* Comment 1 */}
      {/* <Comment name={details.comments[0].name}/> */}
      {/* <Comment comment={details.comments[0].comment}/> */}
      {/* <Comment likes={details.comments[0].likes}/> */}
      {/* <Comment timestamp={details.comments[0].timestamp}/> */}
      {/* Comment 2 */}
      {/* <Comment name={details.comments[1].name}/> */}
      {/* <Comment comment={details.comments[1].comment}/> */}
      {/* <Comment likes={details.comments[1].likes}/> */}
      {/* <Comment timestamp={details.comments[1].timestamp}/> */}
      {/* Comment 3 */}
      {/* <Comment name={details.comments[2].name}/> */}
      {/* <Comment comment={details.comments[2].comment}/> */}
      {/* <Comment likes={details.comments[2].likes}/> */}
      {/* <Comment timestamp={details.comments[2].timestamp}/> */}

      <Comment names={details.comments}/>
      {/* Nextvideo */}
      <Nextvideo poster={VidList}/>
    </div>
  );
}

export default App;
