import styled from 'styled-components';

export const Modal = styled.div`
    animation: openModal 0.1s;
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: none;
    align-items: center;
    justify-content: center;
    background-color: white;
    z-index: 10;
    top: 0;
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(1px);
    overflow: hidden;
    
    @keyframes openModal {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes closeModal {
      0% { opacity: 1; }
      100% { opacity: 0;}
    }

    ${({ open }) => open ? `display: flex `: `animation: closeModal 1s` }
`;

export const ModalContainer = styled.section`
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  width: 328px;
  padding: 10px;
`;

export const ModalHeader = styled.div`
  display:flex;
  justify-content: space-between;

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
  }

  button {
    background: transparent;
    border: none;
  }
`;

export const DivMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 103px;
  height: 25px;
  color: ${props=>props.color};;
  background-color: ${props=>props.bgcolor};
  border-radius: 20px;
  border: 1px solid ${props=>props.color};
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 10px;
  margin-bottom: 10px;

  font-family: 'Montserrat', sans-serif;
  font-family: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
`;
export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const Label = styled.label`
  width: 100%;
  color: #767676;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: ${({wd}) => wd ? wd : '286px'};
  height: 30px;
  border: 0.5px solid #9A9A9A; 
  border-radius: 5px;
  background: #fff;
  color: #9A9A9A;
  margin-bottom: 15px;
  font-family: 'Montserrat', sans-serif;
  padding-left: 9px;

  &:hover {
    border: 1px solid #9A9A9A;
  }
  &:focus {
    outline: 1px solid #9A9A9A;
  }
`;

export const TextArea = styled.textarea`
  width: 286px;
  height: 60px;
  color: #9a9a9a;
  background: #fff;
  border: 0.5px solid #9A9A9A;
  border-radius: 5px;

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  padding-left: 9px;
`;

export const SelectForm = styled.div`
  position: relative;
  width: ${props=> props.wd ? props.wd : '287px'};
  height: 30px !important;
  background-color: white;
  border-radius: 5px !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  select {
    width: ${props=> props.wd ? props.wd : '287px'};
    height: 30px !important;
    appearance: none;
    background-color: transparent;
    border: 0.5px solid #9A9A9A;
    border-radius: 5px;
    color: #9a9a9a;

    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    padding-left: 9px;
  }

  option {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #9a9a9a;
  }

  select:focus {
    outline: none;
    border: 1px solid #9a9a9a;;
    border-radius: 5px;
  }  
  img {
    position: absolute;
    width: 15px;
    height: 12px;
    right: 20px;
  }
`;

export const DivDuoSelect = styled.div`
  display: flex;
`;


export const Button = styled.button`
  width: 90px;
  height: 40px;
  background: ${props => props.bgColor};
  border: none;
  border-radius: 10px;
  margin: ${props => props.margin};

  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: white;
`;

export const ModalFooter = styled.div`
  margin-bottom: -15px;
  background: #420C66;
  border-radius:  0px 0px 20px 20px;
  width: 328px;
  height: 64px;
  margin: -10px;
  margin-bottom: -25px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: ${({positionButton}) => positionButton};
`;