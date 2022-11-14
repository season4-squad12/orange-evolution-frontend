import React from "react";
import styled from "styled-components";
import { Header } from "../Header";
import { DivPerfil, ImagePerfil } from "./style";
import fotoPerfil from '../../images/image-perfil.png';

const Main = styled.main`
  
`;

const DashboardUser = () => {
  return (
    <Main>
      <Header />
      <DivPerfil>
        <ImagePerfil src={fotoPerfil} alt="foto de perfil" />
        <div>
          <h1>Rodrigo Carvalho</h1>
          <h3>Admin</h3>
        </div>
      </DivPerfil>
    </Main>
  )
};

export default DashboardUser;
