import axios from 'axios';

// Define la base URL de tu API
// const BASE_URL = 'http://localhost:8000/api';
const BASE_URL_DO = 'https://my-portfolio-mirnv.ondigitalocean.app/api';

// Autenticación
export const register = async (userData) => {
    return await axios.post(`${BASE_URL_DO}/register`, userData);
};

export const login = async (credentials) => {
    return await axios.post(`${BASE_URL_DO}/login`, credentials);
};

export const logout = async (token) => {
    return await axios.post(`${BASE_URL_DO}/logout`, {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

// Proyectos
export const fetchProjects = async () => {
    return await axios.get(`${BASE_URL_DO}/proyectos`);
};

export const fetchProjectById = async (id) => {
    return await axios.get(`${BASE_URL_DO}/proyectos/${id}`);
};

export const createProject = async (projectData, token) => {
    return await axios.post(`${BASE_URL_DO}/proyectos`, projectData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

// Experiencias
export const fetchExperiences = async () => {
    return await axios.get(`${BASE_URL_DO}/experiencias`);
};

export const fetchEducaciones = async () => {
    return await axios.get(`${BASE_URL_DO}/educaciones`);
};

export const fetchContact = async (email, message) => {
    return await axios.post(`${BASE_URL_DO}/contact`, {
        email,
        message
    }, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
};

export const fetchExperiencias = async () => {
    return await axios.get(`${BASE_URL_DO}/experiencias`);
};



