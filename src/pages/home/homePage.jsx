import React from 'react';
import './homePage.css';
import profile from '../../img/tutor-tools.png'; // Asegúrate de usar tu imagen actualizada

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="content-section">
                <h1>Full-Stack <span>Developer</span> & Online Tutor</h1>
                <p className="subtitle">Soluciones Web a la Medida & Clases de Programación Online</p>
                <p>Como Full-Stack Developer con experiencia en Laravel, React, Typeorm y Node.js, ofrezco soluciones web que impulsan tu negocio. Paralelamente, como tutor online, te guío en el aprendizaje de la programación, desde lo básico hasta niveles avanzados. Explora cómo puedo llevarte al éxito en tu proyecto web o en tu carrera como desarrollador. </p>
                <p>¿Listo para empezar? <a href="/contacto">Hablemos</a>. O si prefieres, <a href="https://www.tusclasesparticulares.com/online/programacion/clases-javascript-basico-avanzado-online-3255748" target="_blank" rel="noopener noreferrer">conoce más sobre mis clases aquí.</a></p>
                <a href={`${process.env.PUBLIC_URL}/cv/CV AISSA MAYMOUTT - DEV.pdf`} download="Aissa_M_CV" className="btn-download">Descarga Mi CV</a>
            </div>
            <div className="profile-section">
                <img src={profile} alt="Perfil de Aissa M" className="profile-image"/>
            </div>
        </div>
    );
};

export default Homepage;
