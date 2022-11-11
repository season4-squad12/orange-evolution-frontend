import React from 'react';
import { useNavigate } from "react-router-dom";
import { Header } from '../Components/Header';
import { Button, ButtonAction, Footer, Main, Banner, CardList } from '../Components/Home/style';
import { CardTrail } from '../Components/Home/CardTrail';

const numeros = [
  { id: 1, color: '#f225c0' },
  { id: 2, color: '#00C19C' }, 
  {id: 3, color: '#8819D2' },
];

export const Home = () => {
  document.title = "Orange Evolution"
  const navigate = useNavigate();
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
          <ButtonAction onCLick={()=> navigate('/login')}>Quero Começar</ButtonAction>
        </Banner>
        <h3>CONHEÇA NOSSAS TRILHAS</h3>
        <CardList>
          {
            numeros.map((item) => (
              <CardTrail color={item.color} />
            ))
          }
        </CardList>
      </Main>
      <Footer>
        <Button onCLick={() => navigate('/registrar')} color="white" background="#00C19C">REGISTRAR</Button>
        <Button onClick={() => navigate('/login')} color="#001024" background="">LOGAR</Button>
      </Footer>
    </>
  );
};