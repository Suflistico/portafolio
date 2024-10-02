// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="container">
                <section id="sobre" className="mt-5">
                    <h2>Sobre Mí</h2>
                    <div className="row align-items-center mt-4">
                        {/* Columna para la imagen */}
                        <div className="col-md-4 text-center">
                            <img src="/ppanguinao.jpg" alt="Mi Foto" className="img-fluid rounded-circle mb-3" style={{ maxWidth: '290px' }}/>
                        </div>
                        {/* Columna para el texto */}
                        <div className="col-md-8">
                            <p>
                                Ingeniero Civil Industrial con más de 7 años de experiencia en empresas del rubro logístico
                                y distribución. Desempeñándome principalmente en la administración de sistemas WMS con
                                conocimientos en Expert Storage, Infor, Blue yonder, ewms Zara. Actualmente me encuentro
                                ampliando mis conocimientos en ámbito de desarrollo web con aplicaciones HTML,
                                JavaScript, CSS, React, Node.jS. Profesional con alta motivación hacia el cumplimiento de
                                los objetivos de la compañía, con capacidad de identificar, analizar, planificar e implementar
                                mejoras.
                            </p>
                            <a href="/CVPAPP.pdf" download className="btn btn-primary mt-3">
                                Descargar CV
                            </a>
                        </div>
                    </div>
                </section>
                <section id="projects" className="mt-5">
                    <h2>Proyectos</h2>
                    <ProjectList />
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default App;
