import axios from "axios";


const api = axios.create({
    baseURL: process.env.URL_BASE
});

export const setToken = (token)=>{
    api.defaults.headers.common.Authorization=token
}

export const requestLogin = async (endPoint,body)=>{
    const {data} = await api.post(endPoint,body);
    return data;
}

