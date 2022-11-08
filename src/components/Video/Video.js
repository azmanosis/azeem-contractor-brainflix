import './Video.scss';

function Video (props) {
    return (
        <div>
            <video poster={props.poster} className="poster">
            </video>
        </div>
    )
}

export default Video