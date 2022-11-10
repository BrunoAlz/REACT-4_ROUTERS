import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/About">Sobre</Link>
      <Link to="/products/:id">Produtos</Link>
    </nav>
  );
};

export default NavBar;
