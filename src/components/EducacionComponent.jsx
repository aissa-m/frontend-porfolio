import React, { useEffect, useState } from 'react';
import { fetchEducaciones } from '../apiCalls';
import './EducacionComponent.css';

const EducacionComponent = () => {
    const [educaciones, setEducaciones] = useState([]);

    useEffect(() => {
        const getEducaciones = async () => {
            const response = await fetchEducaciones();
            console.log(response);
            setEducaciones(response.data);
        };
        getEducaciones();
    }, []);

    return (
        <div className="container">
            {educaciones.map(educacion => (
                <div key={educacion.id} className="book">
                    <h4>{educacion.grado}</h4>
                    <div className="cover">
                        <div className="details">
                            <p>Institución: {educacion.institucion}</p>
                            <p>Campo de estudio: {educacion.campo_de_estudio}</p>
                            <p>{educacion.fecha_inicio}    {educacion.fecha_fin}</p>
                            <br />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default EducacionComponent;
