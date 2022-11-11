import React from 'react';
import styled from 'styled-components';
import { Header } from '../Components/Header';
import { Button } from '../Components/Home/Button'
import { CardTrail } from '../Components/Home/CardTrail';
import Stakeholder from '../images/fundo-stakeholder.png';

const Main = styled.main`
  display:  flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-style:  regular;
    font-size: 13px;
    line-height: 16px;
    margin-top: 25px;
    margin-bottom: 25px;
  }
`;

const Banner = styled.section`
  width: 100vw;
  height: 317px;
  padding: 30px 16px;
  background: rgba(0, 16, 36, .6) url(${Stakeholder});
  background-size: cover;
  background-blend-mode: darken;

  h1 {
    width: 242px;
    color: #00C09B;
    font-weight: 700;
    font-size: 20px;
    line-height: 24.38px;
    margin-bottom: 3px;
  }

  h2 {
    width: 242px;
    color: white;
    font-weight: 700;
    font-size: 15px;
    line-height: 18.29px;
    margin-bottom: 15px;
  }

  p {
    color: white;
    font-weight: 400;
    font-size: 13px;
    line-height: 15.85px;
    text-align: left;
  }
`;

export const Home = () => {
  document.title = "Orange Evolution"
  return (
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
        <Button width="241px" height="30px">Quero Começar</Button>
      </Banner>
      <h3>CONHEÇA NOSSAS TRILHAS</h3>
      <CardTrail />
    </Main>
  );
};