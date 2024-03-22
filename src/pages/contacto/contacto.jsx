// ContactForm.js

import React, { useState } from 'react';
import './contacto.css'; // Asumiendo que tienes estilos específicos para este formulario
import { fetchContact } from '../../apiCalls';

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false); // Nuevo estado para manejar si el formulario ha sido enviado
    const [errorMessage, setErrorMessage] = useState(''); // Nuevo estado para manejar mensajes de error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Limpiar mensajes de error anteriores
        try {
            const response = await fetchContact(email, message);
            console.log(response);
            setFormSubmitted(true); // Ocultar el formulario y mostrar el mensaje de éxito
        } catch (error) {
            console.error('Error enviando mensaje:', error.response);
            setErrorMessage('Error enviando mensaje, inténtelo más tarde'); // Establece tu mensaje de error
        }
    };

    return (
        <>
            {!formSubmitted ? (
                 <form onSubmit={handleSubmit} className="contact-form">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Mensaje</label>
                        <textarea className="form-control" id="message" rows="3" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                    </div>
                    <button type="submit" className="btn btn-secondary">Enviar</button>
                </form>
            ) : (
                <div className="success-message text-info">
                    <span className="success-message-text">
                        ¡Mensaje enviado con éxito!
                    </span>
                </div>
            )}

            {errorMessage && (
                <div className="error-message">
                    {errorMessage}
                </div>
            )}
       
        </>
    );
};

export default ContactForm;