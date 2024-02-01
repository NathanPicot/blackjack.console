// src/axios.js
import axios from 'axios';

// Configurations globales d'Axios
axios.defaults.baseURL = 'http://localhost:5039/api';

//axios.defaults.headers.common['Authorization'] = 'Bearer your-access-token';

export default axios;
