import axios from 'axios';

export default axios.create({
    // No funciona con localhost
    baseURL: 'http://10.0.2.2:3000'
});