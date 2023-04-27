import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNav from "../Pages/Shared/HeaderNav";

const LoginLayout = () => {
  return (
    <div>
      <HeaderNav></HeaderNav>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayout;
