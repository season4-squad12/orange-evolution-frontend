import axios from "axios";

const api = axios.create({
    baseURL: 'https://squad12-orange-evolution-api.herokuapp.com'
});

export const requestLogin = async (body)=>{
    const {data} = await api.post('/login', body);
    return data;
}

export const requestTrails = async () => {
    const { data } = await api.get('/trails');
    return data;
};
