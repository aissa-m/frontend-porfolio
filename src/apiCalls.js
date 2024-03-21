import axios from 'axios';

// Define la base URL de tu API
const BASE_URL = 'http://localhost:8000/api'; // Cambia esto por la URL real de tu API

// Autenticación
export const register = async (userData) => {
    return await axios.post(`${BASE_URL}/register`, userData);
};

export const login = async (credentials) => {
    return await axios.post(`${BASE_URL}/login`, credentials);
};

export const logout = async (token) => {
    return await axios.post(`${BASE_URL}/logout`, {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

// Proyectos
export const fetchProjects = async () => {
    return await axios.get(`${BASE_URL}/proyectos`);
};

export const fetchProjectById = async (id) => {
    return await axios.get(`${BASE_URL}/proyectos/${id}`);
};

export const createProject = async (projectData, token) => {
    return await axios.post(`${BASE_URL}/proyectos`, projectData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

// Experiencias
export const fetchExperiences = async () => {
    return await axios.get(`${BASE_URL}/experiencias`);
};

export const fetchEducaciones = async () => {
    return await axios.get(`${BASE_URL}/educaciones`);
};

export const fetchContact = async (email, message) => {
    return await axios.post(`${BASE_URL}/contact`, {
        email,
        message
    }, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
};




// Agrega más funciones según necesites para otras rutas

// Nota: Para las funciones que necesitan autenticación, asegúrate de pasar el token de autenticación
