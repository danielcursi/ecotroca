const prisma = require("../prisma"); 

// Middleware que verifica se o usuário logado é o dono do item
async function verificarDonoItem(req, res, next) {
  const { id_item } = req.params; // Pega o ID do item passado na URL (ex: /itens/:id_item)

  // Busca o item no banco pelo ID
  const item = await prisma.item.findUnique({
    where: { id_item: parseInt(id_item) }, 

  });

  // Se o item não existir, retorna erro 404
  if (!item) {
    return res.status(404).json({ error: "Item não encontrado" });
  }

  // Verifica se o usuário logado é o dono do item
  // req.usuario.id_usuario deve estar definido pelo middleware de autenticação

  if (item.id_usuario_proprietario !== req.usuario.id_usuario) {
    return res.status(403).json({ error: "Você não é dono deste item" }); 
  }

  // Se passou nas verificações, permite que a próxima função da rota seja executada
  next();
}

module.exports = verificarDonoItem; // Exporta o middleware para ser usado nas rotas
