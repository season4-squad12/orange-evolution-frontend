import styled from "styled-components";

export const NavTop = styled.nav`
  display: none;
  background: none;
  padding-right: 20px;
  min-width: 134px;
  min-height: 35px;
  @media (min-width: 576.1px) {
    display: flex;
    align-items: center;
  }
`

export const ButtonMenuTop = styled.button`
  background: none;
  color: white;
  border: none;
  padding: 10px;
  font-size: 15px;
  font-weight: bold;
  transition: 0.1s;
  &:hover{
    color: #00C09B;
    cursor: pointer;
  }
`