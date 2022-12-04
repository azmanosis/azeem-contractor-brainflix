import './Comments.scss';

const Comments = (props) => {
    return props.comments.map((comment) => {

        function date(timestamp) {
            const d = new Date(timestamp);
            return d.toLocaleDateString('en-US', { day: "2-digit", month: "2-digit", year: "numeric" });
        }

        return (
            <>
                <div className="comment">
                    <div className="comment__a">
                        <div className="comment__a--image"></div>
                    </div>
                    <div className="comment__b">
                        <div className="comment__b--container">
                            <h1 className="comment__b--container--name">{comment.name}</h1>
                            <p className="comment__b--container--timestamp">{date(comment.timestamp)}</p>
                        </div>
                        <p className="comment__b--comments">
                            {comment.comment}
                        </p>
                        <button className="comment__b--likes">
                            {comment.likes}
                        </button>
                    </div>
                </div>
            </>
        );
    })
}

export default Comments