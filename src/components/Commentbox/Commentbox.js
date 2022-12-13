import './Commentbox.scss';

function Commentbox(props) {
    return (
        <>
            <div className="commentbox">
                <div className="commentbox__text">
                    <h1>{props.commentlength} {props.commentword}</h1>
                </div>
                <div className="commentbox__container">
                    <div className="commentbox__container--a">
                        <div className="commentbox__container--a--image"></div>
                    </div>
                    <form id="submit-comment" className="commentbox__container--b">
                        <label className="commentbox__container--b--words" for="conversation">join the conversation</label>
                        <div className="commentbox__container--b--inbut">
                            <textarea id="enter__comment" className="commentbox__container--b--inbut--input" type="text" placeholder="add a new comment" name="conversation"></textarea>
                            <button className="commentbox__container--b--inbut--button" onClick={event => event.preventDefault()}>comment</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Commentbox