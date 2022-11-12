import styled from "styled-components";

export const Main = styled.main`
  background: linear-gradient(55.27deg, #FA8ECF 0%, #F225C0 8%, #AA1CCC 32%, #8819D2 45%, #2E87AE 80%, #00C19C 100%);

  @media (max-width: 576px) {
    width: 100vw;
    height: 100vh;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 576px) and (max-width: 767.98px) {
       
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
     
  }

  @media (min-width: 991.99px) {
     
  }
  
`;

export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: white;
    margin-top: 47px;
    margin-bottom: 7px;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: white;
    margin-bottom: 43px;
  }
`;

export const Button = styled.button`
  position: absolute;
  bottom: 38px;
  right: 16px;
  background-color: #00c19c;
  color: white;
  border: none;
  border-radius: 20px;
  width: 156px;
  height: 40px;

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
`;