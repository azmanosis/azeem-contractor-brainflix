import './Section.scss';
import Sections from '../../data/video-details.json';

function Section() {
    return (
        <div className = "section">
            {
                Sections.map(section => {
                    return (
                        <div className = "section__title" key={section.id}>
                            {section.title}
                            {section.channel}
                        </div>

                            // {video.comments.map(comment => {
                            //     return (
                            //         <div className="comment" key= {comment.id}>
                            //             {comment.name}
                            //         </div>
                            //     )
                            // })}
                    )
                })
            }
        </div>
    )
}

export default Section