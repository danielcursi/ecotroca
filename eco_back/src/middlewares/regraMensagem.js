const prisma = require("../prisma");

async function verificarParticipanteProposta(req, res, next) {
  const { id_proposta_troca } = req.body;

  if (!id_proposta_troca) {
    return res.status(400).json({ error: "ID da proposta é obrigatório no body" });
  }

  const usuarioLogado = req.usuario.id_usuario;

  try {
    const proposta = await prisma.propostaTroca.findUnique({
      where: { id_proposta: parseInt(id_proposta_troca) },
      include: {
        item_oferecido: { select: { id_usuario_proprietario: true } },
        item_desejado: { select: { id_usuario_proprietario: true } }
      },
    });

    if (!proposta) {
      return res.status(404).json({ error: "Proposta não encontrada" });
    }

    const donoItemDesejado = proposta.item_desejado.id_usuario_proprietario;
    const proponente = proposta.id_usuario_proponente;

    console.log("Middleware verificarParticipanteProposta:");
    console.log("Usuario logado:", usuarioLogado);
    console.log("Proponente:", proponente);
    console.log("Dono item desejado:", donoItemDesejado);
    console.log("ID proposta recebida:", id_proposta_troca);

    // Só proponente ou dono do item desejado podem enviar mensagem
    if (usuarioLogado !== proponente && usuarioLogado !== donoItemDesejado) {
      return res.status(403).json({ error: "Você não pode enviar mensagens nesta proposta" });
    }

    next();
  } catch (err) {
    console.error("Erro no middleware verificarParticipanteProposta:", err);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
}

module.exports = verificarParticipanteProposta;
