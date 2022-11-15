import styled from 'styled-components';

export const ButtonFooter = styled.button`
    background: transparent;
  border: none;
  display: flex;
  align-items: center;
  color: white;
  padding-bottom: 5px;
  border-bottom: ${props => props.active ? "3px solid white" : "none"};

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;

  img {
    margin-right: 6px;
  }

  @media (max-width: 576px) {
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 576px) and (max-width: 767.98px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    display: none;
  }

  @media (min-width: 991.99px) {
    display: none;
  }
`;
export const Navegation = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 25px;
  background-color: #8819D2;
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
  p{
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400px;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: white;
  }
  @media (max-width: 576px) {
    p{
      display: none;
    }
    
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 576px) and (max-width: 767.98px) {
    background-color: #001024;

  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    background-color: #001024;
  }

  @media (min-width: 991.99px) {
    background-color: #001024;
  }
`;

