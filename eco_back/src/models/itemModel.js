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
  return prisma.item.create({ data });
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
