import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      {/* 
      <Link to="/">Home</Link>
      <Link to="/About">Sobre</Link>
      <Link to="/products/:id">Produtos</Link> 
      */}

      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">Sobre</NavLink>
      <NavLink to="/products/:id">Produtos</NavLink> 

    </nav>
  );
};

export default NavBar;
