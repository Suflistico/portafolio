import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../projects.json';
function ProjectList() {
  return <div className="project-grid">{projects.map(project => <ProjectCard key={project.id || project.title} {...project} />)}</div>;
}
export default ProjectList;
