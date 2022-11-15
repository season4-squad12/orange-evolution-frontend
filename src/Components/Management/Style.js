import styled from "styled-components";

export const MainManagement = styled.main`
padding-bottom: 80px;
font-family: 'Montserrat';
font-size: 15px;
background-color: orange;
width: 100vw;
height: 100vh;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;

@media (max-width: 576px) {
  width: 328px;
  }

 @media (min-width: 576px) and (max-width: 767.98px) {
   width: 422px;
  }

  @media (min-width: 767.99px){
    width: 524px;
  }
`
export const ButtonAdd = styled.button`
 background-color: #00856C;
 width: 100%;
 height: 60px;
 border: none;
 border-radius: 10px;
 margin-bottom: 10px;

 @media (min-width: 768px) {
   width: 344px;
  }

 &:hover{
  cursor: pointer;
 }
`

export const Panel = styled.div`
  width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;

 button{
  background: none;
  border: none;
  font-family: 'Montserrat';
  font-size: 15px;
  font-weight: bold;
 }
 button:hover{
  cursor: pointer;
 }
`

// botão padrão para opção editar
  export const ButtonEdit = styled.button`
  background: none;
  border: none;
  &:hover{
    cursor: pointer;
  }
`

// Card para edição de Trilha
export const CardTrail = styled.div`
  padding: 10px;
  width: 100%;
  height: 60px;
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 0 4px #BABABA;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

//Campo para edição de módulo
export const CardModule = styled.div`
  width: 100%;
  height: 116px;
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 0 4px #BABABA;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const SubtrailAndEdit = styled.div`
  padding: 0px 10px 20px 10px;
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p{
    font-weight: bold;
  }
`
export const NameTrail = styled.div`
  padding: 0 10px;
  width: 100%;
  background-color: #FFFFFF;
  color: #767676;
  border-radius: 8px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
 
`