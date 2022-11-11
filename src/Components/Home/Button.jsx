import styled from "styled-components";

export const Button = styled.button`
  background-color: ${props => props.background};
  border: none;
  color: ${props => props.color};
  
  @media (max-width: 576px) {
    font-weight: 700;
    font-size: 15px;
    line-height: 18.29px;
    border-radius: 30px;
    width: 156px;
    height: 40px;
  }

 @media (min-width: 576px) and (max-width: 767.98px) {
    font-weight: 700;
    font-size: 15px;
    line-height: 18.29px;
    border-radius: 30px;
    margin-bottom: 14px;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    font-weight: 700;
    font-size: 15px;
    line-height: 18.29px;
    border-radius: 30px;
    margin-bottom: 14px;
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 991.99px) {
    font-weight: 700;
    font-size: 15px;
    line-height: 18.29px;
    border-radius: 30px;
    margin-bottom: 14px;
  }
  
`;