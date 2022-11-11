import styled from "styled-components";
import { Div } from "../Div";
import Polygon from '../../images/polygon.png'
import PolygonDown from '../../images/polygon-down.png';
import { Image } from "../Image";
import { useState } from "react";

const Card = styled.div`
  width: 328px;
  height: ${props => props.drop ? '': '156px'};
  border: 3px solid ${props => props.borderColor};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 25px;

  h1 {
    font-size: 15px;
    line-height: 18.19px;
    margin-bottom: 7px;
  }
  

  h3 {
    margin: 0;
    padding: 0;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    font-weight: 400px;
    line-height: 15.85px;
  }
`;

const Divider = styled.div`
  background-color: #000;
  height: 1px;
  margin-top: 12px;
  margin-bottom: 14px;
`;

const Divdrop = styled.div`
  display: ${props => props.drop ? 'block' : 'none'};
  margin-top: 7px;
  animation: 0.5s fadeDiv;

  @keyframes fadeDiv {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const numeros = ['#f225c0','#00C19C', '#8819D2']
export const CardTrail = () => {
  const [drop, setDrop] = useState(false);
  
  const getDrop = () => {
    console.log(drop);
    setDrop(!drop)
  };

  return (
      numeros.map((item) => (
        <Card borderColor={item} drop={drop}>
          <h1>Trilha UX/UI</h1>
          <p>UX Design, UX Research, Design Thinking, Benchmarking, Persona, Mapa de Empatia, Fluxo de Usuário, Jornada do Usuário...</p>
          <Divider />
          <Div display="flex" justifyContent="space-between" onClick={ getDrop }>
            <h3>O que faz a pessoa UX/UI?</h3>
            <Image src={ drop ? PolygonDown : Polygon } alt="imagem poligono" width="13px" height="13px"/>
          </Div>
          <Divdrop drop={drop}>
            <p>Responsável pela experiência e navegação dos usuários em multiplataformas como websites e aplicações mobile.</p>
          </Divdrop>
        </Card>
      ))
  );
};