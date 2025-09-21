import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import logo from "../../assets/Logo-colorida.png";
import Button from "../button/Button";
import { useAuth } from "../../contexts/AuthContext";

export default function Header() {
  const navRef = useRef();
  const { user, logout } = useAuth(); // pega o usuário logado e logout

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div className="logoContainer">
        <Link to="/" className="noStyleLink">
          <img src={logo} alt="Ecotroca logo" className="logo" />
          <h2>EcoTroca</h2>
        </Link>
      </div>

      <nav ref={navRef}>
        <Link to="/">Inicio</Link>
        <Link to="/item">Produtos</Link>

        {user ? (
          <>
            
            <Link to="/profile">Meu Perfil</Link>
            <button className="btn-logout" onClick={logout}>
              Sair
            </button>
          </>
        ) : (
          <span>
            <Button to={"/Login"} text={"Entrar"} icon={faArrowRightToBracket} />
          </span>
        )}

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
