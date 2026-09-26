import React from 'react';

function ProjectCard({ title, description, link, status, cover, technologies = [] }) {
  const available = Boolean(link && /^https?:\/\//.test(link));
  const artwork = cover || {
    label: 'PROYECTO WEB',
    title,
    caption: technologies.join(' · '),
    theme: 'default',
  };

  return (
    <article className={`project-card project-card--${artwork.theme || 'default'}`}>
      <div className="project-art" aria-hidden="true">
        <span className="art-label">{artwork.label}</span>
        <strong>{artwork.title}{artwork.accent && <><br /><i>{artwork.accent}</i></>}</strong>
        <span className="art-caption">{artwork.caption}</span>
        {artwork.theme === 'pizza' && <span className="pizza-disc">✳</span>}
        {artwork.theme === 'finance' && (
          <span className="finance-bars"><span /><span /><span /><span /></span>
        )}
      </div>
      <div className="project-body">
        <span className="project-status">{status || (available ? 'Proyecto publicado' : 'Proyecto web')}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tags">
          {technologies.map(technology => <span key={technology}>{technology}</span>)}
        </div>
        {available && (
          <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
            Ver proyecto <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
