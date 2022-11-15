import React from "react";
import { Header } from "../Header";
import MenuFooter from '../MenuFooter/MenuFooter';
import { DivPerfil, ImagePerfil } from "./style";
import fotoPerfil from '../../images/image-perfil.png';
import buttonSum from '../../images/buttonsum.png';
import { 
  Main, ProgressAll, TrailSelected, GridCard, Card, Divser,
  Progress, ButtomSum, CompletedTrail, LineDiviser, Studying,
  ProgressTrail, Button} from './style';
import { useNavigate } from "react-router-dom";

const DashboardUser = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login')
  };

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
      <Button onClick={ logout }>Sair da Plataforma</Button>
      <MenuFooter />
    </Main>
  )
};

export default DashboardUser;
