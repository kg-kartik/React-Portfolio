import React, {useState,useEffect} from "react"
import Repositories from "./Repositories.js"


const Projects = () => {
    const [repo,setRepo] = useState([])
    useEffect(() => {
        getRepositories();
    });
    const getRepositories= async() => {
        const response = await fetch('https://api.github.com/users/kg-kartik/repos');
        const data = await response.json();
        setRepo(data)
    }
    return (
        <div>
            <h1 className="projects"> My Projects</h1>
            <div className="repositories">
            {repo.map(repositories => (
                <Repositories
                key = {repositories.id}
                title = {repositories.name} 
                description = {repositories.description}
                url = {repositories.html_url}
                />
            ))}
            </div>
        </div>
    )
}

export default Projects