const logger = require("../logger/logger");
const usuarioModel = require("../models/usuarioModel");

// === Listar todos os usuários ===
exports.getAllUsuariosHandler = async (req, res) => {
  const correlationId = req.headers['x-correlation-id'];
  try {
    const usuarios = await usuarioModel.getAllUsuarios();
    logger.info({ correlationId }, 'Listando todos os usuários');
    res.status(200).json(usuarios);
  } catch (err) {
    logger.error({ correlationId, err }, 'Erro ao listar usuários');
    res.status(500).json({ error: err.message });
  }
};

// === Buscar usuário por ID ===
exports.getUsuarioByIdHandler = async (req, res) => {
  const correlationId = req.headers['x-correlation-id'];
  const id_usuario = parseInt(req.params.id_usuario);

  if (isNaN(id_usuario)) {
    logger.warn({ correlationId }, 'ID de usuário inválido');
    return res.status(400).json({ error: 'ID inválido' });
  }

  try {
    const usuario = await usuarioModel.getUsuarioById(id_usuario);
    if (!usuario) {
      logger.warn({ correlationId, id_usuario }, 'Usuário não encontrado');
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    logger.info({ correlationId, id_usuario }, 'Usuário encontrado');
    res.status(200).json(usuario);
  } catch (err) {
    logger.error({ correlationId, err }, 'Erro ao buscar usuário por ID');
    res.status(500).json({ error: err.message });
  }
};

// === Adicionar novo usuário ===
exports.addUsuarioHandler = async (req, res) => {
  const correlationId = req.headers['x-correlation-id'];
  const { nome, email, senha, telefone, cidade, bairro } = req.body || {};

  if (!nome || !email || !senha || !telefone || !cidade || !bairro) {
    logger.warn({ correlationId }, 'Campos obrigatórios ausentes');
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  try {
    const usuarioNovo = await usuarioModel.addUsuario({ nome, email, senha, telefone, cidade, bairro });
    logger.info({ correlationId, email }, 'Novo usuário criado');
    res.status(201).json(usuarioNovo);
  } catch (err) {
    logger.error({ correlationId, err }, 'Erro ao adicionar usuário');
    res.status(500).json({ error: err.message });
  }
};

// === Login de usuário ===
exports.loginUsuarioHandler = async (req, res) => {
  const correlationId = req.headers['x-correlation-id'];
  const { email, senha } = req.body || {};

  if (!email || !senha) {
    logger.warn({ correlationId }, 'Email ou senha ausente');
    return res.status(400).json({ error: 'Verifique email e senha' });
  }

  try {
    const { usuario, token } = await usuarioModel.loginUsuario(email, senha);
    logger.info({ correlationId, email }, 'Login realizado com sucesso');
    res.status(200).json({ message: 'Login realizado com sucesso!', usuario, token });
  } catch (err) {
    logger.error({ correlationId, err }, 'Erro ao realizar login');
    res.status(401).json({ error: err.message });
  }
};

// === Atualizar usuário ===
exports.updateUsuarioHandler = async (req, res) => {
  const correlationId = req.headers['x-correlation-id'];
  const id_usuario = parseInt(req.params.id_usuario);
  const { nome, email, senha, telefone, cidade, bairro } = req.body || {};

  if (!nome && !email && !senha && !telefone && !cidade && !bairro) {
    logger.warn({ correlationId }, 'Nenhum campo para atualizar');
    return res.status(400).json({ error: 'Nenhum campo informado para atualização' });
  }

  try {
    const usuarioAtualizado = await usuarioModel.updateUsuario(id_usuario, { nome, email, senha, telefone, cidade, bairro });
    logger.info({ correlationId, id_usuario }, 'Usuário atualizado com sucesso');
    res.status(200).json({ usuario: usuarioAtualizado, message: "Usuário atualizado com sucesso!" });
  } catch (err) {
    logger.error({ correlationId, err }, 'Erro ao atualizar usuário');
    res.status(500).json({ error: err.message });
  }
};

// === Deletar usuário ===
exports.deleteUsuarioHandler = async (req, res) => {
  const correlationId = req.headers['x-correlation-id'];
  const id_usuario = parseInt(req.params.id_usuario);

  try {
    await usuarioModel.deleteUsuario(id_usuario);
    logger.info({ correlationId, id_usuario }, 'Usuário deletado com sucesso');
    res.status(204).json({ message: 'Usuário deletado com sucesso!' });
  } catch (err) {
    if (err.message.includes("não encontrado") || err.message.includes("Usuario nao encontrado")) {
      logger.warn({ correlationId, id_usuario }, 'Tentativa de deletar usuário inexistente');
      return res.status(404).json({ error: "Usuário não existe" });
    }
    logger.error({ correlationId, err }, 'Erro ao deletar usuário');
    res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
};

// === Resetar senha (usuário não logado) ===
exports.resetarSenhaHandler = async (req, res) => {
  const { email, novaSenha } = req.body || {};

  if (!email || !novaSenha) {
    return res.status(400).json({ error: "Email e nova senha são obrigatórios" });
  }

  try {
    await usuarioModel.resetarSenha(email, novaSenha);
    logger.info({ email }, "Senha redefinida com sucesso!");
    res.json({ message: "Senha redefinida com sucesso!" });
  } catch (error) {
    logger.error({ email, err: error }, "Erro ao redefinir senha");
    res.status(400).json({ error: error.message });
  }
};
