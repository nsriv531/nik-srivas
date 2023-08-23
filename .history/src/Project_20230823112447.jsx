import "./App.css";

function Project({ title, description, tags, link, projectimage }) {
    return (
        <div className="Project">
            <div>
                <h2>{title}</h2>
                <p>
                    {description}
                </p>
                <div className="ProjectTags">
                    {tags.map((tag, index) => (
                        <div key={index}>{tag}</div>
                    ))
                    }
                </div>
                <a className="ProjectLink" href={link} target="_blank">
                    View Project
                </a>
            </div>
            <img src={projectimage} alt="Project 1" />
        </div>
    );
}

export default Project;
