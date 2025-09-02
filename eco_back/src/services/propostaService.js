const prisma = require('../prisma');

exports.getAllPropostas = async () => {
  return prisma.propostaTroca.findMany({
    include: { 
      item_oferecido: true, 
      item_desejado: true, 
      usuario_proponente: true 
    }
  });
};

exports.getPropostaById = async (id_proposta) => {
  return prisma.propostaTroca.findUnique({
    where: { id_proposta },
    include: { 
      item_oferecido: true, 
      item_desejado: true, 
      usuario_proponente: true,
      mensagens: true
    }
  });
};

exports.addProposta = async (data) => {
  return prisma.propostaTroca.create({ data });
};

exports.updateProposta = async (id_proposta, data) => {
  return prisma.propostaTroca.update({
    where: { id_proposta },
    data
  });
};

exports.deleteProposta = async (id_proposta) => {
  return prisma.propostaTroca.delete({ where: { id_proposta } });
};

// ---- Ações específicas ----
exports.aceitarProposta = async (id_proposta) => {
  return prisma.propostaTroca.update({
    where: { id_proposta },
    data: {
      status_proposta: 'ACEITA',
      data_atualizacao_status: new Date()
    }
  });
};

exports.recusarProposta = async (id_proposta) => {
  return prisma.propostaTroca.update({
    where: { id_proposta },
    data: {
      status_proposta: 'RECUSADA',
      data_atualizacao_status: new Date()
    }
  });
};

exports.cancelarProposta = async (id_proposta) => {
  return prisma.propostaTroca.update({
    where: { id_proposta },
    data: {
      status_proposta: 'CANCELADA',
      data_atualizacao_status: new Date()
    }
  });
};
