// App.js o el archivo principal de tu aplicación
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layouts/layouts';
import Inicio from './pages/inicio/inicio';
import Educaciones from './pages/educaciones/educaciones'
import DetallesProyecto from './pages/detallesProyecto/detallesProyecto';
import ContactForm from './pages/contacto/contacto';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} exact />
          <Route path="/educaciones" element={<Educaciones />} />
          <Route path="/proyectos/:id" element={<DetallesProyecto/>} />
          <Route path="/contacto" element={<ContactForm/>} />
          {/* Agrega más rutas según necesites */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
