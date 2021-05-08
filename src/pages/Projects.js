import {useState, useEffect} from 'react'

function Projects(props) {
    // create state to hold projects
    const [projects, setProjects] = useState(null)

    // creat function to make api call
    const getProjectData = async () => {
        //make api call get response
        const response = await fetch(props.URL + "projects")
        //turn response into javascript object
        const data = await response.json()
        //set the projects state to the data
        setProjects(data)
    }

    //make an initial call for data inside of useEffect so it only happens once on componenet load
    useEffect(() => {
        getProjectData()
    }, [])

    //define a function taht will return the JSX needed once we get the data
    const loaded = () => {
        return projects.map((project) => (
            <div className="project">
                <h1>{project.name}</h1>
                <img className="projimg" src={project.image} alt="" />
                <br />
                <a href={project.git}>
                    <button>Github</button>
                </a>
                <a href={project.live}>
                    <button>Live Site</button>
                </a>
            </div>
        ))
        }

        return projects ? loaded() : <h1>Loading...</h1>

}

export default Projects