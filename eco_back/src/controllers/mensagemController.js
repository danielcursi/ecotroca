const {
  getAllMensagens,
  getMensagemById,
  addMensagem,
  updateMensagem,
  deleteMensagem,
  marcarComoLida
} = require('../models/mensagemModel');

// ---- Handlers ----
exports.getAllMensagensHandler = async (req, res) => {
  try {
    const mensagens = await getAllMensagens();
    res.status(200).json(mensagens);
  } catch (err) {
    console.error("Erro ao buscar mensagens:", err);
    res.status(500).json({ error: err.message });
  }
};

exports.getMensagemByIdHandler = async (req, res) => {
  try {
    const id_mensagem = parseInt(req.params.id_mensagem);
    const mensagem = await getMensagemById(id_mensagem);
    if (!mensagem) return res.status(404).json({ error: "Mensagem não encontrada" });
    res.status(200).json(mensagem);
  } catch (err) {
    console.error("Erro ao buscar mensagem:", err);
    res.status(500).json({ error: err.message });
  }
};

exports.addMensagemHandler = async (req, res) => {
  const { id_proposta_troca, conteudo_mensagem } = req.body;
  if (!id_proposta_troca || !conteudo_mensagem)
    return res.status(400).json({ error: "Campos obrigatórios ausentes" });

  try {
    const novaMensagem = await addMensagem({
      id_proposta_troca,
      id_usuario_remetente: req.usuario.id_usuario,
      conteudo_mensagem
    });
    res.status(201).json(novaMensagem);
  } catch (err) {
    console.error("Erro ao criar mensagem:", err);
    res.status(500).json({ error: err.message });
  }
};

exports.updateMensagemHandler = async (req, res) => {
  try {
    const id_mensagem = parseInt(req.params.id_mensagem);
    const mensagemAtualizada = await updateMensagem(id_mensagem, req.body);
    res.status(200).json(mensagemAtualizada);
  } catch (err) {
    console.error("Erro ao atualizar mensagem:", err);
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMensagemHandler = async (req, res) => {
  try {
    const id_mensagem = parseInt(req.params.id_mensagem);
    await deleteMensagem(id_mensagem);
    res.status(204).send();
  } catch (err) {
    console.error("Erro ao deletar mensagem:", err);
    res.status(500).json({ error: err.message });
  }
};

exports.marcarComoLidaHandler = async (req, res) => {
  try {
    const id_mensagem = parseInt(req.params.id_mensagem);
    const mensagemAtualizada = await marcarComoLida(id_mensagem);
    res.status(200).json(mensagemAtualizada);
  } catch (err) {
    console.error("Erro ao marcar mensagem como lida:", err);
    res.status(500).json({ error: err.message });
  }
};
