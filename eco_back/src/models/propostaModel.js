const prisma = require('../prisma');

// -------------------------
// Consultas básicas
// -------------------------
exports.getAllPropostas = async () => {
  return prisma.propostaTroca.findMany({
    include: { 
      item_oferecido: true, 
      item_desejado: true, 
      usuario_proponente: true,
      mensagens: true
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

// -------------------------
// Criar proposta + mensagem inicial (transacional)
// -------------------------
exports.addPropostaComMensagem = async ({
  id_item_oferecido, 
  id_item_desejado, 
  id_usuario_proponente, 
  mensagem_inicial
}) => {
  return prisma.$transaction(async (tx) => {
    // 1️⃣ Buscar itens e validar
    const [oferecido, desejado] = await Promise.all([
      tx.item.findUnique({ where: { id_item: id_item_oferecido } }),
      tx.item.findUnique({ where: { id_item: id_item_desejado } }),
    ]);

    if (!oferecido || !desejado) throw new Error("ITEM_NAO_ENCONTRADO");
    if (desejado.id_usuario_proprietario === id_usuario_proponente)
      throw new Error("PROPRIO_ITEM");
    if (oferecido.status_item !== 'DISPONIVEL' || desejado.status_item !== 'DISPONIVEL')
      throw new Error("ITEM_INDISPONIVEL");

    // 2️⃣ Criar proposta
    const proposta = await tx.propostaTroca.create({
      data: {
        id_item_oferecido,
        id_item_desejado,
        id_usuario_proponente,
        status_proposta: 'PENDENTE', // redundante, mas deixa explícito
      },
    });

    // 3️⃣ Criar mensagem inicial
    const mensagem = await tx.mensagem.create({
      data: {
        id_proposta_troca: proposta.id_proposta,
        id_usuario_remetente: id_usuario_proponente,
        conteudo_mensagem: (mensagem_inicial || "Olá! Tenho interesse na troca.").trim(),
      },
    });

    return { proposta, mensagem };
  });
};

// -------------------------
// Aceitar proposta (transacional e reserva itens)
// -------------------------
exports.aceitarProposta = async (id_proposta, userId) => {
  return prisma.$transaction(async (tx) => {
    const p = await tx.propostaTroca.findUnique({
      where: { id_proposta },
      include: { item_oferecido: true, item_desejado: true },
    });

    if (!p) throw new Error("NAO_ENCONTRADA");
    if (p.status_proposta !== 'PENDENTE') throw new Error("NAO_PENDENTE");
    if (p.item_desejado.id_usuario_proprietario !== userId) throw new Error("SEM_PERMISSAO");
    if (p.item_oferecido.status_item !== 'DISPONIVEL' || p.item_desejado.status_item !== 'DISPONIVEL')
      throw new Error("ITEM_INDISPONIVEL");

    // Atualizar proposta
    const proposta = await tx.propostaTroca.update({
      where: { id_proposta },
      data: { status_proposta: 'ACEITA', data_atualizacao_status: new Date() },
    });

    // Reservar itens
    await tx.item.update({ where: { id_item: p.id_item_oferecido }, data: { status_item: 'RESERVADO' } });
    await tx.item.update({ where: { id_item: p.id_item_desejado }, data: { status_item: 'RESERVADO' } });

    return proposta;
  });
};

// -------------------------
// Recusar proposta
// -------------------------
exports.recusarProposta = async (id_proposta, userId) => {
  const p = await prisma.propostaTroca.findUnique({
    where: { id_proposta },
    include: { item_desejado: true }
  });

  if (!p) throw new Error("NAO_ENCONTRADA");
  if (p.status_proposta !== 'PENDENTE') throw new Error("NAO_PENDENTE");
  if (p.item_desejado.id_usuario_proprietario !== userId) throw new Error("SEM_PERMISSAO");

  return prisma.propostaTroca.update({
    where: { id_proposta },
    data: { status_proposta: 'RECUSADA', data_atualizacao_status: new Date() }
  });
};

// -------------------------
// Cancelar proposta
// -------------------------
exports.cancelarProposta = async (id_proposta, userId) => {
  const p = await prisma.propostaTroca.findUnique({
    where: { id_proposta },
    include: { usuario_proponente: true }
  });

  if (!p) throw new Error("NAO_ENCONTRADA");
  if (p.usuario_proponente.id_usuario !== userId) throw new Error("SEM_PERMISSAO");

  return prisma.propostaTroca.update({
    where: { id_proposta },
    data: { status_proposta: 'CANCELADA', data_atualizacao_status: new Date() }
  });
};
