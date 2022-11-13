import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Card } from './style';

const CardSelectTrail = ({ trail }) => {
  const { trailsSelected, setSelectTrail } = useContext(GlobalContext);
  const [selected, setSelected] = useState(false);

  const addTrail = (trail) => {
    let newArray = trailsSelected;
    if (newArray.includes(trail)) {
      newArray = newArray.filter(id => id !== trail);
    } else {
      newArray.push(trail)
    }
    setSelected(!selected);
    setSelectTrail(()=> newArray);
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

export default CardSelectTrail;

