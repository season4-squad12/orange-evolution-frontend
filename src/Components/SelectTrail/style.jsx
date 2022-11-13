import styled from "styled-components";

export const Main = styled.main`
  background: linear-gradient(55.27deg, #FA8ECF 0%, #F225C0 8%, #AA1CCC 32%, #8819D2 45%, #2E87AE 80%, #00C19C 100%);
  width: 100vw;
  height: 100vh;  
`;

export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;

  h1 {
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    color: white;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    color: white;
  }

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      margin-top: 47px;
      margin-bottom: 7px;
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      margin-bottom: 43px;
    }
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 576px) and (max-width: 767.98px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      margin-top: 47px;
      margin-bottom: 10px;
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      margin-bottom: 50px;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-top: 101px;
    }

    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 37px;
      margin-top: 47px;
      margin-bottom: 20px;
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      margin-bottom: 25px;
    }
  }

  @media (min-width: 991.99px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 37px;
      margin-top: 139px;
      margin-bottom: 20px;
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      margin-bottom: 25px;
    }
  }
`;

export const Button = styled.button`
  background-color: #00c19c;
  color: white;
  border: none;
  border-radius: 20px;

  font-family: 'Montserrat', sans-serif;
  text-align: center;


  @media (max-width: 576px) {
    position: absolute;
    bottom: 38px;
    right: 16px;
    width: 156px;
    height: 40px;

    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 576px) and (max-width: 767.98px) {
    bottom: 38px;
    right: 16px;
    width: 156px;
    height: 40px;
    margin-top: 20px;

    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    bottom: 38px;
    right: 16px;
    width: 156px;
    height: 40px;
    margin-top: 101px;

    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    
  }

  @media (min-width: 991.99px) {
    bottom: 38px;
    right: 16px;
    width: 156px;
    height: 40px;
    margin-top: 40px;

    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
  }
`;