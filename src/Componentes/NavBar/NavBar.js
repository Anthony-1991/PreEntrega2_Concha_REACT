import "./NavBar.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

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
        <Link className="li" to="/carrito">
          <div className="carrito">
            <AddShoppingCartIcon /> <span>S/ 0.00</span>
          </div>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
