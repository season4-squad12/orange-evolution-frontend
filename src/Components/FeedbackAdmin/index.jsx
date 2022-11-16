/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { requestFeedback, setToken } from '../../services/api'
import { DividerContent } from '../ContentScreen/style'
import { Header } from '../Header'
import MenuAdmin from '../MenuAdmin'
import { CardFeedback, MainFeedback } from './Style'

const FeedbackAdmin = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const navigate = useNavigate();

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

  useEffect(() => {
    requestFeedbacksAll();
  }, []);

  return (
    <>
      <Header />

        <MainFeedback>
          <p style={{width:'80%', textAlign:'center'}}> 
            FEEDBACK DOS CONTEÚDOS PELOS USUÁRIOS
          </p>
          <DividerContent style={{width:'100%',margin:'20px'}}/>

        { feedbacks &&
          feedbacks.map((feedback, index) => (
          <CardFeedback key={index}>
            <p>
              {feedback.content} | {feedback.content} | {feedback.subtrail}
            </p>
            <DividerContent style={{width:'90%',margin:'10px'}}/>
            <p>{feedback.message}</p>
          </CardFeedback>
          ))
        }
        </MainFeedback>

      <MenuAdmin />
    </>
  )
}

export default FeedbackAdmin