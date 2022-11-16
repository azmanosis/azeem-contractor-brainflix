import './Section.scss';

function Section(props) {
    
    function date(timestamp) {
        const d = new Date(timestamp);
        return d.toLocaleDateString('en-US', {day:"2-digit", month:"2-digit", year:"numeric"});
    }

    return (
        <div className = "section">
            <div className="section__title">
                <h1 className="section__title--text">{props.sections.title}</h1>
            </div>
            <div className="section__container">
                <div className="section__container--a">
                    <p className="section__container--a--bold">
                        {props.sections.channel}
                    </p>  
                    <p className="section__container--a--color">
                        {date(props.sections.timestamp)}
                    </p>
                </div>
                <div className="section__container--b">
                    <p className="section__container--b--eyecolor">
                        {props.sections.views}
                    </p>
                    <p className="section__container--b--likes">
                        {props.sections.likes}
                    </p>
                </div>
            </div>
            <div className="section__comment">
                {props.sections.description}
            </div>
        </div>
    )
}

export default Section