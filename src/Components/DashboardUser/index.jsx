import React from "react";
import styled from "styled-components";
import { Header } from "../Header";
import { DivPerfil, ImagePerfil } from "./style";
import fotoPerfil from '../../images/image-perfil.png';
import buttonSum from '../../images/buttonsum.png';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width:  100vw;
`;

const Divser = styled.div`
  align-self: center;
  width: 90%;
  border: 1px solid #DADADA;

  @media (max-width: 576px) {
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    width: 524px;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 524px;
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 991.99px) {
    width: 524px;
  }
`;

const ProgressAll = styled.div`
  margin-top: 35px;
  margin-bottom: 35px;

  div {
    display: flex;
    align-items: center;
    margin-left:16px;
    margin-bottom: 10px;

    h3 {
      font-family: 'Montserrat', sans-serif;
      color: #001024;
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
      margin-right: 5px;
    }

    p {
      font-family: 'Montserrat', sans-serif;
      color: #001024;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 12px;
    }
  }

  @media (max-width: 576px) {
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    width: 524px;
    align-self: center;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 524px;
    align-self: center;
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 991.99px) {
    width: 524px;
    align-self: center;
  }
`;

export const Progress = styled.div`
  position: relative;
  width: 90%;
  height: 26px;
  background-color:#DADADA;
  border-radius: 10px;
  display: flex;
  align-items: center;

  div {
    width: 20%;
    height: 26px;
    position: absolute;
    background-color: #00856C;
    border-radius: 10px;
    display: flex;
    top: 0;
    padding: 0;
    margin: 0;
    align-items: center;
    justify-content: end;

    p {
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
      color: white;
      margin-right: 10px;
    }
  }

  @media (max-width: 576px) {
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    width: 524px;
    align-self: center;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 524px;
    align-self: center;
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 991.99px) {
    width: 524px;
    align-self: center;
  }
`;

const TrailSelected = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 35px;

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #001024;
    margin-left: 16px;
    margin-bottom: 15px;
  }
  @media (max-width: 576px) {
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    width: 524px;
    align-self: center;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 524px;
    align-self: center;
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 991.99px) {
    width: 524px;
    align-self: center;
  }
`;

const GridCard = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
`;
const Card = styled.div`
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 99px;
  height: 40px;
  border-radius: 10px;
  background-color: #001024;
  color: white;
  font-family: 'Montserrat', sans-serif;
`;

const ButtomSum = styled.button`
  width: 99px;
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: #001024;

  img {
    margin-right: 4px;
  }
`;

const CompletedTrail = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #420C66;
  font-family: 'Montserrat', sans-serif;
  padding-bottom: 25px;

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #fff;
    margin-top: 25px;
    margin-left: 16px;
    margin-bottom: 18px;
  }

  h6 {
    width: 90%;
    margin: auto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: 15px;
    color: white;
  }

 
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 692px;
    align-self: center;
    border-radius: 20px
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 991.99px) {
    width: 692px;
    align-self: center;
    border-radius: 20px
  }
`;

const LineDiviser = styled.div`
  background-color: #CCCCCC;
  width: 90%;
  align-self: center;
  height: 0.1px;
  margin-top: 11px;
  margin-bottom: 11px;
`;

const Studying = styled.div`
  margin-bottom: 50px;
  h3 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #001024;
    margin-left: 16px;
    margin-bottom: 15px;
    margin-top: 33px;
  }

  @media (max-width: 576px) {
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    width: 524px;
    align-self: center;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 524px;
    align-self: center;
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 991.99px) {
    width: 524px;
    align-self: center;
  }
`;

const ProgressTrail =  styled.div`
  position: relative;
  width: 90%;
  height: 46px;
  background-color:#001024;
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin: auto;
  margin-bottom: 9px;

  span {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    text-align: right;
    color: white;
    position: absolute;
    right: 5px;
  }

  div {
    width: ${props => props.progress};
    height: 46px;
    position: absolute;
    background-color: #00856C;
    border-radius: 20px;
    display: flex;
    top: 0;
    padding: 0;
    margin: 0;
    align-items: center;
    justify-content: start;

    p {
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
      color: white;
      margin: 10px;
    }
  }
`;

export const Button = styled.div`
  background-color: #801365;
  border: none;
  color: white;
  width: 327px;
  height: 41px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-bottom: 120px;

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
`;

const DashboardUser = () => {
  return (
    <Main>
      <Header />
      <DivPerfil>
        <ImagePerfil src={fotoPerfil} alt="foto de perfil" />
        <div>
          <h1>Rodrigo Carvalho</h1>
        </div>
      </DivPerfil>
      <Divser />
      <ProgressAll>
        <div>
          <h3>Progresso Total</h3>
          <p>(todas as suas trilhas juntas)</p>
        </div>
        <Progress>
          <div>
            <p>20%</p>
          </div>
        </Progress>
      </ProgressAll>
      <TrailSelected>
        <h3>Trilhas Selecionadas</h3>
        <GridCard>
          <Card>
            UX/UI
          </Card>
          <Card>
            Fullstack
          </Card>
          <ButtomSum>
            <img src={buttonSum} alt="botão para adicioanr trilh" />
            Nova Trilha
          </ButtomSum>
        </GridCard>
      </TrailSelected>
      <CompletedTrail>
        <h3>Módulos Concluídos(06)</h3>
        <h6>UX/UI - O inicío</h6>
        <LineDiviser />
        <h6>QA - O inicío</h6>
        <LineDiviser />
        <h6>FullStack - O inicío</h6>
        <LineDiviser />
      </CompletedTrail>
      <Studying>
        <h3>Módulos em andamento</h3>
        <ProgressTrail progress="20%">
          <div>
            <p>20%</p>
          </div>
          <span>Fundamentos UX - UX/UI</span>
        </ProgressTrail>
        <ProgressTrail progress="50%">
          <div>
            <p>50%</p>
          </div>
          <span>Fundamentos UX - UX/UI</span>
        </ProgressTrail>
        <ProgressTrail progress="90%">
          <div>
            <p>96%</p>
          </div>
          <span>Fundamentos UX - UX/UI</span>
        </ProgressTrail>
      </Studying>
      <Button>Sair da Plataforma</Button>
    </Main>
  )
};

export default DashboardUser;
