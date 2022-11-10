import './Nextvideo.scss';
import React from 'react';
import VideoList from '../../data/videos.json';

// const nextvideos = VideoList;

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

const Nextvideo = (props) => {
    return props.nextvideo.map((video) => {
        return (
            <>
                <img src={video.image} alt=""></img>
                <h1>{video.title}</h1>
                <p>{video.channel}</p>
            </>
        )
    })
}

export default Nextvideo