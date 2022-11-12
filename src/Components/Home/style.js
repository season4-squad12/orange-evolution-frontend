import styled from "styled-components";
import StakeholderLg from '../../images/fundo-stakeholder-lg.png';
import Stakeholder from '../../images/fundo-stakeholder.png';

export const Button = styled.button`
  background-color: ${props => props.background};
  border: none;
  color: ${props => props.color};
  
  @media (max-width: 576px) {
    font-weight: 700;
    font-size: 15px;
    line-height: 18.29px;
    border-radius: 30px;
    width: 156px;
    height: 40px;
  }

 @media (min-width: 576px) and (max-width: 767.98px) {
    font-weight: 700;
    font-size: 15px;
    line-height: 18.29px;
    border-radius: 30px;
    width: 236px;
    height: 40px;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    font-weight: 700;
    font-size: 15px;
    line-height: 18.29px;
    border-radius: 30px;
    width: 236px;
    height: 40px;
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 991.99px) {
    font-weight: 700;
    font-size: 15px;
    line-height: 18.29px;
    border-radius: 30px;
    width: 236px;
    height: 40px;
  }
`;
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
    width: 241px;
    height: 30px;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    font-weight: 700;
    font-size: 18px;
    line-height: 18.29px;
    border-radius: 30px;
    margin-top: 25px;
    margin-bottom: 14px;
    width: 261px;
    height: 35px;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    font-weight: 700;
    font-size: 15px;
    line-height: 18.29px;
    border-radius: 30px;
    margin-top: 25px;
    margin-bottom: 14px;
    width: 261px;
    height: 35px;
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 991.99px) {
    font-weight: 700;
    font-size: 15px;
    line-height: 18.29px;
    border-radius: 30px;
    margin-top: 25px;
    margin-bottom: 14px;
    width: 261px;
    height: 45px;
  }
  
`;

export const Footer = styled.footer`
    align-items: center;
    justify-content: space-around;
    background-color: #001024;
    display: flex;
    height: 80px;
    bottom: 0;
    position: fixed;
    width: 100%;
`;

export const Main = styled.main`
  display:  flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 89px;

  h3 {
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-style:  regular;
    font-size: 13px;
    line-height: 16px;
    margin-top: 25px;
    margin-bottom: 25px;
  }
`;

export const Banner = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-size: cover;
  background-blend-mode: darken;

  h1 {
    color: #00C09B;
  }

  h2 {
    color: white;
  }

  p {
    color: white;
  }

  @media (max-width: 576px) {
    height: 317px;
    padding: 30px 16px;
    background: rgba(0, 16, 36, .6) url(${Stakeholder});
    h1 {
    width: 242px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24.38px;
    margin-bottom: 3px;
    }

    h2 {
      width: 242px;
      font-weight: 700;
      font-size: 15px;
      line-height: 18.29px;
      margin-bottom: 15px;
    }

    p {
      font-weight: 400;
      font-size: 13px;
      line-height: 15.85px;
      text-align: left;
    }
  }

 @media (min-width: 576px) and (max-width: 767.98px) {
    height: 317px;
    padding: 30px 16px;
    background: rgba(0, 16, 36, .6) url(${Stakeholder});
    h1 {
      width: 342px;
      font-weight: 700;
      font-size: 25px;
      line-height: 24.38px;
      margin-bottom: 10px;
    }

    h2 {
      width: 342px;
      font-weight: 700;
      font-size: 18px;
      line-height: 18.29px;
      margin-bottom: 15px;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 15.85px;
      text-align: left;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    background: rgba(0, 16, 36, .6) url(${StakeholderLg});
    height: 317px;
    padding: 30px 16px;
    h1 {
      width: 362px;
      font-weight: 700;
      font-size: 27px;
      line-height: 24.38px;
      margin-bottom: 15px;
    }

    h2 {
      width: 372px;
      font-weight: 700;
      font-size: 18px;
      line-height: 22.29px;
      margin-bottom: 15px;
    }

    p {
      font-weight: 400;
      font-size: 17px;
      line-height: 19.85px;
      text-align: left;
    }
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 991.99px) {
    background: rgba(0, 16, 36, .6) url(${StakeholderLg});
    height: 317px;
    padding: 30px 16px;
    text-align: center;
    justify-content: center;
    align-items: center;
    h1 {
      width: 450px;
      font-weight: 700;
      font-size: 27px;
      line-height: 24.38px;
      margin-bottom: 15px;
    }

    h2 {
      width: 450px;
      font-weight: 700;
      font-size: 18px;
      line-height: 22.29px;
      margin-bottom: 15px;
    }

    p {
      width: 450px;
      font-weight: 400;
      font-size: 17px;
      line-height: 19.85px;
      text-align: center;
    }
  }
`;

export const CardList = styled.div`
  width: 100vw;
  display: flex;

  @media (max-width: 576px) {  
    flex-direction: column;
    align-items: center;
  }

 @media (min-width: 576px) and (max-width: 767.98px) {
    flex-direction: column;
    align-items: center;

  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    flex-direction: column;
    align-items: center;
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 991.99px) {
    justify-content: space-around;
  }
`;