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

export default Nextvideo