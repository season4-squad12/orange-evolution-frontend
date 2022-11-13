import styled from "styled-components";

export const HeaderApp = styled.header`
  align-items: center;
  background-color: #001024;
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100vw;

  
  @media (min-width: 768px) and (max-width: 991.98px) {
    img {
        margin-left: 122px;
    }
  }

  @media (min-width: 991.99px) {
    img {
      margin-left: 150px;
    }
  }

  div {
    top: 33px;
    right: 80px;
    display: flex;
    align-self: center;
  
    button {
      width: 100%;
      background: transparent;
      border: none;
      color: ${props => props.active ? "#00C09D" : "white"};
      padding: 10px;
      margin-right: 25px;
      color: #00c09d;
      border-bottom: ${props => props.active ? "3px solid white" : "none"};

      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
    }

    @media (max-width: 576px) {
      display: none;
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 576px) and (max-width: 767.98px) {
      margin-right: 16px;
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
      margin-right: 122px;
    }

    @media (min-width: 991.99px) {
     margin-right: 150px;
    }
  }
`;
