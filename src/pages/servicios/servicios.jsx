import React from 'react';
import './servicios.css'; 


const ServicesPage = () => {
  return (
    <div className="container">
      <h1 className="text-center" style={{ color: '#f5f5f5' }}>Nuestros Servicios</h1>
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title" style={{ color: '#ff85a2' }}>Desarrollo Web Personalizado</h5>
              <p className="card-text">Creamos soluciones web a medida, utilizando tecnologías modernas como React, Angular, y Next.js para proyectos personales y empresariales.</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title" style={{ color: '#ff85a2' }}>E-commerce</h5>
              <p className="card-text">Desarrollamos plataformas de e-commerce robustas y escalables con WordPress y PrestaShop, asegurando una experiencia de compra óptima.</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title" style={{ color: '#ff85a2' }}>Full Stack Development</h5>
              <p className="card-text">Ofrecemos desarrollo completo, desde el back-end con Node.js y TypeORM, hasta el front-end, garantizando soluciones integrales y eficientes.</p>
            </div>
          </div>
        </div>

        <div className="col-12 mt-4">
          <div className="text-center">
            <a href="/contacto" className="btn btn-contacto" style={{ backgroundColor: '#add8e6', color: 'white' }}>Contáctanos</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
