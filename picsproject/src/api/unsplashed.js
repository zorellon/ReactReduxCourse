import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Athorization: 
            'Client-ID 1e4edeba7ca96321eccc01309f051bdda9892bc5fe71798287696d1207e2584b'
    }
});