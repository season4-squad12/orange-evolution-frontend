import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken, validateLogin } from "../services/api";
export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [trails, setTrails] = useState([]);

  const navigate = useNavigate();
  
  const verifyLogin = async () => {
    const user =  JSON.parse(localStorage.getItem('user'));
    if (!user) return navigate('/login');
    try {
      setToken(user.token);
      await validateLogin();
    } catch (e) {
      navigate('/login');
    }
  };

  return(
    <GlobalContext.Provider value={{
      trails,
      setTrails,
      verifyLogin,
    }}>
      { children }
    </GlobalContext.Provider>
  )
};