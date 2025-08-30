const prisma = require('../prisma');

// Buscar todos os itens
const getAllItem = async () => {
  return prisma.Item.findMany({
    include:{
      categoria: true,
      usuario: true
    },
    orderBy: {
      titulo: 'desc'
    }
  });
};

// Buscar item pelo ID
const getItemById = async (id_item) => {
  return prisma.Item.findUnique({
    where: {
      id_item: id_item
    },
    include:{
      categoria: true,
      usuario: true
    }
  });
};

// Buscar itens de um usuário
const getItemsByUsuario = async (id_usuario_proprietario) => {
  return prisma.Item.findMany({
    where: {
      id_usuario_proprietario: id_usuario_proprietario
    },
    include:{
      categoria: true,
    }
  });
};

// Buscar itens por categoria
const getItemsByCategoria = async (id_categoria) => {
  return prisma.Item.findMany({
    where: {
      id_categoria: id_categoria
    },
    include:{
      usuario: true
    }
  });
};

// Criar novo item
const addItem = async ({
  id_usuario_proprietario,
  id_categoria,
  titulo,
  descricao,
  condicao,
  foto_uris,
  status_item
}) => {
  return prisma.Item.create({
    data: {
      id_usuario_proprietario,
      id_categoria,
      titulo,
      descricao,
      condicao,
      foto_uris,
      status_item
    }
  });
};

// Atualizar item existente
const updateItem = async (
  id_item,
  { titulo, descricao, condicao, foto_uris, status_item }
) => {
  const item = await getItemById(id_item);

  if (!item) {
    throw new Error('Item não encontrado');
  }

  return prisma.item.update({
    where: { id_item },
    data: { titulo, descricao, condicao, foto_uris, status_item },
    include:{ categoria: true, usuario: true}
  });
};

// Deletar item
const deleteItem = async (id_item) => {
  const item = await getItemById(id_item);

  if (!item) {
    throw new Error('Item não encontrado');
  }

  return prisma.item.delete({
    where: { id_item }
  });
};

module.exports = {
  getAllItem,
  getItemById,
  getItemsByUsuario,
  getItemsByCategoria,
  addItem,
  updateItem,
  deleteItem
};