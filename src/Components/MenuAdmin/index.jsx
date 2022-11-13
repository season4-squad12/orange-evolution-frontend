import React from "react";
import ImgDashboard from "../../images/dashboard.png";
import ImgSettings from "../../images/settings.png";
import { Menu, Button } from "./style";

const MenuAdmin = ({ props }) => {
    return (
    <Menu>
      <Button
        active={ window.location.pathname === "/dashboard" && true}
      >
        <img src={ImgDashboard} alt="icone dashboard" width="33" height="27"/>
        Dashboard
      </Button>
      <Button
         active={ window.location.pathname === "/admin" && true}
      >
        <img src={ ImgSettings } alt="iconde de settings" width="27px" height="27px" />
      </Button>
      <p>Orange Evolution - 2022</p>
    </Menu>
  );
};

export default MenuAdmin;