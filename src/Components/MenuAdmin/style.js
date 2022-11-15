import styled from "styled-components";

export const Menu = styled.footer`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;

  bottom: 0;
  width: 100vw;
  height: 80px;
  background-color: #001024;
  min-width: 330px;

  p {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400px;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: white;
  }

  @media (max-width: 576px) {
    p {
      display: none;
    }
  }
`;

export const Button = styled.button`
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