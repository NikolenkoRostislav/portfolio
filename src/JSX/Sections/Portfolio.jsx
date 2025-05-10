import Project from '../Blocks/Project.jsx'

const projects = [
    { title: 'Snake Game', 
      description: 'A simple snake game with a score system, difficulty scaling and a random face for the snake.', 
      stackDescription: 'I used html, css and js to create this game, I didnt use any libraries or frameworks to showcase that I understand the basics of web development',
      stack: ['HTML', 'CSS', 'JavaScript'] 
    },
    { title: 'Portfolio Website', 
      description: 'A website that I can use to showcase my projects and skills.', 
      stackDescription: 'I used React and CSS to create this website, I used react-router for the routing.', 
      stack: ['React', 'CSS'] 
    },
];

export default function Portfolio(){
    return(
        <div className='portfolio'>
            <h1>Portfolio</h1>
            {projects.map((project, index) => (               
                <Project key={index} project={project}/>
            ))}
        </div>
    )
}