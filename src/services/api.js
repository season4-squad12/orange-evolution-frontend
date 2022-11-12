import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3001'
});

export const setToken = (token) => {
    api.defaults.headers.common.Authorization = token;
};

/* 
 *  ENDPOINTS PARA O FLUXO DO USUÁRIO
 */

// EndPoint Login 
export const requestLogin = async (body) => {
    const {data} = await api.post('/login', body);
    return data;
}

export const validateLogin = async (token) => {
    const { data } = await api.get('/login/validate');
    return data;
};

// EndPoint Trilhas 
export const requestTrialsHome = async () => {
    const { data } = await api.get('/trailshome');
    return data;
};

export const requestTrails = async (token) => {
    const { data } = await api.get('/trails');
    return data;
};

// EndPoint Users
export const requestCreateUser = async (body) => {
    const { data } = await api.post('/users', body);
    return data;
};

