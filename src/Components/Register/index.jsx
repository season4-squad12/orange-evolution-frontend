import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../../images/logo-orange-evolution.png';
import Voltar from '../../images/voltar-icone.png';
import { Div } from "../../styles/DivDefault";
import { Image } from "../../styles/Image";
import { Main, Card, ButtonFooter, Button, CardForm, Input } from './style';
import { requestCreateUser } from "../../services/api";

 const Register = ()=>{
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { value, name }}) => {
        switch (name) {
            case 'name': setName(value); break;
            case 'lastname': setLastName(value); break;
            case 'email': setEmail(value); break;
            case 'password': setPassword(value); break;
            default: break;
        }
    };

    const navigate = useNavigate();

    const redirect = (url) => {
        navigate(url);
    };
    
    const submitForm = async () => {
        try {
            const result = await requestCreateUser({
                name,
                lastName,
                email,
                role: 'student',
                password,
                trails: []
            });
            if (result) {
                localStorage.setItem('user', JSON.stringify(result));
                navigate('/selecionar-trilha')
            }
        } catch(e) {
            console.log(e)
        }

    };

    return (
    <Main>
        <Card>
            <Image src={ Logo } alt="logo do aplicativo" width="120px" height="120px" marginTop="0px" />
            <CardForm>
                <Input
                    type="text"
                    name="name"
                    value={ name }
                    onChange={ handleChange }
                    placeholder="Nome"
                />
                <Input 
                    type="text"
                    name="lastname"
                    value={ lastName }
                    onChange={ handleChange }
                    placeholder="Sobrenome"
                />
                <Input 
                    type="email"
                    name="email"
                    value={ email }
                    onChange={ handleChange }
                    placeholder="Email"
                />
                <Input 
                    type="password"
                    name="password"
                    value={ password }
                    onChange={ handleChange }
                    placeholder="Senha"
                />
            </CardForm>
            <Div display="flex" flexDirection="column" alignItem="center" marginBottom="26px" background="none">
                <Button type="button" onClick={ submitForm } width="264px" height="60px">REGISTRAR</Button>
                <Div display="flex" justifyContent="space-between" alignItem="center">
                    <ButtonFooter onClick={ () => redirect('/')}>
                        <Image src={Voltar} alt="icone voltar" width="13px" height="11.15px" marginRight="5px" />
                        Voltar a Home
                    </ButtonFooter>
                    <ButtonFooter onClick={ () => redirect('/login')}>Faça o Login</ButtonFooter>
                </Div>
            </Div>
        </Card>
    </Main>
    )
};

export default Register;
