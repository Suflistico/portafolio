import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectCard.css'; // Importa el archivo CSS

function ProjectCard({ title, description, link, preview }) {
   return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={preview} title={title}></iframe>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
