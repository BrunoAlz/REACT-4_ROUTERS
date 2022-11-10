import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/About">Sobre</Link>
    </nav>
  );
};

export default NavBar;
