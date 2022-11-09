import './Nextvideo.scss';

// function Nextvideo(props) {
//     return(
//         <video poster={props.poster}>
//         </video>
//     )
// }

const Nextvideo = (props) => {
    return props.poster.map((video) => {
        return (
            <>
                <img src={video.image} alt=""></img>
            </>
        )
    })
}

export default Nextvideo