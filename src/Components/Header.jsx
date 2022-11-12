import styled from "styled-components";
import Logo from '../images/logo-orange-evolution-horizontal.png';
import { Image } from "./Image";

const HeaderStyle = styled.header`
  align-items: center;
  background-color: #001024;
  display: fixed;
  bottom: 0;
  height: 80px;
  width: 100vw;

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 991.99px) {
  }
`;

export const Header = () => {
  return (
    <HeaderStyle>
      <Image src={Logo} alt="logo da aplicação" width="155px" height="61px" marginLeft="15px" />
    </HeaderStyle>
  );
};