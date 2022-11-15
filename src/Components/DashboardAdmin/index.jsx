import React, { useEffect, useState } from 'react';
import { Header } from '../Header';
import fotoPerfil from '../../images/image-perfil.png';
import { requestTrailsHome } from '../../services/api';
import { InputSelect } from '../../styles/InputSelect';
import polygon from '../../images/polygon.png';
import MenuAdmin from '../MenuAdmin';
import {
  Main, DivPerfil, ImagePerfil, 
  Dashboard, DivCarrosel,
  CardDetails, DivProgress,
  Progress, DivStudent, DivFeedBack, Button
} from './style';
import ModalCreateUser from '../Modals/ModalContent/ModalCreateContent';

const DashboardAdmin = () => {
  const [trails, setTrail] = useState([]);
  const [isOpenUp, setIsOpenUp] = useState(false);

  const updateUser = () => {
    setIsOpenUp(true);
  };

  const requestTrails = async () => {
    const response = await requestTrailsHome();
    setTrail(response);
  };

  useEffect(() => {
    requestTrails()
  }, [])

  return (
    <Main>
      <ModalCreateUser isOpen={isOpenUp} setIsOpen={setIsOpenUp} />
      <Header />
      <DivPerfil>
        <button onClick={updateUser}>Cicla aqui</button>
        <ImagePerfil src={fotoPerfil} alt="foto de perfil" />
        <div>
          <h1>Rodrigo Carvalho</h1>
          <h3>Admin</h3>
        </div>
      </DivPerfil>
      <Dashboard>
        <h2>DASHBOARD</h2>
        <InputSelect>
          <select>
            {
              trails?.map((trail, index) => (
                <option key={index} value={trail.id}>{trail.name}</option>
              ))
            }
          </select>
          <img src={polygon} alt="" />
        </InputSelect>
        <DivCarrosel>
          <CardDetails color="white">
            <h4>12</h4>
            <p>Alunos Cadastrados</p>
          </CardDetails>
          <CardDetails color="white">
            <h4>12</h4>
            <p>Alunos Cadastrados</p>
          </CardDetails>
          <CardDetails color="white">
            <h4>12</h4>
            <p>Alunos Cadastrados</p>
          </CardDetails>
          <CardDetails color="white">
            <h4>12</h4>
            <p>Alunos Cadastrados</p>
          </CardDetails>
        </DivCarrosel>
        <DivProgress>
          <h3>Alunos que completaram a trilha</h3>
          <Progress>
            <div>
              <p>20%</p>
            </div>
          </Progress>
        </DivProgress>
      </Dashboard>
      <DivStudent>
        <h2>Alunos do Orange Evolution</h2>

        <DivCarrosel>
            <CardDetails color="#420C66" textColor="#fff">
              <h4>15</h4>
              <p>Alunos Cadastrados</p>
            </CardDetails>
            <CardDetails color="#420C66" textColor="#fff">
              <h4>11</h4>
              <p>Alunos Cadastrados</p>
            </CardDetails>
            <CardDetails color="#420C66" textColor="#fff">
              <h4>11</h4>
              <p>Alunos Cadastrados</p>
            </CardDetails>
            <CardDetails color="#420C66" textColor="#fff">
              <h4>11</h4>
              <p>Alunos Cadastrados</p>
            </CardDetails>
          </DivCarrosel>
      </DivStudent>
      <DivFeedBack>
        <h2>FeedBack dos Alunos(09)</h2>
        <div><h5>01 - Fundamentos de UX (User...</h5><p>Visualizar</p></div>
        <div><h5>02 - Fundamentos de UX (User...</h5><p>Visualizar</p></div>
        <div><h5>03 - Fundamentos de UX (User...</h5><p>Visualizar</p></div>
      </DivFeedBack>
      <Button>Sair da Plataforma</Button> 
      <MenuAdmin />
    </Main>
  );
};

export default DashboardAdmin;
