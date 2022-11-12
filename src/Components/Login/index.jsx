import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestLogin } from "../../services/api";
import Logo from '../../images/logo-orange-evolution.png'
import Voltar from '../../images/voltar-icone.png'
import { Div } from "../../styles/DivDefault";
import { Image } from "../../styles/Image";
import { Main, Card, ButtonFooter, Button, CardForm, Input } from './style';


const Login = () => {
    document.title = 'Login';

    const redirect = (url) => {
        navigate(url);
    };

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
                        <ButtonFooter onClick={()=> redirect('/')}>
                            <Image src={Voltar} alt="icone voltar" width="13px" height="11.15px" marginRight="5px" />
                            Voltar a Home
                        </ButtonFooter>
                        <ButtonFooter onClick={() => redirect('/registrar') }>Faça o Registro</ButtonFooter>
                    </Div>
                </Div>
            </Card>
        </Main>
    );
};

export default Login;
