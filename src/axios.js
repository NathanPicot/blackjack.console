// src/axios.js
import axios from 'axios';

// Configurations globales d'Axios
axios.defaults.baseURL = 'http://localhost:5039/api';
let token = localStorage.getItem('authToken');
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default axios;
