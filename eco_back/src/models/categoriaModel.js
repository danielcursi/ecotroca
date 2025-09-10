const prisma = require('../prisma');


exports.getAllCategorias = async () => prisma.categoria.findMany();
exports.getCategoriaById = async (id_categoria) => prisma.categoria.findUnique({ where: { id_categoria } });
exports.addCategoria = async (data) => prisma.categoria.create({ data });
exports.updateCategoria = async (id_categoria, data) => prisma.categoria.update({ where: { id_categoria }, data });
exports.deleteCategoria = async (id_categoria) => prisma.categoria.delete({ where: { id_categoria } });
