import React, { createContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setToken, validateLogin, requestSubtrail, requestTrailsUser, requestFeedback } from "../services/api";
export const GlobalContext = createContext({});


export const GlobalProvider = ({ children }) => {
  const [trails, setTrails] = useState([]);
  const [trailsSelected, setSelectTrail] = useState([]);
  const [paramContent, setParamContent] = useState({});
  const [userLogin, setuserLogin] = useState({});
  const [feedbacks, setFeedbacks] = useState([]);

  
  const navigate = useNavigate();
    
  const verifyLogin = async () => {
    const { user } =  JSON.parse(localStorage.getItem('user'));
    if (!user) return navigate('/login');
    setuserLogin(user);
    try {
      setToken(user.token);
      await validateLogin();
    } catch (e) {
      navigate('/login');
    }
  };

  const requestFeedbacksAll = async () => {
    const { user, token } =  JSON.parse(localStorage.getItem('user'));
    if (!user) return navigate('/login');
    try {
      setToken(token);
      const result = await requestFeedback();
      if (result) {
        setFeedbacks(result);
      }
    } catch(e) {
        console.log(e)
    }
  };
  
  const requestTrailAllUser = async () => {
    const { user, token } =  JSON.parse(localStorage.getItem('user'));
    if (!user) return navigate('/login');
    const trails = await requestTrailsUser(user.id);

    const allTrailUser = await trails.map((trail) => {

      const mapSubTrailIds = trail.subtrilhas.map((subtrail) => subtrail.id);
      setToken(token);

       Promise.all(mapSubTrailIds.map((id) => requestSubtrail(id)))
        .then((data) => {
          delete trail.subtrilhas;
          trail['subtrilhas'] = data;
        });

      return trail;
    });
    setTrails(allTrailUser);
  };

  useEffect(() => {
    requestTrailAllUser();
    requestFeedbacksAll()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <GlobalContext.Provider value={{
      trails,
      setTrails,
      verifyLogin,
      trailsSelected,
      setSelectTrail,
      paramContent,
      setParamContent,
      userLogin,
      setuserLogin,
      feedbacks
    }}>
      { children }
    </GlobalContext.Provider>
  )
};