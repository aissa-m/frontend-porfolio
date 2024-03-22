import React from 'react';
import './homePage.css';
import profile from '../../img/tutor-tools.png'; // Cambia esto por tu imagen

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="content-section">
                <h1>Hola, soy <span>Aissa M</span></h1>
                <p className="subtitle">Desarrollador Web y Tutor en Línea</p>
                <p>Desarrollo soluciones web personalizadas, contacte <a href="/contacto">aquí</a> y ofrezco clases particulares online. 
                Expertise en Laravel, React, Typeorm, Node Js y más. 
                <a href="https://www.tusclasesparticulares.com/online/programacion/clases-javascript-basico-avanzado-online-3255748" target="_blank" rel="noopener noreferrer">Consulta mi perfil aquí.</a></p>
                {/* Asegúrate de que la ruta a tu CV es correcta */}
                <a href={`${process.env.PUBLIC_URL}/cv/CV AISSA MAYMOUTT - DEV.pdf`} download="Aissa_M_CV" className="btn-download">Descargar CV</a>
            </div>
            <div className="profile-section">
                <img src={profile} alt="Aissa M" className="profile-image"/>
            </div>
        </div>
    );
};

export default Homepage;
