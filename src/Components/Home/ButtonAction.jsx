import styled from "styled-components";

export const ButtonAction = styled.button`
  background-color: #00C19C;
  border: none;
  color: white;
  
  @media (max-width: 576px) {
    font-weight: 700;
    font-size: 15px;
    line-height: 18.29px;
    border-radius: 30px;
    margin-top: 30px;
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
