import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Login/Input";
import { requestLogin } from "../services/api";
import styled from "styled-components";
import { Button } from "../components/Login/Button";
import { CardForm } from "../components/CardForm";
import Logo from '../images/logo-orange-evolution.png'
import Voltar from '../images/voltar-icone.png'
import { Image } from "../components/Image";
import { Div } from '../components/Div'


const Main = styled.main`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Card = styled.div`
    display: flex ;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 576px) {
        height: 100vh;
        width: 100vw;
    }
  
    // Medium devices (tablets, 768px and up)
    @media (min-width: 576px) and (max-width: 767.98px){
        width: 100vw;
        height: 100vh;
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 768px) and (max-width: 991.98px) {
        width: 600px;
        height: 600px;
    }

    // X-Large devices (large desktops, 1200px and up)
    @media (min-width: 991.99px) {
        width: 600px;
        height: 500px;
    }
`;

const A = styled.a`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 15.85px;
    text-decoration: none;
    color: #9A9A9A;
    &:visited {
        color: #9A9A9A;
    }
`;

export const Login = () => {
    document.title = 'Login';
    const [valueEmail, setEmail] = useState('');
    const [valuePassword, setPassword] = useState('');

    const navigate = useNavigate();

    const handleChangeEmail = ({ target: { value } }) => {
        setEmail(value);
    };

    const handleChangePassword = ({ target: { value } }) => {
        setPassword(value);
    };

    const submintLogin = async () => {
        try{
            const user = await requestLogin({ email: valueEmail, password: valuePassword });
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                navigate('/dashboard');
            }
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <Main>
            <Card>
                <Image src={ Logo } alt="logo do aplicativo" width="120px" height="120px" marginTop="40px" />
                <CardForm>
                    <Input
                        type="text"
                        name="email"
                        value={ valueEmail }
                        onChange={ handleChangeEmail }
                        placeholder="Email"
                    />
                    <Input 
                        type="password"
                        name="password"
                        value={ valuePassword }
                        onChange={ handleChangePassword }
                        placeholder="Senha"
                    />
                </CardForm>
                <Div display="flex" flexDirection="column" alignItem="center" marginBottom="26px" background="none">
                    <Button type="button" onClick={ submintLogin } width="264px" height="60px">LOGAR</Button>
                    <Div display="flex" justifyContent="space-between" alignItem="center">
                        <A href="/">
                            <Image src={Voltar} alt="icone voltar" width="13px" height="11.15px" marginRight="5px" />
                            Voltar a Home</A>
                        <A href="/registrar">Faça o Registro</A>
                    </Div>
                </Div>
            </Card>
        </Main>
    );
};