import './Comments.scss';

const Comments = (props) => {
    return (
        <div>
            <p>
                {props.name}
            </p>
            <p>
                {props.comment}
            </p>
            <p>
                {props.likes}
            </p>
            <p>
                {props.timestamp}
            </p>
        </div>
    )
}

export default Comments