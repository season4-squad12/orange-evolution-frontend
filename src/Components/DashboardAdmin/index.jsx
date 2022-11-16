/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import { Header } from '../Header';
import fotoPerfil from '../../images/image-perfil.png';
import { requestDataUsers, requestTrailsHome, setToken } from '../../services/api';
import { InputSelect } from '../../styles/InputSelect';
import polygon from '../../images/polygon.png';
import MenuAdmin from '../MenuAdmin';
import {
  Main, DivPerfil, ImagePerfil, 
  Dashboard, DivCarrosel,
  CardDetails, DivProgress, DivHeaderFeedback,
  Progress, DivStudent, DivFeedBack, Button
} from './style';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';
import ModalFeedaback from '../ModalFeedback';

const DashboardAdmin = () => {
  const {feedbacks} = useContext(GlobalContext);
  const [trails, setTrail] = useState([]);
  const [dataUsers, setDataUsers] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [openModal, setOpenModal] = useState([]);
  const [feedbackSelected, setFeedbackSelected] = useState([]);

  const openModalFeedback = (feedback) => {
    setFeedbackSelected(() => feedback);
    setOpenModal(true);
  };

  const navigate = useNavigate();

  const redirect = (url) => {
    navigate(url)
  };

  const requestTrails = async () => {
    const response = await requestTrailsHome();
    setTrail(response);
  };

  const requestUsers = async () => {
    const { user, token } =  JSON.parse(localStorage.getItem('user'));
    if (!user) return navigate('/login');
    setUserInfo(user);
    try {
      setToken(token);
      const requestUsers = await requestDataUsers();
      setDataUsers(requestUsers);
    } catch(e) {
        console.log(e)
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login')
  };

  useEffect(() => {
    requestUsers();
    requestTrails();
  }, [])

  return (
    <>
    <Header />
    <Main>
      <DivPerfil>
        <ImagePerfil src={fotoPerfil} alt="foto de perfil" />
        <div>
          <h1>{ userInfo.name } {userInfo.lastName}</h1>
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
        {/* <DivProgress>
          <h3>Alunos que completaram a trilha</h3>
          <Progress>
            <div>
              <p>20%</p>
            </div>
          </Progress>
        </DivProgress> */}
      </Dashboard>
      <DivStudent>
        <h2>Alunos do Orange Evolution</h2>

        <DivCarrosel>
            <CardDetails color="#420C66" textColor="#fff">
              <h4>{dataUsers.length}</h4>
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
        <DivHeaderFeedback>
          <h2>FeedBack dos Alunos({feedbacks.length})</h2>
          <button onClick={() => redirect('/feedbacks')}>Ver todos</button>
        </DivHeaderFeedback>
        { feedbacks.length > 0 && (
          feedbacks.slice(0, 3).map((feedback, index) => (
            <div key={index}><h5>{index} - {feedback.subtrail}</h5><button onClick={() => openModalFeedback(feedback)}>Visualizar</button></div>
          ))
        )}
      </DivFeedBack>
      <Button onClick={ logout }>Sair da Plataforma</Button> 
    </Main>
    { feedbackSelected.message &&
      <ModalFeedaback isOpen={openModal} setIsOpen={setOpenModal} feedback={feedbackSelected
      }/>
    }
    <MenuAdmin />
    </>
  );
};

export default DashboardAdmin;
