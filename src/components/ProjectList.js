import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../projects.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Cargar datos desde el archivo JSON
        setProjects(projectsData);
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        title={project.title} 
                        description={project.description} 
                        link={project.link} 
                        preview={project.preview}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectList;
