import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProjectById } from '../../apiCalls';
import './detallesProyecto.css';

const DetallesProyecto = () => {
    const { id } = useParams();
    const [proyecto, setProyecto] = useState(null);

    useEffect(() => {
        const getProyecto = async () => {
            const response = await fetchProjectById(id);
            console.log(response)
            setProyecto(response.data);
        };
        getProyecto();
    }, [id]);

    if (!proyecto) return <p>Cargando...</p>;

    return (
        <div className="caja d-flex justify-content-center align-items-center vh-100">
            <div className="card" style={{width: '28rem'}}>
                {proyecto.imagen && <img src={proyecto.imagen} className="card-img-top" alt={proyecto.nombre} />}
                <div className="card-body">
                    <h5 className="card-title">{proyecto.nombre}</h5>
                    <p className="card-text">{proyecto.descripcion}</p>
                    <p className="card-text">Tecnologías: {proyecto.tecnologias}</p>
                    <p className="card-text">Fecha de inicio: {proyecto.fecha_inicio}</p>
                    <p className="card-text">Fecha de fin: {proyecto.fecha_fin}</p>
                    {proyecto.enlace && <a href={proyecto.enlace} className="btn btn-secondary" target='_blank'>Ver En GitHub</a>}
                </div>
            </div>
        </div>
    );
    
};

export default DetallesProyecto;
