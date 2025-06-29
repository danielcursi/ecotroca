import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import styles from "./style.module.css";
import logo from "../../assets/logo.png";
import Button from "../button/Button";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Ecotroca logo" className={styles.logo} />
        <h2>EcoTroca</h2>
      </div>

      <nav className={styles.nav}>
        <Link to="/">Inicio</Link>
        <Link to="/item">Adicionar item</Link>
        <Link to="/profile">Meu Perfil</Link>
      </nav>
      <Button to={"/Login"} text={"Entrar"} icon={faArrowRightToBracket} />
    </header>
  );
}
