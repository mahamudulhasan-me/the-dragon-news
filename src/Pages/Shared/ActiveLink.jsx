import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "activeLink"
          : "text-decoration-none text-secondary text-center mx-3"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
