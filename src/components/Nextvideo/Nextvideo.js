import Card from '../Card/Card';

const Nextvideo = (props) => {
    return props.nextvideo.map((video) => {
        if (video.id !== props.activevideoid) {
            return (
                <Card id={video.id} image={video.image} channel={video.channel} title={video.title}></Card>
            )
        }
    })
}

export default Nextvideo