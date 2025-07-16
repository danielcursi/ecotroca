import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash, FaArrowLeft } from "react-icons/fa";
import logo from "../assets/logo-transparente.png";
import Button from "../components/button/Button";
import data from "../components/database.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [useType, setType] = useState("password");
  const [icon, setIcon] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const allUsers = data.users;
    const foundUser = allUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      // Se um usuário foi encontrado
      alert(`Bem-vindo, ${foundUser.email}!\nRedirecionando para o perfil...`);
      navigate("/profile");
    } else {
      alert("Usuário não encontrado ou credenciais inválidas!");
      setEmail("");
      setPassword("");
    }
  };

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
      <form onSubmit={handleSubmit} className="form-login">
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="button" className="password-eye" onClick={toggleType}>
            {icon ? <IoEyeOutline /> : <FaRegEyeSlash />}
          </button>
        </div>
        <button className="btn-login">Entrar</button>
        <p style={{ color: "#788594" }}>Não tem uma conta?</p>
        <Button to={"/newUser"} text={"Cadastre-se gratuitamente"} />
      </form>
      <button
        onClick={voltarPagina}
        className="button-arrow"
        style={{ marginBottom: "1rem" }}
      >
        <FaArrowLeft />
        Voltar
      </button>
    </section>
  );
}
