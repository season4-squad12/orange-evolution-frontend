import styled from "styled-components";



export const NameAndTrail = styled.section`
width: 200px;
text-align: center;
display: flex;
flex-direction: column;
align-items: flex-start;
background-color: white;
`
export const NumberContent = styled.p`
color: #00C19C;
font-size: 25px;
margin-top: 25px;
font-family: 'Montserrat';
font-weight: bold;
`
export const TrailContent = styled.p`
color: #001024;
font-family: 'Montserrat';
font-weight: bold;
`
export const NameContent = styled.p`
font-size: 13px;
text-align: left;
font-family: 'Montserrat';
margin-top: 15px;
`


export const TypeContent = styled.div`
display: flex;
gap: calc(5px);
width: 345px;
margin-top: 10px;
font-size: 13px;
font-family:'Montserrat', sans-serif;
align-self: flex-start;
`
export const MainContent = styled.main`
font-family: 'Montserrat';
margin-bottom: 100px;
margin-left: auto;
margin-right: auto;

@media (max-width: 576px) {
    width: 328px;
  }

 @media (min-width: 576px) and (max-width: 767.98px) {
   width: 576px;
  }

  @media screen and (min-width: 768px) and (max-width: 2000px) {
   max-width: 691px;
  }
`
export const ReturnMenuTrail = styled.button`
color: #001024;
font-size: 15px;
font-weight: bold;
font-family: 'Montserrat', sans-serif;
background:none;
border: none;
margin-top: 20px;
margin-left: 15px;
display: flex;
gap: calc(10px);
align-items: center;
`
export const TrailDescription = styled.div`
font-size: 12px;
margin-top: 20px;
display: flex;
flex-direction: column;
width: 345px;
gap: calc(8px);
font-family: 'Montserrat', sans-serif;
align-self: flex-start;
`
export const DividerContent = styled.div`
  background-color: #BABABA;
  height: 0.5px;
  width: 100%;
  text-align: center;
`;

export const CardDescription =styled.div`
width: 100%;
margin: auto;
margin-top: 35px;
align-self: flex-start;
display: flex;
flex-direction: column;
@media (max-width: 576px) {
  }

 @media (min-width: 576px) and (max-width: 767.98px) {
   
  }

  @media (min-width: 768px) and (max-width: 2000px) {
   flex-direction: row;
  }
`
export const DescriptionSpace =styled.p`
font-size: 13px;
font-weight: bold;
font-family: 'Montserrat';
margin-bottom: 10px;
`

export const Description = styled.p`
font-family: 'Montserrat';
`

export const DivButton = styled.a`
text-align: center;
display: flex;
justify-content: center;
width: 100%;
`
export const Ancor = styled.a`
width: 100%;

`


export const ButtonAccess = styled.button`
border: none;
border-radius: 50px;
width: 100%;
height: 47px;
background-color: #00856C;
color: #FFFFFF;
font-family: 'Montserrat';
font-weight: bold;
font-size: 15px;
margin-top: 20px;
@media screen and (min-width: 768px) and (max-width: 2000px) {
   width: 200px;
   height: 60px;
   align-self: flex-end;
   
  }
`

export const BoxDiscord = styled.div`
width: 100%;
height: 180px;
background-color: #DADADA;
margin: auto;
border-radius: 20px;
display: flex;
align-items: center;
justify-content: space-evenly;
margin-bottom: 20px;
margin-top: 20px;
`
export const DiscordTitle =styled.p`
font-size: 25px;
font-weight: bold;
color: #5C6BC0;

`
export const DiscorDescription = styled.p`
font-size: 15px;
font-weight: bold;
color: #001024;
`
export const DcTitleAndDescription = styled.div`
max-width: 60%;
`

export const OrangeJuiceDc =styled.p`
font-weight: bold;
color: #5C6BC0;
display: inline;
`
export const IconsDiscord = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30%;
`

export const TitleFeedBack = styled.p`
color: #001024;
font-size: 15px;
font-weight: bold;
`

export const TextFeedback = styled.textarea`
  width: 100%;
  height: 150px;
  background-color: #DADADA;
  font-family: 'Montserrat', sans-serif;
  border: #BABABA;
  padding:20px 20px 10px 10px;
`
export const ButtonFeedBack = styled.button`
width: 133px;
height: 24px;
border-radius: 50px;
border: none;
background-color: #001024;
color: #FFFFFF;
margin-left: 59%;
@media (min-width: 576px) and (max-width: 767.98px) {
   margin-left: 76.5%;
  }
@media screen and (min-width: 768px) and (max-width: 2000px) {
   margin-left: 80%;
  }
`

export const DivInfos = styled.div`
display: flex;
flex-direction: column;
`
export const CapsuleTypeContent = styled.div`
display: flex;
align-items: center;
gap: calc(40px);
`
export const CircleNumber = styled.div`
width: 96px;
height: 96px;
background-color: #001024;
color: #FFFFFF;
font-size: 36px;
font-weight: bold;
border-radius: 50px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
`