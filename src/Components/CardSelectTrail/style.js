import styled from "styled-components";

export const Card = styled.div`
  border: ${props => props.selected ? '2px solid #00c19c' : 'none'};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #001024;
  border-radius: 20px;
  width: 255px;
  height: 110px;
  

  h3 {
    font-family: 'Montserrat', sans-serif;
    text-align: center;
  }

  @media (max-width: 576px) {
    margin-bottom: 17px;

    h3 {
      width: 122px;
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
    }
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 576px) and (max-width: 767.98px) {
    margin-bottom: 50px;

    h3 {
      width: 122px;
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    // margin-bottom: 17px;
    width: 255px !important;

    h3 {
      width: 122px;
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
    }
  }

  @media (min-width: 991.99px) {
    margin-bottom: 17px;

    h3 {
      width: 122px;
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
    }
  }
`;
