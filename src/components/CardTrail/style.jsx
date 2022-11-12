import styled from "styled-components";

export const CircleCard = styled.div`
  &:last-child{
    position:relative;
    margin-left: -30px;
  }
  width: 96px;
  height: 96px;
  background-color: orange;
  border-radius: 50px;
  margin-top: 20px;
  margin-right: -10px;
  float: 0px;
  position: relative;
`

export const CardTrailOne = styled.section`
  margin-left: 24px;
  background-color: green;
  width: 304px;
  height: 150px;
  border: 5px solid #420C66;
  border-radius: 10px;
  &:first-child{
    position:relative;
  }
 
 `;
 
export const CardCapsule = styled.section`
width: 328px;
`
const MainCardTrails = styled.main`
  background-color: #14e9f0; 
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



export default MainCardTrails;