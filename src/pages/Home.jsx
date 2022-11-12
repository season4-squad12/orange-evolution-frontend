import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Header } from '../Components/Header';
import { Button, ButtonAction, Footer, Main, Banner, CardList } from '../Components/Home/style';
import { CardTrail } from '../Components/Home/CardTrail';
import { requestTrialsHome } from '../services/api';
import { useEffect } from 'react';


export const Home = () => {
  const [trails, setTrails] = useState([]);
  document.title = "Orange Evolution"
  const navigate = useNavigate();

  const request = async () => {
    const response = await requestTrialsHome();
    setTrails(response);
  }

  const redirect = (url) => {
    navigate(url);
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <>
      <Main>
        <Header />
        <Banner>
          <h1>Evolua sua carreira na Tecnoliga!</h1>
          <h2>Acesse trilhas gratuitas em UX/UI, QA (Quality Assunce) e Desenvolvimento FullStack</h2>
          <p>
            Para você que está migrando de carreira ou iniciando na área, 
            oferecemos uma gamificação do processo de ensino, exercícios e uma
            comunidade própria para interagir com outros alunos e tirar dúvidas!
          </p>
          <ButtonAction onClick={ () => redirect('/registrar')}>Quero Começar</ButtonAction>
        </Banner>
        <h3>CONHEÇA NOSSAS TRILHAS</h3>
        <CardList>
          {
            trails.length > 0 &&
            trails.map((trail, index) => (
              <CardTrail key={index} trail={trail} />
            ))
          }
        </CardList>
      </Main>
      <Footer>
        <Button onClick={ () => redirect('/registrar')} color="white" background="#00C19C">REGISTRAR</Button>
        <Button onClick={ () => redirect('/login')} color="#001024" background="">LOGAR</Button>
      </Footer>
    </>
  );
};