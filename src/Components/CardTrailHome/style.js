import styled from "styled-components";

export const Card = styled.div`
  width: 328px;
  height: ${props => props.drop ? '216px' : '156px' };
  border: 3px solid ${props => props.borderColor};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 25px;

  h1 {
    font-size: 15px;
    line-height: 18.19px;
    margin-bottom: 7px;
  }
  
  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    font-weight: 400px;
    line-height: 15.85px;
  }
`;

export const Divider = styled.div`
  background-color: #000;
  height: 1px;
  margin-top: 14px;
  margin-bottom: 12px;
`;

export const Div = styled.div`
  height: 16px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 7px;
`;

export const Divdrop = styled.div`
  background-color: 'red';
  display: ${props => props.drop ? 'block' : 'none'};
  animation: 0.5s fadeDiv;

  @keyframes fadeDiv {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;