import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';
import './styles.css';

const skills = ['React', 'JavaScript', 'HTML & CSS', 'Node.js', 'Bootstrap'];

function App() {
  return (
    <div className="App">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Navbar />
      <main id="contenido">
        <section className="hero page-width" aria-labelledby="hero-title">
          <div>
            <p className="eyebrow">PABLO PANGUINAO / PORTAFOLIO</p>
            <h1 id="hero-title">La operación, <br />conectada con <em>la tecnología.</em></h1>
            <p className="hero-description">Soy Ingeniero Civil Industrial con experiencia en logística y sistemas WMS. Hoy amplío mi camino en desarrollo web para transformar ideas en soluciones.</p>
            <div className="actions">
              <a className="button primary" href="#projects">Explorar proyectos <span aria-hidden="true">↗</span></a>
              <a className="button secondary" href={`${process.env.PUBLIC_URL}/CVPAPP.pdf`} download>Descargar CV <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="portrait-card">
            <img src={`${process.env.PUBLIC_URL}/ppanguinao.jpg`} alt="Pablo Panguinao" width="420" height="480" />
            <div className="portrait-caption"><span>Ingeniería + desarrollo</span><span aria-hidden="true">↗</span></div>
          </div>
        </section>
        <div className="expertise-strip"><div className="page-width"><span>Logística y distribución</span><span>Sistemas WMS</span><span>Desarrollo web</span><span>Mejora de procesos</span></div></div>
        <section id="sobre" className="section page-width about" aria-labelledby="about-title">
          <div><p className="eyebrow">01 / SOBRE MÍ</p><h2 id="about-title">Entender los procesos.<br />Construir soluciones.</h2></div>
          <div><p>Mi trayectoria reúne más de 7 años de experiencia en logística y distribución, con foco en la administración de sistemas WMS como Expert Storage, Infor, Blue Yonder y eWMS de Zara.</p><p>Estoy ampliando mis conocimientos en desarrollo web con HTML, CSS, JavaScript, React y Node.js. Me interesa conectar ese aprendizaje con mi experiencia identificando, analizando e implementando mejoras en la operación.</p><div className="tags" aria-label="Tecnologías en mi aprendizaje">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>
        </section>
        <section id="projects" className="section projects-section" aria-labelledby="projects-title"><div className="page-width"><p className="eyebrow">02 / PROYECTOS</p><div className="section-heading"><h2 id="projects-title">Ideas que toman forma.</h2><p>Una selección de mi trabajo y aprendizaje en desarrollo web.</p></div><ProjectList /></div></section>
        <section id="contacto" className="section page-width contact" aria-labelledby="contact-title"><p className="eyebrow">03 / CONTACTO</p><h2 id="contact-title">Conversemos sobre<br />lo que viene.</h2><p>Para conectar profesionalmente o conversar sobre proyectos, puedes encontrarme en LinkedIn.</p><a className="button primary" href="https://www.linkedin.com/in/ppanguinao" target="_blank" rel="noopener noreferrer">Conectar en LinkedIn <span aria-hidden="true">↗</span></a></section>
      </main>
      <Footer />
    </div>
  );
}
export default App;
