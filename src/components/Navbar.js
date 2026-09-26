import React, { useState } from 'react';
function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><nav className="page-width navigation" aria-label="Navegación principal"><a className="brand" href="#hero-title" onClick={() => setOpen(false)}>pablo<span>.</span></a><button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-menu" onClick={() => setOpen(!open)}>{open ? 'Cerrar' : 'Menú'}</button><div id="main-menu" className={`nav-links${open ? ' is-open' : ''}`}><a href="#sobre" onClick={() => setOpen(false)}>Sobre mí</a><a href="#projects" onClick={() => setOpen(false)}>Proyectos</a><a href="#contacto" onClick={() => setOpen(false)}>Contacto <span aria-hidden="true">↗</span></a></div></nav></header>;
}
export default Navbar;
