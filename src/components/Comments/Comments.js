import './Comments.scss';

const Comments = (props) => {
    return props.comments.map((comment) => {
        return (
            <>
            <p>
                {comment.name}
            </p>
            <p>
                {comment.comment}
            </p>
            <p>
                {comment.likes}
                </p>
                <p>
                    {comment.timestamp}
                </p>
            </>
        );
    })
}

export default Comments