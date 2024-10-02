import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css'; // Importa el archivo CSS

function Footer() {
    return (
        <footer className="footer fixed-bottom custom-footer">
            <div className="container text-center py-3">                
                <a href="https://www.linkedin.com/in/ppanguinao" target="_blank" rel="noopener noreferrer">Linkedin 
                <i class="fa-brands fa-linkedin"></i>
                </a>                
            </div>
        </footer>
    );
}

export default Footer;
