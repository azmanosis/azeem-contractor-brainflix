import './Section.scss';

function Section(props) {
    return (
        <div className = "section">
            <div>
                <h1>{props.title}</h1>
            </div>
            <div>
                <p>
                    {props.channel}
                </p>
                <p>
                    {props.timestamp}
                </p>
                <p>
                    {props.views}
                </p>
                <p>
                    {props.likes}
                </p>
            </div>
            <div>
                {props.description}
            </div>
        </div>
    )
}

export default Section