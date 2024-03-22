import React, { useEffect, useState } from 'react';
import { fetchExperiencias } from '../apiCalls';
import './ExperienciasComponent.css';

const ExperienciasComponent = () => {
    const [experiencias, setExperiencias] = useState([]);

    useEffect(() => {
        const obtenerExperiencias = async () => {
            try {
                const response = await fetchExperiencias();
                setExperiencias(response.data);
            } catch (error) {
                console.error("Error al obtener experiencias:", error);
            }
        };
        obtenerExperiencias();
    }, []);

    return (
        <div className="experiencias-container">
            {experiencias.map((exp) => (
                <div key={exp.id} className="experiencia">
                    <h3>{exp.titulo} en {exp.empresa}</h3>
                    <p>{exp.ubicacion}</p>
                    <p>{exp.descripcion}</p>
                    <p>Desde {exp.fecha_inicio} hasta {exp.fecha_fin}</p>
                </div>
            ))}
        </div>
    );
};

export default ExperienciasComponent;
