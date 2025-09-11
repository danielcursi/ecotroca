const prisma = require("../prisma");

async function verificarDonoProposta(req, res, next) {
  const { id_proposta } = req.params;

  const proposta = await prisma.propostaTroca.findUnique({
    where: { id_proposta: parseInt(id_proposta) },
  });

  if (!proposta) {
    return res.status(404).json({ error: "Proposta não encontrada" });
  }

  // Apenas o usuário que criou (proponente) pode alterar/cancelar
  if (proposta.id_usuario_proponente !== req.usuario.id_usuario) {
    return res.status(403).json({ error: "Você não é o proponente desta proposta" });
  }

  next();
}

module.exports = verificarDonoProposta;
