import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Main, Section, Button } from "./style";
import { requestTrailsHome } from "../../services/api";
import CardSelectTrail from "../CardSelectTrail";
import { requestSelectTrails, setToken } from "../../services/api";
import { GlobalContext } from "../../context/GlobalContext";

export const SelectTrail = () => {
  const { trailsSelected } = useContext(GlobalContext);
  const [trails, setTrails] = useState([]);
  const navigate = useNavigate();

  const request = async () => {
    const response = await requestTrailsHome();
    setTrails(response);
  }

  useEffect(() => {
    request();
  }, []);

  const nextScreen = async () => {
    const { user, token } =  JSON.parse(localStorage.getItem('user'));
    try{
      if (user) {
        setToken(token);
        await requestSelectTrails({ idUser: user.id, trails: trailsSelected })
        navigate('/trilhas');
      } else {
        navigate('/login');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Main>
      <Section>
        <h1>Escolha sua Trilha</h1>
        <p> 
            Sim! Você pode escolher mais de <br/>
            uma e pode mudar depois no seu perfil também!
        </p>
        <div>
          {
            trails.map((trail, index) => (
              <CardSelectTrail key={index} trail={trail}/>
            ))
          }
        </div>
        <Button onClick={ nextScreen }>Prosseguir</Button>
      </Section>
    </Main>
  );
};