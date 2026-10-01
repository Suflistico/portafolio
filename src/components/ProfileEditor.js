import React from 'react';

function ProfileEditor() {
  return (
    <aside className="profile-editor" aria-label="Perfil profesional">
      <div className="editor-toolbar">
        <span className="window-dots" aria-hidden="true"><i /><i /><i /></span>
        <span>perfil.js</span>
        <span className="editor-language">JS</span>
      </div>
      <div className="editor-tabs" aria-hidden="true"><span>perfil.js</span><span>README.md</span></div>
      <div className="editor-code" aria-hidden="true">
        <div><span className="code-purple">const</span> <span className="code-blue">pablo</span> = {'{'}</div>
        <div>  nombre: <span className="code-green">'Pablo Panguinao'</span>,</div>
        <div>  formación: <span className="code-green">'Ingeniería Civil Industrial'</span>,</div>
        <div>  experiencia: [</div>
        <div>    <span className="code-green">'Logística'</span>, <span className="code-green">'Sistemas WMS'</span></div>
        <div>  ],</div>
        <div>  aprendiendo: [</div>
        <div>    <span className="code-green">'React'</span>, <span className="code-green">'Node.js'</span></div>
        <div>  ],</div>
        <div>  enfoque: <span className="code-green">'Crear soluciones'</span></div>
        <div>{'}'};</div>
      </div>
      <div className="editor-profile">
        <img src={`${process.env.PUBLIC_URL}/ppanguinao.jpg`} alt="Pablo Panguinao" width="48" height="48" />
        <div><strong>Pablo Panguinao</strong><p>Ingeniería · Logística · Desarrollo web</p></div>
      </div>
      <div className="editor-status" aria-hidden="true"><span>⌘ portafolio</span><span>JavaScript · UTF-8</span></div>
    </aside>
  );
}

export default ProfileEditor;
