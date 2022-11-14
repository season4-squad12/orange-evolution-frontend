import styled from "styled-components";

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