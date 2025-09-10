const {
  getAllPropostas,
  getPropostaById,
  addProposta,
  updateProposta,
  deleteProposta,
  aceitarProposta,
  recusarProposta,
  cancelarProposta
} = require('../models/propostaModel');

exports.getAllPropostasHandler = async (req, res) => {
  try {
    res.status(200).json(await getAllPropostas());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPropostaByIdHandler = async (req, res) => {
  try {
    const proposta = await getPropostaById(parseInt(req.params.id_proposta));
    if (!proposta) return res.status(404).json({ error: 'Proposta não encontrada' });
    res.status(200).json(proposta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addPropostaHandler = async (req, res) => {
  try {
    res.status(201).json(await addProposta(req.body));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updatePropostaHandler = async (req, res) => {
  try {
    res.status(200).json(await updateProposta(parseInt(req.params.id_proposta), req.body));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deletePropostaHandler = async (req, res) => {
  try {
    await deleteProposta(parseInt(req.params.id_proposta));
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ---- Ações específicas ----
exports.aceitarPropostaHandler = async (req, res) => {
  try {
    res.status(200).json(await aceitarProposta(parseInt(req.params.id_proposta)));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.recusarPropostaHandler = async (req, res) => {
  try {
    res.status(200).json(await recusarProposta(parseInt(req.params.id_proposta)));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.cancelarPropostaHandler = async (req, res) => {
  try {
    res.status(200).json(await cancelarProposta(parseInt(req.params.id_proposta)));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
