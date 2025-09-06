const logger = require("../logger/logger");
const {
  getAllUsuarios,
  getUsuarioById,
  addUsuario,
  updateUsuario,
  deleteUsuario,
  loginUsuario
} = require("../services/usuarioService");

exports.getAllUsuariosHandler = async (req, res) => {
  const correlationId = req.headers['x-correlation-id'];
  try {
    const usuarios = await getAllUsuarios();
    logger.info({ correlationId }, 'Listando todos os usuarios');
    res.status(200).json(usuarios);
  } catch (err) {
    logger.error({ correlationId, err }, 'Erro ao listar usuarios');
    res.status(500).json({ error: err.message });
  }
};

exports.getUsuarioByIdHandler = async (req, res) => {
  const correlationId = req.headers['x-correlation-id'];
  const id_usuario = parseInt(req.params.id_usuario);

  if (isNaN(id_usuario)) {
    logger.warn({ correlationId }, 'ID de usuario invalido');
    return res.status(400).json({ error: 'ID INVALIDO' });
  }

  try {
    const usuario = await getUsuarioById(id_usuario);
    if (!usuario) {
      logger.warn({ correlationId, id_usuario }, 'Usuario nao encontrado');
      return res.status(404).json({ error: 'Usuario nao encontrado' });
    }
    logger.info({ correlationId, id_usuario }, 'Usuario encontrado');
    res.status(200).json(usuario);
  } catch (err) {
    logger.error({ correlationId, err }, 'Erro ao buscar usuario por ID');
    res.status(500).json({ error: err.message });
  }
};

exports.addUsuarioHandler = async (req, res) => {
  const correlationId = req.headers['x-correlation-id'];
  const { nome, email, senha, telefone, cidade, bairro } = req.body;

  try {
    const usuarioNovo = await addUsuario({ nome, email, senha, telefone, cidade, bairro });
    logger.info({ correlationId, email }, 'Novo usuario criado');
    res.status(201).json(usuarioNovo);
  } catch (err) {
    logger.error({ correlationId, err }, 'Erro ao adicionar usuário');
    res.status(500).json({ error: err.message });
  }
};

exports.loginUsuarioHandler = async (req, res) => {
  const correlationId = req.headers['x-correlation-id'];
  const { email, senha } = req.body;

  if (!email || !senha) {
    logger.warn({ correlationId }, 'Email ou senha ausente');
    return res.status(400).json({ error: 'Verifique email e senha' });
  }

  try {
    const { usuario, token } = await loginUsuario(email, senha);
    logger.info({ correlationId, email }, 'Login realizado com sucesso');
    res.status(200).json({
      message: 'Login realizado com sucesso!',
      usuario,
      token
    });
  } catch (err) {
    logger.error({ correlationId, err }, 'Erro ao realizar login');
    res.status(500).json({ error: err.message });
  }
};

exports.updateUsuarioHandler = async (req, res) => {
  const correlationId = req.headers['x-correlation-id'];
  const id_usuario = parseInt(req.params.id_usuario);
  const { nome, email, senha, telefone, cidade, bairro } = req.body;

  try {
    const usuarioAtualizado = await updateUsuario(id_usuario, { nome, email, senha, telefone, cidade, bairro });
    logger.info({ correlationId, id_usuario }, 'Usuario atualizado com sucesso');
    res.status(200).json({
      user: usuarioAtualizado,
      message: "Usuario atualizado com sucesso!"
    });
  } catch (err) {
    logger.error({ correlationId, err }, 'Erro ao atualizar usuario');
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUsuarioHandler = async (req, res) => {
  const correlationId = req.headers['x-correlation-id'];
  const id_usuario = parseInt(req.params.id_usuario);

  try {
    await deleteUsuario(id_usuario);
    logger.info({ correlationId, id_usuario }, 'Usuario deletado com sucesso');
    res.status(204).json({ message: 'Usuario deletado com sucesso!' });
  } catch (err) {
    if (err.message === "Usuario nao encontrado") {
      logger.warn({ correlationId, id_usuario }, 'Tentativa de deletar usuario inexistente');
      return res.status(404).json({ error: "Usuario nao existe" });
    }
    logger.error({ correlationId, err }, 'Erro ao deletar usuario');
    res.status(500).json({ error: 'Erro ao deletar usuario' });
  }
};
