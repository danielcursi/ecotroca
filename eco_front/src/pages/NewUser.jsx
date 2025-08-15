import Button from "../components/button/Button";
import svg from "../assets/Login-bro.svg";
import { useState } from "react";

export default function NewUser() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: cpf,
      username: name,
      phone: phone,
      email: email,
      password: password,
    };

    alert("Usuário cadastrado!");

    console.log({ newUser });
    setName("");
    setCpf("");
    setPhone("");
    setEmail("");
    setPassword("");
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
          <label>CPF:</label>
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Digite seu CPF"
            required
          />
          <label>Telefone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Digite seu telefone"
            required
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            required
          />
          <label>Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            required
          />
          <button className="button-register">Cadastre-se</button>
        </form>
      </div>
    </section>
  );
}
