import "./styles.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        <Link className="li" to="/">
          Home
        </Link>
        <Link className="li" to="/about">
          About
        </Link>
        <Link className="li" to="/contact">
          Contact
        </Link>
        <Link className="li" to="/category/jewelery">
          Jewelery
        </Link>
        <Link className="li" to="/category/electronics">
          Electronics
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
