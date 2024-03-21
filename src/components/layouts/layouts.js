// Layout.js
import React, { useState } from 'react';
import './layouts.css'; // Crear este archivo CSS para estilizar el layout
import logoFacebook from '../../img/logo-facebook.svg';
import logoTwitter from '../../img/logo-twitter.svg';
import logoInsta from '../../img/logo-instagram.svg';
import logoGit from '../../img/logo-github.svg';
import logoLink from '../../img/logo-linkedin.svg';
import miLogo from '../../img/milogo.png';

import sunIcon from '../../img/sol.png';
import moonIcon from '../../img/luna.png';

const Layout = ({ children }) => {
    const ancho = '20px';
    const alto = '20px';
    const anchoLogo = '100px';
    const altoLogo = '100px';

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <div className={`layout-container ${darkMode ? 'dark-mode' : ''}`}>
            <div className="brand-logo">
                <a href="/"><img src={miLogo} alt="Mi Logo" width={anchoLogo} height={altoLogo}/></a>
            </div>
            <nav className="top-menu">
                <a href="/">Inicio</a>
                <a href="/educaciones">Estudios</a>
                <a href="/contacto">Contacto</a>
                {/* Agrega más enlaces según necesites */}
            </nav>
            <div className="social-links">
                <a href="https://facebook.com"><img src={logoFacebook} alt="Facebook" width={ancho} height={alto}/></a>
                <a href="https://twitter.com"><img src={logoTwitter} alt="Twitter" /></a>
                <a href="https://linkedin.com"><img src={logoLink} alt="LinkedIn" /></a>
                <a href="https://github.com"><img src={logoGit} alt="GitHub" /></a>
                <a href="https://instagram.com"><img src={logoInsta} alt="Instagram" /></a>
            </div>
            <div className="mode-toggle">
                <img
                    src={darkMode ? sunIcon : moonIcon}
                    alt="Toggle Dark Mode"
                    onClick={toggleDarkMode}
                />
            </div>
            {children} {/* Este es el contenido específico de cada página */}
        </div>
    );
};

export default Layout;
