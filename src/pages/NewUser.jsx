import Button from "../components/button/Button";

export default function NewUser() {
  return (
    <section className="register-user">
      <form>
        <h1>Crie seu cadastro</h1>
        <label>Nome:</label>
        <input type="text" />
        <label>CPF:</label>
        <input type="text" />
        <label>Telefone:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" name="email" id="email" />
        <label>Senha</label>
        <input type="password" name="password" id="password" />
        <Button to={"/"} text={"Cadastre-se"} />
      </form>
    </section>
  );
}
