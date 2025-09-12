import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash, FaArrowLeft } from "react-icons/fa";
import logo from "../assets/Logo-colorida.png";
import Button from "../components/button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUsuario } from "../services/usuarioServico";

export default function Login() {
  const navigate = useNavigate();
  const [useType, setType] = useState("password");
  const [icon, setIcon] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUsuario({ email, senha: password });

      localStorage.setItem("tokenUser", response.token);
      localStorage.setItem("usuario", JSON.stringify(response.usuario));

      alert(`Bem-vindo, ${response.usuario.nome}!\nRedirecionando para o perfil...`);
      navigate("/profile");
    } catch (error) {
      alert("Usuário não encontrado ou credenciais inválidas!");
      console.error("Erro no login:", error);
      setEmail("");
      setPassword("");
    }
  };

  const toggleType = () => {
    setType((tp) => (tp === "password" ? "text" : "password"));
    setIcon((ic) => !ic);
  };

  return (
    <section className="login">
      <h1>
        <img src={logo} alt="" style={{ width: "4rem" }} /> EcoTroca
      </h1>
      <form onSubmit={handleSubmit} className="form-login">
        <section className="form-title">
          <h2>Bem-vindo</h2>
          <p>Faça login para continuar trocando de forma sustentável</p>
        </section>

        <label>E-mail</label>
        <div className="login-input">
          <MdOutlineEmail className="search-icon" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="seu@email.com"
          />
        </div>

        <label>Senha</label>
        <div className="login-input">
          <TbLockPassword className="search-icon svgEye" />
          <input
            type={useType}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Digite sua senha"
          />
          <button type="button" className="password-eye" onClick={toggleType}>
            {icon ? <IoEyeOutline /> : <FaRegEyeSlash />}
          </button>
        </div>

        <button className="btn-login">Entrar</button>
        <p style={{ color: "#788594" }}>Não tem uma conta?</p>
        <Button to="/newUser" text="Cadastre-se gratuitamente" />
      </form>

      <button onClick={() => navigate(-1)} className="button-arrow" style={{ marginBottom: "1rem" }}>
        <FaArrowLeft /> Voltar
      </button>
    </section>
  );
}
