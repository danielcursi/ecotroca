import api from "./api";

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

// Login de usuário
const loginUsuario = async (credenciais) => {
  try {
    const response = await api.post("/api/usuarios/login", credenciais);
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
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
    const token = localStorage.getItem("tokenUser"); // ou de onde você armazena
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
  loginUsuario,
  atualizarUsuario,
  deletarUsuario,
  alterarSenha,
  resetarSenha
};



/*// Rotas públicas

app.use("/api/usuarios", usuarioRoutes);

router.post("/", addUsuarioHandler);        // cadastro
router.post("/login", loginUsuarioHandler); // login
router.get("/", getAllUsuariosHandler);     // listar todos (opcionalmente pode ser privado)
router.get("/:id_usuario", getUsuarioByIdHandler);

// Rotas privadas (só usuário autenticado pode mexer)
router.put("/:id_usuario", autenticar, updateUsuarioHandler);
router.delete("/:id_usuario", autenticar, deleteUsuarioHandler); 

*/