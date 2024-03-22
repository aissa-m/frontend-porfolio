// App.js o el archivo principal de tu aplicación
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layouts/layouts';
import Inicio from './pages/inicio/inicio';
import Educaciones from './pages/educaciones/educaciones'
import DetallesProyecto from './pages/detallesProyecto/detallesProyecto';
import ContactForm from './pages/contacto/contacto';
import ExperienciaPage from './pages/experiencia/experiencia';
import Homepage from './pages/home/homePage';
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/proyectos" element={<Inicio />} exact />
          <Route path="/educacion" element={<Educaciones />} />
          <Route path="/proyectos/:id" element={<DetallesProyecto/>} />
          <Route path="/contacto" element={<ContactForm/>} />
          <Route path="/experiencia" element={<ExperienciaPage/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
