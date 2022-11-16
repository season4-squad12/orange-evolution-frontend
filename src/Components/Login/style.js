import styled from "styled-components";

export const Main = styled.main`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Card = styled.div`
    display: flex ;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 576px) {
        height: 100vh;
        width: 100vw;
    }
  
    // Medium devices (tablets, 768px and up)
    @media (min-width: 576px) and (max-width: 767.98px){
        width: 100vw;
        height: 100vh;
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 768px) and (max-width: 991.98px) {
        width: 600px;
        height: 600px;
    }

    // X-Large devices (large desktops, 1200px and up)
    @media (min-width: 991.99px) {
        width: 600px;
        height: 500px;
    }
`;

export const Input = styled.input`
   &:focus {
    color: #5c5c5c;
    outline: none;
    opacity: 1;
  }
  &:active {
    color: #5c5c5c;
  }

  color: #5c5c5c;;
  background: transparent;
  border: none;
  border-bottom: 1px solid #BABABA;
  font-family: 'Montserrat', sans-serif;

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
export const Button = styled.button`
  background-color: #00856C;
  border: none;
  color: white;
  
  @media (max-width: 576px) {
    font-weight: 700;
    font-size: 15px;
    line-height: 18.29px;
    border-radius: 30px;
    margin-bottom: 14px;
    width: ${props => props.width};
    height: ${props => props.height};
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    font-weight: 700;
    font-size: 15px;
    line-height: 18.29px;
    border-radius: 30px;
    margin-bottom: 14px;
    width: ${props => props.width};
    height: ${props => props.height};
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    font-weight: 700;
    font-size: 15px;
    line-height: 18.29px;
    border-radius: 30px;
    margin-bottom: 14px;
    width: ${props => props.width};
    height: ${props => props.height};
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 991.99px) {
    font-weight: 700;
    font-size: 15px;
    line-height: 18.29px;
    border-radius: 30px;
    margin-bottom: 14px;
    width: ${props => props.width};
    height: ${props => props.height};
  }
  
`;

export const ButtonFooter = styled.button`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 15.85px;
    background: white;
    border: none;
    color: #5c5c5c;
`;

export const CardForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;