// ProyectosComponent.js
import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../apiCalls'; // Asegúrate de que la ruta de importación sea correcta
import './ProyectosComponent.css';
const ProyectosComponent = () => {
    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        const getProyectos = async () => {
            const response = await fetchProjects();
            console.log(response);
            setProyectos(response.data);
        };
        getProyectos();
    }, []);

    return (
        <div className="proyectos-container"> {/* Nuevo contenedor añadido */}
            <div className="row justify-content-center">
            <div className="cards">
            {proyectos.map(proyecto => (
                    <div key={proyecto.id} className={`card transparent`}>
                        <p className="tip">{proyecto.nombre}</p>
                        <p className="second-text">Descripción: {proyecto.descripcion}</p>
                        {/* Agrega más información del proyecto que desees mostrar */}
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
                    
};

export default ProyectosComponent;
