import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Importa el archivo CSS

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top custom-navbar">
            <div className="container-fluid">
                <h5>Mi Portafolio</h5>
                <h3>Pablo Panguinao</h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
