import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://192.168.0.114:3001',
    timeout: 5000,
});

export default Api;
