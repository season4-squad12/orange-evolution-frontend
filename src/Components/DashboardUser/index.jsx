import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const DashboardUser = () => {
  const { trails, verifyLogin } = useContext(GlobalContext);

  useEffect(() => {
    verifyLogin();
  },[verifyLogin]);

  return (
    <>
      <h1>Dashboard</h1>
      { trails.length > 0 &&
          trails.map((trail, index) => (
          <p key ={index}>{index} - {trail.name}</p>      
        ))
      }
    </>
  )
};

export default DashboardUser;
