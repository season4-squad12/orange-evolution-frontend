import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../images/logo-orange-evolution.png';
import Voltar from '../images/voltar-icone.png';
import { Div } from "../Components/Div";
import { Image } from "../Components/Image";
import { Main, Card, ButtonFooter, Button, CardForm, Input } from '../Components/Register/Style';

 export const Register = ()=>{
    const navigate = useNavigate();

    const redirect = (url) => {
        navigate(url);
    };

    return (
    <Main>
        <Card>
            <Image src={ Logo } alt="logo do aplicativo" width="120px" height="120px" marginTop="0px" />
            <CardForm>
                <Input
                    type="text"
                    name="email"
                    /* value={ valueEmail }
                    onChange={ handleChangeEmail } */
                    placeholder="Email"
                />
                <Input 
                    type="text"
                    name="lastname"
                    /* value={ valuePassword }
                    onChange={ handleChangePassword } */
                    placeholder="Sobrenome"
                />
                <Input 
                    type="email"
                    name="email"
                    /* value={ valuePassword }
                    onChange={ handleChangePassword } */
                    placeholder="Email"
                />
                <Input 
                    type="password"
                    name="password"
                    /* value={ valuePassword }
                    onChange={ handleChangePassword } */
                    placeholder="Senha"
                />
            </CardForm>
            <Div display="flex" flexDirection="column" alignItem="center" marginBottom="26px" background="none">
                <Button type="button" width="264px" height="60px">REGISTRAR</Button>
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
}
