import { useState } from "react";
import { resetarSenha } from "../services/usuarioServico";
import { useNavigate } from "react-router-dom";

// Componente principal para redefinição de senha
export default function RedefinirSenha() {
  // Estados para armazenar os dados do formulário
  const [email, setEmail] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // Estados para mensagens de erro e sucesso
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  // Hook para navegação entre páginas
  const navigate = useNavigate();

  // Função que trata o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário
    setErro("");        // Limpa mensagens anteriores
    setSucesso("");

    // Validação: campo de email obrigatório
    if (!email) {
      setErro("Digite seu email.");
      return;
    }

    // Validação: senha deve ter no mínimo 6 caracteres
    if (novaSenha.length < 6) {
      setErro("A nova senha deve ter pelo menos 6 caracteres.");
      return;
    }

    // Validação: senhas devem coincidir
    if (novaSenha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    // Chamada ao serviço de redefinição de senha
    try {
      await resetarSenha({ email, novaSenha });

      // Exibe mensagem de sucesso e limpa os campos
      setSucesso("Senha redefinida com sucesso!");
      setEmail("");
      setNovaSenha("");
      setConfirmarSenha("");

      // Redireciona para a página de login após 2 segundos
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      // Exibe mensagem de erro vinda da API ou genérica
      setErro(err.response?.data?.error || "Erro ao redefinir senha. Verifique os dados.");
      console.error(err); // Log para depuração
    }
  };

  // JSX do componente
  return (
    <section className="alterar-senha">
      <h2>Redefinir Senha</h2>

      <form onSubmit={handleSubmit} className="form-login">
        {/* Campo de email */}
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Digite seu email"
        />

        {/* Campo de nova senha */}
        <label>Nova senha</label>
        <input
          type="password"
          value={novaSenha}
          onChange={(e) => setNovaSenha(e.target.value)}
          required
          placeholder="Digite a nova senha"
        />

        {/* Campo de confirmação de senha */}
        <label>Confirmar nova senha</label>
        <input
          type="password"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          required
          placeholder="Confirme a nova senha"
        />

        {/* Mensagens de erro ou sucesso */}
        {erro && <p className="error-message">{erro}</p>}
        {sucesso && <p className="success-message">{sucesso}</p>}

        {/* Botão de envio */}
        <button type="submit" className="btn-login">Redefinir senha</button>
      </form>

      {/* Botão para voltar à página anterior */}
      <button className="btn-voltar" onClick={() => navigate(-1)}>Voltar</button>
    </section>
  );
}
