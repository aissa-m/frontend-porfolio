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

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        if (date > now) {
            return 'Actualidad';
        } else {
            // Formatea la fecha como prefieras
            return date.toLocaleDateString();
        }
    };

    return (
        <div className="experiencias-container">
            {experiencias.map((exp) => (
                <div key={exp.id} className="experiencia">
                    <h3>{exp.titulo} en {exp.empresa}</h3>
                    <p>{exp.ubicacion}</p>
                    <p>{exp.descripcion}</p>
                    <p>{exp.fecha_inicio} - {formatDate(exp.fecha_fin)}</p>
                </div>
            ))}
        </div>
    );
};

export default ExperienciasComponent;
