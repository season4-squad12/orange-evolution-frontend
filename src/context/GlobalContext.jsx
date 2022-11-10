import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { requestTrails } from "../services/api";
export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [trails, setTrails] = useState([1,2, 3]);
  
  const request = async () => {
    const response = await requestTrails('/trails');
    setTrails(response);
  };

  useEffect(() => {
    request();
  }, []);

  return(
    <GlobalContext.Provider value={{
      trails,
      setTrails,
    }}>
      { children }
    </GlobalContext.Provider>
  )
};