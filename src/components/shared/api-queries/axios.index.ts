import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://45.12.230.75:3001',
    timeout: 5000,
});

export default Api;
