import './Nextvideo.scss';
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

const Nextvideo = (props) => {
    return props.nextvideo.map((video) => {
        return (
            <>
                <img className="width" src={video.image} alt=""></img>
                <h1>{video.title}</h1>
                <p>{video.channel}</p>
            </>
        )
    })
}

export default Nextvideo