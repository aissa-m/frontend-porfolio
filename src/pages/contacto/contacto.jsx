import React, { useState } from 'react';
import './contacto.css';
import { fetchContact } from '../../apiCalls';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        try {
            const response = await fetchContact({ name, email, message });
            console.log(response);
            setFormSubmitted(true);
        } catch (error) {
            console.error('Error enviando mensaje:', error.response);
            setErrorMessage('Error enviando mensaje, inténtelo más tarde');
        }
    };

    return (
        <>
            
            {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="services-section">
                        <h2>Mis Servicios</h2>
                        <p>Desarrollo de sitios web personalizados, mantenimiento web, clases particulares de programación.</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
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
                        ¡Gracias por contactar, me pondré en contacto con usted en la mayor brevedad posible!
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
