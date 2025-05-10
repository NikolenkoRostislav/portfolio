export default function Project({project}) {
    return (
        <div className="project">
            <h2>{project.title}</h2>
            <div>    
                <h3>Description</h3>
                <p>{project.description}</p>
                <h3>Tech Stack</h3>
                <p>{project.stackDescription}</p>
            </div>
        </div>
    )
}