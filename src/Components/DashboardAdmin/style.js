import styled from "styled-components";

export const Main = styled.main`
  display:  flex;
  flex-direction: column;
  width: 100wh;

`;

export const DivPerfil = styled.div`
  display: flex;
  align-items: center;
  height: 130px;

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    margin-left: 23px;
  }

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    margin-left: 23px;
  }

  @media (max-width: 576px) {
    
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 576px) and (max-width: 767.98px) {
    justify-content: center;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    justify-content: center;
  }

  @media (min-width: 991.99px) {
    justify-content: center;
  }
`;

export const ImagePerfil = styled.img`
  width: 74px;
  height: 74px;
  margin-left: 16px;
  border: 4px solid #00c09b;
  border-radius: 48.5px;
`;

export const Dashboard = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #001024;
  // height: 385px;

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: white;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  h3 {
    font-style: normal;
    font-weight: 7000;
    font-size: 15px;
    line-height: 18px;
    color: white;
    font-family: 'Montserrat', sans-serif;
    margin-top: 25px;
    margin-bottom: 10px;
    text-align: left;
    width: 80%;
  }

  @media (max-width: 576px) {
    height: 400px;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 576px) and (max-width: 767.98px) {
    height: 400px;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 692px;
    padding-bottom: 20px;
    border-radius: 20px;
    margin: auto
  }

  @media (min-width: 991.99px) {
    width: 800px;
    padding-bottom: 30px;
    border-radius: 20px;
    margin: auto
  }
`;

export const DivCarrosel = styled.div`
  display: grid;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 15px;

  @media (max-width: 576px) {
    grid-template-columns: auto auto;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    grid-template-columns: auto auto;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
      grid-template-columns: auto auto;
  }

  @media (min-width: 991.99px) {
    grid-template-columns: auto auto;
  }
`;

export const CardDetails = styled.div`
  display: flex;
  align-items: center;
  width: 145px;
  height: 65px;
  border-radius: 15px;
  background-color: ${props => props.color};
  color: ${props => props.textColor};
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 5px;

  h4 {
    width: 58px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 37px;
    text-align: right;
    margin-right: 7px;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    width: 99px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
  }
`;

export const Progress = styled.div`
  position: relative;
  width: 328px;
  height: 26px;
  background-color: #9A9A9A;
  border-radius: 10px;
  display: flex;
  align-items: center;

  div {
    width: 106px;
    height: 26px;
    position: absolute;
    background-color: #00C19C;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: end;

    p {
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
      color: white;
    }
  }
`;

export const DivProgress = styled.div`
  
`;

export const DivStudent = styled.div`
  h2 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #001024;
    margin-top: 40px;
    margin-left: 17px;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 700px;
    margin: auto;
    margin-bottom: 50px;
  }

  @media (min-width: 991.99px) {
    width: 800px;
    margin: auto;
    margin-bottom: 10px;
  }
`;

export const DivFeedBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #001024;
    margin-top: 40px;
    margin-left: 17px;
    margin-bottom: 20px;
    align-self: start;
  }

  div {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 35px;
    border-bottom: 0.5px solid #001024;

    h5 {
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 16px;
    }
  }

  @media (max-width: 576px) {
    
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 576px) and (max-width: 767.98px) {
    
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 700px;
    margin: auto;
    margin-bottom: 50px;
  }

  @media (min-width: 991.99px) {
    width: 800px;
    margin: auto;
    margin-bottom: 50px;
  }
`;

export const Button = styled.div`
  background-color: #801365;
  border: none;
  color: white;
  width: 327px;
  height: 41px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-bottom: 120px;

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  
  @media (max-width: 576px) {
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 991.99px) {
    
  }
`;