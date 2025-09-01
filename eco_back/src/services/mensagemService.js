import prisma from "../prismaClient.js";

class MensagemService {
  async criarMensagem(data) {
    return prisma.mensagem.create({ data });
  }

  async listarMensagens() {
    return prisma.mensagem.findMany({
      include: { proposta_troca: true, usuario_remetente: true },
    });
  }

  async buscarPorId(id) {
    return prisma.mensagem.findUnique({
      where: { id_mensagem: id },
      include: { proposta_troca: true, usuario_remetente: true },
    });
  }

  async atualizarMensagem(id, data) {
    return prisma.mensagem.update({
      where: { id_mensagem: id },
      data,
    });
  }

  async deletarMensagem(id) {
    return prisma.mensagem.delete({ where: { id_mensagem: id } });
  }
}

export default new MensagemService();
