const prisma = require("../prisma");

async function verificarParticipanteProposta(req, res, next) {
  const { id_proposta_troca } = req.body; // id vem do body na criação da mensagem
  const usuarioLogado = req.usuario.id_usuario;

  const proposta = await prisma.propostaTroca.findUnique({
    where: { id_proposta: parseInt(id_proposta_troca) },
    include: {
      item_desejado: true, // precisamos do dono do item
    },
  });

  if (!proposta) {
    return res.status(404).json({ error: "Proposta não encontrada" });
  }

  const donoItemDesejado = proposta.item_desejado.id_usuario_proprietario;
  const proponente = proposta.id_usuario_proponente;

  // Regras: só dono do item desejado OU proponente podem mandar mensagens
  if (usuarioLogado !== donoItemDesejado && usuarioLogado !== proponente) {
    return res.status(403).json({ error: "Você não pode enviar mensagens nesta proposta" });
  }

  next();
}

module.exports = verificarParticipanteProposta;
