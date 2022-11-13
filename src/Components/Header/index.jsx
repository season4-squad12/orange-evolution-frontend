import React, { useState, useEffect } from 'react';
import Logo from '../../images/logo-orange-evolution-horizontal.png';
import { Image } from "../../styles/Image";
import { HeaderApp } from "./style";
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const [user, setUserLocal] = useState({});
  const navigate = useNavigate();

  const redirect = (url) => {
    navigate(url);
  };

  const getLocalUser = () => {
    const { user } = JSON.parse(localStorage.getItem('user'));
    setUserLocal(user);
  };
  useEffect(() => {
    getLocalUser();
  }, []);

  return (
    <HeaderApp>
      <Image src={Logo} alt="logo da aplicação" width="155px" height="61px" marginLeft="15px" />
      
      { user.role === 'admin' && (
        <div>
          <button 
            onClick={ () => redirect('/dashboard')}
            active={ window.location.pathname === "/dashboard" && true}
          >
            Dashboard
          </button>
          <button 
            onClick={ () => redirect('/dashboard')}
            active={ window.location.pathname === "/admin" && true}
          >
            Admin
          </button>
        </div>
      )}
    </HeaderApp>
  );
};