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
                <a href="/experiencia">Experiencia</a>
                <a href="/contacto">Contacto</a>
            </nav>
            <div className="social-links">
                {/* <a href="https://facebook.com"><img src={logoFacebook} alt="Facebook" width={ancho} height={alto}/></a> */}
                <a href="https://twitter.com/aissa_113"><img src={logoTwitter} alt="Twitter" width={ancho} height={alto}/></a>
                <a href="https://www.linkedin.com/in/issa-maymoutt/"><img src={logoLink} alt="LinkedIn" width={ancho} height={alto}/></a>
                <a href="https://github.com/aissa-m"><img src={logoGit} alt="GitHub" width={ancho} height={alto}/></a>
                <a href="https://www.instagram.com/aissa__1313/"><img src={logoInsta} alt="Instagram" width={ancho} height={alto}/></a>
            </div>
            <div className="mode-toggle">
                <img
                    src={darkMode ? sunIcon : moonIcon}
                    alt="Toggle Dark Mode"
                    onClick={toggleDarkMode}
                />
            </div>
            {children}
        </div>
    );
};

export default Layout;
