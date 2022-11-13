import styled from "styled-components";

export const TypeContent = styled.p`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: white;
  background-color: #001024;
  display: inline-block;
  width: 60px;
  border-radius: 10px;
`
export const TitleContent = styled.p`
  font-size: 13px;
  font-family: 'Montserrat', sans-serif;
`
export const DividerInfos = styled.div`
  background-color: #001024;
  height: 1px;
  width: 160px;
  text-align: center;
`;

export const Author = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
`

export const ButtonForContent =styled.button`
  background-color: transparent;
  border: none;
`
export const IdCard = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 36px;
  font-weight: bold;
  color: #001024;
`
export const Evaluation = styled.p`
  font-weight: bold;
  color: #001024;
  font-size: 12;
`
export const DividerCircle = styled.div`
  background-color: #00C19C;
  height: 1px;
  width: 45px;
`;
export const InfosCard = styled.div`
  background-color: none;
  width: 180px;
  height: 134px;
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

`
export const CircleCard = styled.div`
  border: 5px solid #00C19C;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 96px;
  background-color: white;
  border-radius: 50px;
  margin-right: -10px;
  float: left;
  position: absolute;
`

export const CardTrailOne = styled.section`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-left: 24px;
  background-color: white;
  width: 304px;
  height: 150px;
  border: 5px solid #420C66;
  border-radius: 10px;
  padding-right: 5px;
 `;

export const CardCapsule = styled.section`
width: 328px;
margin-top: 10px;
margin-right: 10px;
display: flex;
align-items: center;
&:first-child{
  position: relative;

}
`
const MainCardTrails = styled.main`
  margin: 0px;
  border: 0px;
  background-color: white; 
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 10px;
  margin-top: 10px;
  width: 100%;
  padding-bottom: 80px;

`;



export default MainCardTrails;