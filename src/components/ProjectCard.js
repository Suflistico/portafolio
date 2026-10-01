import React from 'react';

function ProjectCard({ id, title, description, link, status, cover, technologies = [] }) {
  const available = Boolean(link && /^https?:\/\//.test(link));
  const finance = cover?.theme === 'finance';
  const filename = `${id || 'proyecto'}.app`;

  return (
    <article className={`project-card${finance ? ' project-card--finance' : ''}`}>
      <div className="project-art" aria-hidden="true">
        <div className="project-tab"><span className="code-blue">{'</>'}</span> {filename}<span>↗</span></div>
        <div className="project-cover-content">
          <span className="art-label">{finance ? '02 / FULL STACK' : '01 / FRONTEND'}</span>
          <strong>{finance ? <>Control<br /><em>Financiero.</em></> : <>Pizzería<br /><em>Paolo.</em></>}</strong>
          <span className="art-caption">{cover?.caption || technologies.join(' · ')}</span>
          <span className="cover-symbol">{finance ? '{ }' : '</>'}</span>
        </div>
      </div>
      <div className="project-body">
        <span className="project-status"><span aria-hidden="true">●</span> {status || (available ? 'Proyecto publicado' : 'Proyecto web')}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tags">{technologies.map(technology => <span key={technology}>{technology}</span>)}</div>
        {available && <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">Ver proyecto <span aria-hidden="true">↗</span></a>}
      </div>
    </article>
  );
}

export default ProjectCard;
