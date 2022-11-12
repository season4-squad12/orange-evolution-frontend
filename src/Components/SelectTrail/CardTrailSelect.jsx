import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  border: ${props => props.selected ? '2px solid #00c19c' : 'none'};

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 255px;
  height: 110px;
  background-color: white;
  color: #001024;
  border-radius: 20px;
  margin-bottom: 17px;

  h3 {
    width: 122px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
  }
`;

export const CardTrailSelect = ({ trail }) => {
  const [selected, setSelected] = useState(false);
  const [trailsSelected, setSelectTrail] = useState([]);

  const addTrail = (trail) => {
    let newArray = trailsSelected;
    if (newArray.includes(trail)) {
      newArray = newArray.filter(id => id !== trail);
    } else {
      newArray.push(trail)
    }
    setSelected(!selected);
    setSelectTrail(newArray);
  }
  return (
    <Card
      selected={ selected }
      onClick={() => addTrail(trail.id)}
    >
      <img src="https://cdn-icons-png.flaticon.com/512/5432/5432927.png" alt="" width="68.58px" height="68.58px" />
      <h3>Trilha UX/UI Design</h3>
    </Card>
  );
};
