import React, { useEffect, useState } from "react";
import { fetchProjects } from "../apiCalls";
import "./ProyectosComponent.css";
import { Link } from "react-router-dom";
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
    <div className="proyectos-container">
      {" "}
      {/* Nuevo contenedor añadido */}
      <div className="row justify-content-center">
        <div className="cards">
          {proyectos.map((proyecto) => (
            <Link
              to={`/proyectos/${proyecto.id}`}
              key={proyecto.id}
              style={{ textDecoration: "none" }}
            >
              <div className="card transparent">
                <p className="tip">{proyecto.nombre}</p>
                <p className="second-text">
                  {proyecto.descripcion}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProyectosComponent;
