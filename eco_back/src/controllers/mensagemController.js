const {
  getAllMensagens,
  getMensagemById,
  addMensagem,
  updateMensagem,
  deleteMensagem,
  marcarComoLida
} = require('../models/mensagemModel');

exports.getAllMensagensHandler = async (req, res) => {
  try {
    res.status(200).json(await getAllMensagens());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMensagemByIdHandler = async (req, res) => {
  try {
    const msg = await getMensagemById(parseInt(req.params.id_mensagem));
    if (!msg) return res.status(404).json({ error: 'Mensagem não encontrada' });
    res.status(200).json(msg);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addMensagemHandler = async (req, res) => {
  try {
    res.status(201).json(await addMensagem(req.body));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMensagemHandler = async (req, res) => {
  try {
    res.status(200).json(await updateMensagem(parseInt(req.params.id_mensagem), req.body));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMensagemHandler = async (req, res) => {
  try {
    await deleteMensagem(parseInt(req.params.id_mensagem));
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ---- Ação específica ----
exports.marcarComoLidaHandler = async (req, res) => {
  try {
    res.status(200).json(await marcarComoLida(parseInt(req.params.id_mensagem)));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
