import Button from "../components/button/Button";
import svg from "../assets/Login-bro.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cadastrarUsuario } from "../services/usuarioServico";

export default function NewUser() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      nome: name,
      telefone: phone,
      email: email,
      senha: password,
      cidade,
      bairro
    };

    try {
      await cadastrarUsuario(newUser); // envia para o backend
      alert("Usuário cadastrado com sucesso!");
      
      // limpa campos
      setName("");
      setPhone("");
      setEmail("");
      setPassword("");
      setCidade("");
      setBairro("");

      navigate("/login");
    } catch (error) {
      alert("Erro ao cadastrar usuário. Verifique os dados e tente novamente.");
      console.error("Erro no cadastro:", error);
    }
  };

  return (
    <section className="register-user">
      <div className="image-register">
        <img src={svg} alt="imagem" />
      </div>
      <div className="form-register">
        <form onSubmit={handleSubmit} className="form">
          <h1>Crie seu cadastro</h1>

          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Digite seu nome"
          />

          <label>Telefone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="Digite seu telefone"
          />

          <label>Cidade:</label>
          <input
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            required
            placeholder="Digite sua cidade"
          />

          <label>Bairro:</label>
          <input
            type="text"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            required
            placeholder="Digite seu bairro"
          />

          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Digite seu email"
          />

          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Digite sua senha"
          />

          <button type="submit" className="button-register">Cadastre-se</button>
          <button type="button" className="button-register" onClick={() => navigate(-1)}>Voltar</button>
        </form>
      </div>
    </section>
  );
}
