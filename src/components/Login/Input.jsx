import styled from "styled-components";

export const Input = styled.input`

  &::placeholder {
    color: #BABABA;
  }

  &:focus {
    outline: none;
  }
  background-color: white;
  border: none;
  color: #BABABA;
  border-bottom: 1px solid #BABABA;
  font-family: 'Montserrat', sans-serif;
  box-shadow: 0 0 0 30px white inset;


  
  @media (max-width: 576px) {
    font-size: 13px;
    font-style: normal;
    line-height: 15.85px;
    margin-bottom: 35px;
    width: 262px;
    height: 30px;

  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 576px) and (max-width: 767.98px) {
    font-size: 20px;
    font-style: normal;
    line-height: 18.85px;
    margin-bottom: 35px;
    width: 362px;
    height: 25px;    
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 20px;
    font-style: normal;
    line-height: 18.85px;
    margin-bottom: 35px;
    width: 362px;
    height: 25px;   
  }

  @media (min-width: 991.99px) {
    font-size: 20px;
    font-style: normal;
    line-height: 18.85px;
    margin-bottom: 35px;
    width: 362px;
    height: 25px;  
  }
`;
