import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3001/'
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

export const validateLogin = async () => {
    const { data } = await api.get('/login/validate');
    return data;
};

// EndPoint Trilhas 
export const requestTrailsHome = async () => {
    const { data } = await api.get('/trailshome');
    return data;
};

export const requestTrailsUser = async (id) => {
    const { data } = await api.get(`/trails-user/${id}`);
    return data;
};

export const requestSubtrail = async (id) => {
    const { data } = await api.get(`/subtrails/${id}`);
    return data;
};

export const requestSelectTrails = async (body) => {
    const { data } = await api.post('/usertrails', body);
    return data;
};

// EndPoint Users
export const requestCreateUser = async (body) => {
    const { data } = await api.post('/users', body);
    return data;
};

export const requestDataUsers = async () => {
    const {data} = await api.get('/usersrole/student');
    return data;
};

// EndPoint Content
export const requestContent = async (id) => {
    const { data } = await api.get(`/contents/${id}`);
    return data;
};

// Criar e atulizar Trail, SubTrails e Contents

// Trails
export const requestUpdateTrail = async (id, body) => {
    const {data } = await api.put(`/trails/${id}`, body);
    return data;
};

export const requestDeleteTrail = async (id) => {
    const {data } = await api.delete(`/trails/${id}`);
    return data;
};

export const requestCreateTrail = async (body) => {
    const {data} = await api.post('/trails',body);
    return data;
};

//Subtrails
export const requestUpdateSubTrail = async (id, body) => {
    const {data} = await api.put(`/subtrails/${id}`, body)
    return data;
};

export const requestDeleteSubtrail = async (id) => {
    const {data } = await api.delete(`/subtrails/${id}`);
    return data;
};

export const requestCreateSubTrail = async (body) => {
    const {data} = await api.post('subtrails', body);
    return data;
};

//Content
export const requestUpdateContent = async (id, body) => {
    const {data } = await api.put(`/contents/${id}`, body)
    return data;
};

export const requestDeleteContent = async (id) => {
    const {data } = await api.delete(`/contents/${id}`);
    return data;
};

export const requestCreateContent = async (body) => {
    const {data} = await api.post('/contents', body);
    return data;
};

// FeedBack

export const requestCreateFeedback = async (body) => {
    const {data} = await api.post('/feedbacks', body);
    return data;
}

export const requestFeedback = async (body) => {
    const {data} = await api.get('/feedbacks');
    return data;
};

// Retorn todos os valores de cada endpoint específico

export const requestContentsAll = async () => {
    const {data} = await api.get('/contents');
    return data;
};

export const requestSubtrailsAll = async () => {
    const {data} = await api.get('/subtrails');
    return data;
};

export const requestTrailssAll = async () => {
    const {data} = await api.get('/trails');
    return data;
};
