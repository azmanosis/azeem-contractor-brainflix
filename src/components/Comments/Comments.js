import './Comments.scss';

const Comments = (props) => {
    return props.comments.map((comment) => {
        function date(timestamp) {
            const d = new Date(timestamp);
            return d.toLocaleDateString('en-US', {day:"2-digit", month:"2-digit", year:"numeric"});
        }

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
                    {date(comment.timestamp)}
                </p>
            </>
        );
    })
}

export default Comments