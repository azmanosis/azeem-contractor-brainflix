import './Commentbox.scss';

function Commentbox (props) {
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
                        {/* <textarea id="enter__comment" className="commentbox__container--b--input" placeholder="Add a new comment" name="conversation"></textarea> */}
                        <input id="enter__comment" className="commentbox__container--b--input" placeholder="Add a new comment" name="conversation"></input>
                        <button className="commentbox__container--b--button">comment</button>
                    </form>
                </div>
            </div>
            
        </>
    )
}
export default Commentbox