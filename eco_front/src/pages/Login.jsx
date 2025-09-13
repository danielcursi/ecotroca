import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash, FaArrowLeft } from "react-icons/fa";
import logo from "../assets/Logo-colorida.png";
import Button from "../components/button/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUsuario } from "../services/usuarioServico";

export default function Login() {
  const navigate = useNavigate();
  const [useType, setType] = useState("password");
  const [icon, setIcon] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [saudacao, setSaudacao] = useState("");
  const [frase, setFrase] = useState("");

  useEffect(() => {
    const hora = new Date().getHours();
    if (hora < 12) setSaudacao("Bom dia");
    else if (hora < 18) setSaudacao("Boa tarde");
    else setSaudacao("Boa noite");

    const frases = [
      "Cada troca é um passo para um mundo melhor.",
      "Reutilizar é revolucionar.",
      "Consumo consciente começa aqui.",
    ];
    setFrase(frases[Math.floor(Math.random() * frases.length)]);
  }, []);

  const toggleType = () => {
    setType((tp) => (tp === "password" ? "text" : "password"));
    setIcon((ic) => !ic);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Formato de e-mail inválido.");
      return;
    }

    setLoading(true);
    try {
      const response = await loginUsuario({ email, senha: password });

      localStorage.setItem("tokenUser", response.token);
      localStorage.setItem("usuario", JSON.stringify(response.usuario));

      alert(`Bem-vindo, ${response.usuario.nome}!\nRedirecionando para o perfil...`);
      navigate("/profile");
    } catch (err) {
      setError("Usuário não encontrado ou credenciais inválidas.");
      console.error("Erro no login:", err);
      setEmail("");
      setPassword("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login">
      <h1>
        <img src={logo} alt="Logo EcoTroca" style={{ width: "4rem" }} /> EcoTroca
      </h1>

      <form onSubmit={handleSubmit} className="form-login">
        <section className="form-title">
          <h2>{saudacao}, bem-vindo!</h2>
          <p>Faça login para continuar trocando de forma sustentável</p>
          <p className="frase-sustentavel">{frase}</p>
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

        {error && <span className="error-message">{error}</span>}

        <button className="btn-login" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>

        <p style={{ color: "#788594" }}>Não tem uma conta?</p>
        <Button to="/newUser" text="Cadastre-se gratuitamente" />

        <p className="forgot-password" onClick={() => navigate("/AlterarSenha")}>
          Esqueceu sua senha?
        </p>
      </form>

      <button onClick={() => navigate(-1)} className="button-arrow" style={{ marginBottom: "1rem" }}>
        <FaArrowLeft /> Voltar
      </button>
    </section>
  );
}
