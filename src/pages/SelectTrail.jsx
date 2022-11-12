import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Main, Section, Button } from "../Components/SelectTrail/style";
import { CardTrailSelect } from "../Components/SelectTrail/CardTrailSelect";
import { requestTrialsHome } from "../services/api";

export const SelectTrail = () => {
  const [trails, setTrails] = useState([]);
  /* const navigate = useNavigate(); */

  const request = async () => {
    const response = await requestTrialsHome();
    setTrails(response);
  }

  useEffect(() => {
    request();
  }, []);

  return (
    <Main>
      <Section>
        <h1>Escolha sua Trilha</h1>
        <p> 
            Sim! Você pode escolher mais de <br/>
            uma e pode mudar depois no seu perfil também!
        </p>
        {
          trails.map((trail, index) => (
            <CardTrailSelect trail={trail}/>
          ))
        }
        <Button>Prosseguir</Button>
      </Section>
    </Main>
  );
};