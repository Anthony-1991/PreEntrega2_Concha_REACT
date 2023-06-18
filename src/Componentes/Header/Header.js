import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

import imagen from "./imagenfondo.jpg";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <img src={imagen} alt="banner" /* width={500}  */ />
      </Link>
    </div>
  );
};

export default Header;
