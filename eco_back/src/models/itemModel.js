const prisma = require('../prisma');

exports.getAllItens = async () => {
  return prisma.item.findMany({
    include: { usuario: true, categoria: true }
  });
};

exports.getItemById = async (id_item) => {
  return prisma.item.findUnique({
    where: { id_item },
    include: { usuario: true, categoria: true }
  });
};

exports.addItem = async (data) => {
  try {
    const item = await prisma.item.create({
      data: {
        id_categoria: data.id_categoria,
        titulo: data.titulo,
        descricao: data.descricao,
        condicao: data.condicao,
        foto_uris: JSON.stringify(data.foto_uris || []), // garante string
        id_usuario_proprietario: data.id_usuario_proprietario,
        status_item: data.status_item.toUpperCase(), // garante enum válido
      },
    });
    return item;
  } catch (err) {
    console.error("Erro ao criar item:", err);
    throw err; // propaga para o handler
  }
};

exports.updateItem = async (id_item, data) => {
  return prisma.item.update({
    where: { id_item },
    data
  });
};

exports.deleteItem = async (id_item) => {
  return prisma.item.delete({ where: { id_item } });
};
