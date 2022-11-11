import { useState } from "react";
import Polygon from '../../images/polygon.png'
import PolygonDown from '../../images/polygon-down.png';
import { Image } from "../Image";
import { Card, Divider, Divdrop, Div, } from './CartTrailStyles';

export const CardTrail = (props) => {
  const [drop, setDrop] = useState(false);
  
  const getDrop = () => {
    setDrop(!drop)
  };

  return (
      <Card borderColor={ props.color } drop={drop}>
        <h1>Trilha UX/UI</h1>
        <p>UX Design, UX Research, Design Thinking, Benchmarking, Persona, Mapa de Empatia, Fluxo de Usuário, Jornada do Usuário...</p>
        <Divider />
        <Div onClick={ getDrop }>
          <h3>O que faz a pessoa UX/UI?</h3>
          <Image src={ drop ? PolygonDown : Polygon } alt="imagem poligono" width="13px" height="13px"/>
        </Div>
        <Divdrop drop={drop}>
          <p>Responsável pela experiência e navegação dos usuários em multiplataformas como websites e aplicações mobile.</p>
        </Divdrop>
      </Card>
  );
};