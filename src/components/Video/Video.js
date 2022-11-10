import './Video.scss';

function Video (props) {
    return (
        <div>
            <video poster={props.poster} className="poster" controls>
            </video>
        </div>
    )
}

export default Video