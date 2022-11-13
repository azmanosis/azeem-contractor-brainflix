import Card from '../Card/Card';

const Nextvideo = (props) => {
    return props.nextvideo.map((video) => {
        if(video.id !== props.activevideoid) {
            return (
                <Card id={video.id} image={video.image} channel={video.channel} title={video.title} handleClickVideo={props.handleClickVideo}></Card>
                )
        }
    })
}

// import videosdetails from '../../data/video-details.json';
// import {useState} from 'react';
// import VideoList from '../../data/videos.json';

// const Nextvideo = () => {
//     // let name = 'mario';
//     const [name, setName] = useState('mario');

//     const handleClick = () => {
//         setName('luigi');
//     }

//     return (
//         <div>
//             <p>{name}</p>
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     )
// }

// const videolist = VideoList

// function VideoList() {
//     const countState = useState(0);
//     console.log(countState);

//     return (
//         <button>{count}</button>
//     );
// }

// const nextvideos = [VideoList.id];

// function Nextvideo() {
//     return (
//         <div>
//             {nextvideos.filter(nextvideo => nextvideo.includes(id)).map(filteredName => (
//                 <li>
//                     {filteredName}
//                 </li>
//             ))}
//         </div>
//     )
// }

// const Nextvideo = (props) => {
    // console.log(props);
    // return (
        // {props.map((video) =>
        // {
            // <div className="videos__container" onClick={() => props.handleClickVideo(videos)}>
            //     <div className="videos__container--image">
            //         <img className="videos__container--image--width" src={video.image} alt=""></img>
            //     </div>
            //     <div className="videos__container--2">
            //         <p className="videos__title">{video.title}</p>
            //         <p className="videos__channel">{video.channel}</p>
            //     </div>
            // </div>
        // }
        // )
        // <div className="videos">
        //     <p className="videos__title">next videos</p>
        //     {
        //         videosdetails.map(video => {
        //             return(
                        
        //             )
        //         })
        //     }
        // </div>
// })




export default Nextvideo