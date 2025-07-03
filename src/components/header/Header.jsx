import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/logo.png";
import Button from "../button/Button";

export default function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <div className="logoContainer">
        <img src={logo} alt="Ecotroca logo" className="logo" />
        <h2>EcoTroca</h2>
      </div>

      <nav ref={navRef}>
        <Link to="/">Inicio</Link>
        <Link to="/item">Produtos</Link>
        <Link to="/profile">Meu Perfil</Link>
        <span>
          <Button to={"/Login"} text={"Entrar"} icon={faArrowRightToBracket} />
        </span>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
