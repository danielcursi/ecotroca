require('dotenv').config();
const prisma = require('../prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

console.log("JWT:", JWT_SECRET_KEY);

// === Listar todos os usuários ===
exports.getAllUsuarios = async () => {
  return prisma.usuario.findMany({
    orderBy: { nome: 'asc' }
  });
};

// === Buscar por ID ===
exports.getUsuarioById = async (id_usuario) => {
  return prisma.usuario.findUnique({
    where: { id_usuario: Number(id_usuario) }
  });
};

// === Buscar por Email ===
exports.getUsuarioByEmail = async (email) => {
  return prisma.usuario.findUnique({
    where: { email }
  });
};

// === Cadastrar usuário ===
exports.addUsuario = async ({ nome, email, senha, telefone, cidade, bairro }) => {
  const existeUsuario = await prisma.usuario.findUnique({ where: { email } });

  if (existeUsuario) {
    throw new Error("Usuário já cadastrado com esse email");
  }

  if (!senha) {
    throw new Error("Senha é obrigatória");
  }

  const senhaCriptografada = await bcrypt.hash(senha, 10);

  return prisma.usuario.create({
    data: {
      nome,
      email,
      senha_hash: senhaCriptografada,
      telefone,
      cidade,
      bairro
    }
  });
};

// === Login de usuário ===
exports.loginUsuario = async (email, senha) => {
  if (!email || !senha) {
    throw new Error("Email e senha são obrigatórios");
  }

  const existeUsuario = await prisma.usuario.findUnique({ where: { email } });
  if (!existeUsuario) {
    throw new Error("Usuário não encontrado");
  }

  const senhaValida = await bcrypt.compare(senha, existeUsuario.senha_hash);
  if (!senhaValida) {
    throw new Error("Senha inválida");
  }

  const token = jwt.sign(
    {
      id: existeUsuario.id_usuario,
      email: existeUsuario.email,
      nome: existeUsuario.nome
    },
    JWT_SECRET_KEY,
    { expiresIn: '24h' }
  );

  return {
    usuario: {
      id_usuario: existeUsuario.id_usuario,
      nome: existeUsuario.nome,
      email: existeUsuario.email
    },
    token
  };
};

// === Atualizar usuário ===
exports.updateUsuario = async (id_usuario, dados) => {
  const existeUsuario = await prisma.usuario.findUnique({
    where: { id_usuario: Number(id_usuario) }
  });

  if (!existeUsuario) {
    throw new Error('Usuário não existe');
  }

  let dadosAtualizados = { ...dados };

  if (dados.senha) {
    dadosAtualizados.senha_hash = await bcrypt.hash(dados.senha, 10);
    delete dadosAtualizados.senha;
  }

  return prisma.usuario.update({
    where: { id_usuario: Number(id_usuario) },
    data: dadosAtualizados
  });
};

// === Deletar usuário ===
exports.deleteUsuario = async (id_usuario) => {
  const existeUsuario = await prisma.usuario.findUnique({
    where: { id_usuario: Number(id_usuario) }
  });

  if (!existeUsuario) {
    throw new Error("Usuário não encontrado");
  }

  return prisma.usuario.delete({
    where: { id_usuario: Number(id_usuario) }
  });
};

// === Resetar senha (usuário não logado) ===
exports.resetarSenha = async (email, novaSenha) => {
  if (!email || !novaSenha) {
    throw new Error("Email e nova senha são obrigatórios");
  }

  const usuario = await prisma.usuario.findUnique({ where: { email } });
  if (!usuario) {
    throw new Error("Usuário não encontrado");
  }

  const novaSenhaHash = await bcrypt.hash(novaSenha, 10);

  return prisma.usuario.update({
    where: { email },
    data: { senha_hash: novaSenhaHash }
  });
};
