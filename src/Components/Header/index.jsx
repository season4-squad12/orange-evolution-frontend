import Logo from '../../images/logo-orange-evolution-horizontal.png';
import { Image } from "../../styles/Image";
import { HeaderApp } from "./style";

export const Header = () => {
  return (
    <HeaderApp>
      <Image src={Logo} alt="logo da aplicação" width="155px" height="61px" marginLeft="15px" />
    </HeaderApp>
  );
};