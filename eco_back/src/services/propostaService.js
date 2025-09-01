import prisma from "../prismaClient.js";

class PropostaService {
  async criarProposta(data) {
    return prisma.propostaTroca.create({ data });
  }

  async listarPropostas() {
    return prisma.propostaTroca.findMany({
      include: {
        item_oferecido: true,
        item_desejado: true,
        usuario_proponente: true,
        mensagens: true,
      },
    });
  }

  async buscarPorId(id) {
    return prisma.propostaTroca.findUnique({
      where: { id_proposta: id },
      include: {
        item_oferecido: true,
        item_desejado: true,
        usuario_proponente: true,
        mensagens: true,
      },
    });
  }

  async atualizarProposta(id, data) {
    return prisma.propostaTroca.update({
      where: { id_proposta: id },
      data,
    });
  }

  async deletarProposta(id) {
    return prisma.propostaTroca.delete({ where: { id_proposta: id } });
  }
}

export default new PropostaService();

