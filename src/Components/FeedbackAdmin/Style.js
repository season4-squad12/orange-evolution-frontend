import styled from "styled-components";

export const MainFeedback = styled.main`
padding: 20px 0px 90px 0px;
padding-bottom: 80px;
font-family: 'Montserrat';
font-size: 15px;
width: 100vw;
height: 100vh;
margin: 0px auto 20px auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

@media (max-width: 576px) {
  width: 328px;
  }

 @media (min-width: 576px) and (max-width: 767.98px) {
   width: 422px;
  }

  @media (min-width: 767.99px){
    width: 524px;
  }

`

export const CardFeedback = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  min-height: 132px;
  background-color:#FFFFFF ;
  border: 0.5px solid #9A9A9A;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`