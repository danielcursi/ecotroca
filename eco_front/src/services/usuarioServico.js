import api from "./api";

// Login de usuário
export const loginUsuario = async (dados) => {
  const response = await api.post("/api/usuarios/login", dados);

  // Monta o usuário já com o token
  const usuarioComToken = {
    ...response.data.usuario,
    token: response.data.token,
  };

  return usuarioComToken;
};

// Buscar todos os usuários
const buscarUsuarios = async () => {
  try {
    const response = await api.get("/api/usuarios");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error;
  }
};

// Buscar usuário por ID
const buscarUsuarioPorId = async (id_usuario) => {
  try {
    const response = await api.get(`/api/usuarios/${id_usuario}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar usuário com ID ${id_usuario}:`, error);
    throw error;
  }
};

// Cadastrar usuário
const cadastrarUsuario = async (dadosUsuario) => {
  try {
    const response = await api.post("/api/usuarios", dadosUsuario);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    throw error;
  }
};

// Atualizar usuário (precisa de autenticação/token)
const atualizarUsuario = async (id_usuario, dadosUsuario, token) => {
  try {
    const response = await api.put(`/api/usuarios/${id_usuario}`, dadosUsuario, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    throw error;
  }
};

// Deletar usuário (precisa de autenticação/token)
const deletarUsuario = async (id_usuario, token) => {
  try {
    const response = await api.delete(`/api/usuarios/${id_usuario}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    throw error;
  }
};

// Alterar senha (precisa de autenticação/token)
const alterarSenha = async ({ senhaAtual, novaSenha }) => {
  try {
    const token = localStorage.getItem("tokenUser"); // ajuste se necessário
    const response = await api.put(
      "/api/usuarios/alterar-senha",
      { senhaAtual, novaSenha },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao alterar senha:", error);
    throw error;
  }
};

// Resetar senha (usuário não logado, usando email)
const resetarSenha = async ({ email, novaSenha }) => {
  try {
    const response = await api.post("/api/usuarios/resetar-senha", { email, novaSenha });
    return response.data;
  } catch (error) {
    console.error("Erro ao resetar senha:", error);
    throw error;
  }
};

export {
  buscarUsuarios,
  buscarUsuarioPorId,
  cadastrarUsuario,
  atualizarUsuario,
  deletarUsuario,
  alterarSenha,
  resetarSenha
};
