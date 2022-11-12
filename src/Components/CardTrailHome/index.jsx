import { useState } from "react";
import Polygon from '../../images/polygon.png'
import PolygonDown from '../../images/polygon-down.png';
import { Image } from "../../styles/Image";
import { Card, Divider, Divdrop, Div, } from './style';

const CardTrailHome = ({ trail }) => {
  const [drop, setDrop] = useState(false);
  
  const getDrop = () => {
    setDrop(!drop)
  };

  return (
      <Card borderColor={trail.color} drop={drop}>
        <h1>{trail.name}</h1>
        <p>{ trail.description }</p>
        <Divider />
        <Div onClick={ getDrop }>
          <h3>{trail.question}</h3>
          <Image src={ drop ? PolygonDown : Polygon } alt="imagem poligono" width="13px" height="13px"/>
        </Div>
        <Divdrop drop={drop}>
          <p>{trail.response}</p>
        </Divdrop>
      </Card>
  );
};

export default CardTrailHome;
