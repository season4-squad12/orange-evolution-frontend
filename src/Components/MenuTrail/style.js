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
  width: 100%;
  text-align: center;
`;

export const Author = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
`

export const ButtonForContent = styled.button`
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
  width: 80%;//180px
  height: 134px;
  margin-right: 5px;
  margin-left: 100px;
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
  justify-content: center;
  margin-left: 24px;
  background-color: white;
  width: 100%;
  height: 150px;
  border: 5px solid #420C66;
  border-radius: 10px;
  padding-right: 5px;
 `;

export const CardCapsule = styled.section`
margin-top: 10px;
margin-right: 10px;
display: flex;
align-items: center;
&:first-child{
  position: relative;

  @media (max-width: 576px) {
    width: 328px;
  }

 @media (min-width: 576px) and (max-width: 767.98px) {
   width: 576px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
   width: 768px;
  }
}
`
const MainCardTrails = styled.section`
  margin: 0px;
  border: 0px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 10px;
  width: 360px;
  margin-top: 10px;
  max-width: 800px;
  padding-bottom: 80px;
  margin: 0px auto;
  @media (max-width: 576px) {
    width: 328px;
  }

 @media (min-width: 576px) and (max-width: 767.98px) {
   width: 576px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
   width: 768px;
  }

`

export const DivFilters = styled.div`
 margin-top: 50px;
 margin-bottom: 50px;
 select{
  border: 2px solid #001024 !important;
  border-radius: 10px;
 }
`



export default MainCardTrails;