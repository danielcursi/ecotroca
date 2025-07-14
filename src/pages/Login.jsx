import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash, FaArrowLeft } from "react-icons/fa";
import logo from "../assets/logo.png";
import Button from "../components/button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [useType, setType] = useState("password");
  const [icon, setIcon] = useState(false);

  function voltarPagina() {
    navigate(-1);
  }

  const toggleType = () => {
    setType((tp) => (tp === "password" ? "text" : "password"));
    setIcon((teste) => !teste);
  };

  return (
    <section className="login">
      <h1>
        <img src={logo} alt="" style={{ width: "4rem" }} /> EcoTroca
      </h1>
      <p>Entre na sua conta</p>
      <button
        onClick={voltarPagina}
        className="button-arrow"
        style={{ marginBottom: "1rem" }}
      >
        <FaArrowLeft />
        Voltar
      </button>
      <form className="form-login">
        <section className="form-title">
          <h2>Bem-vindo de volta</h2>
          <p>Faça login para continuar trocando de forma sustentável</p>
        </section>
        <label>E-mail</label>
        <div className="login-input">
          <MdOutlineEmail className="search-icon" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="seu@email.com"
          />
        </div>
        <label>Senha</label>
        <div className="login-input">
          <TbLockPassword className="search-icon svgEye" />
          <input
            type={useType}
            name="password"
            id="password"
            placeholder="Digite sua senha"
          />
          <button type="button" className="password-eye" onClick={toggleType}>
            {icon ? <IoEyeOutline /> : <FaRegEyeSlash />}
          </button>
        </div>
        <button>Entrar</button>
        <p>Não tem uma conta?</p>
        <Button to={"/Login"} text={"Cadastre-se gratuitamente"} />
      </form>
    </section>
  );
}
