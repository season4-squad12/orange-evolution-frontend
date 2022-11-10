import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3001/'
});

export const requestLogin = async (endPoint,body)=>{
    const {data} = await api.post(endPoint,body);
    return data;
}

export const requestTrails = async (endPoint) => {
    const { data } = await api.get(endPoint);
    return data;
};
