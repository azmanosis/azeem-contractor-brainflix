import './Section.scss';

function Section(props) {
    function date(timestamp) {
        const d = new Date(timestamp);
        return d.toLocaleDateString('en-US', {day:"2-digit", month:"2-digit", year:"numeric"});
    }

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
                    {date(props.timestamp)}
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