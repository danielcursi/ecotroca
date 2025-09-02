const prisma = require('../prisma');
exports.getAllMensagens = async () => {
  return prisma.mensagem.findMany({
    include: { usuario_remetente: true, proposta_troca: true }
  });
};

exports.getMensagemById = async (id_mensagem) => {
  return prisma.mensagem.findUnique({
    where: { id_mensagem },
    include: { usuario_remetente: true, proposta_troca: true }
  });
};

exports.addMensagem = async (data) => {
  return prisma.mensagem.create({ data });
};

exports.updateMensagem = async (id_mensagem, data) => {
  return prisma.mensagem.update({ where: { id_mensagem }, data });
};

exports.deleteMensagem = async (id_mensagem) => {
  return prisma.mensagem.delete({ where: { id_mensagem } });
};

// ---- Ação específica ----
exports.marcarComoLida = async (id_mensagem) => {
  return prisma.mensagem.update({
    where: { id_mensagem },
    data: { lida: true }
  });
};
