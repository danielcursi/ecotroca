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

exports.addMensagem = async ({ id_proposta_troca, id_usuario_remetente, conteudo_mensagem }) => {
  if (!id_proposta_troca || !id_usuario_remetente || !conteudo_mensagem) {
    throw new Error("Campos obrigatórios ausentes");
  }

  return prisma.mensagem.create({
    data: {
      id_proposta_troca,
      id_usuario_remetente,
      conteudo_mensagem,
      lida: false
    },
    include: {
      usuario_remetente: true,
      proposta_troca: true
    }
  });
};

exports.updateMensagem = async (id_mensagem, data) => {
  return prisma.mensagem.update({ where: { id_mensagem }, data });
};

exports.deleteMensagem = async (id_mensagem) => {
  return prisma.mensagem.delete({ where: { id_mensagem } });
};

exports.marcarComoLida = async (id_mensagem) => {
  return prisma.mensagem.update({
    where: { id_mensagem },
    data: { lida: true }
  });
};
