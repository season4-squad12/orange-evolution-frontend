import styled from "styled-components";

export const InputSelect = styled.div`
  position: relative;
  width: 327px;
  height: 60px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  select {
    width: 327px;
    height: 60px !important;
    appearance: none;
    background-color: transparent;
    border: none;
    padding-left: 20px;

    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
  }

  option {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
  }

  select:focus {
    outline: none;
    border: 2px solid #00c09d;
    border-radius: 10px;
  }  
  img {
    position: absolute;
    right: 20px;
  }
`;