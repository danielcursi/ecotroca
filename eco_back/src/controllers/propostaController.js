// propostaController.js
const {
  getAllPropostas,
  getPropostaById,
  addPropostaComMensagem,
  updateProposta,
  deleteProposta,
  aceitarProposta,
  recusarProposta,
  cancelarProposta
} = require('../models/propostaModel');

// --- Handlers HTTP ---

// Listar todas as propostas
exports.getAllPropostasHandler = async (req, res) => {
  try {
    const propostas = await getAllPropostas();
    res.json(propostas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obter proposta por ID
exports.getPropostaByIdHandler = async (req, res) => {
  try {
    const id = Number(req.params.id_proposta);
    const proposta = await getPropostaById(id);
    if (!proposta) return res.status(404).json({ error: 'Proposta não encontrada' });
    res.json(proposta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Criar proposta + mensagem inicial
exports.addPropostaHandler = async (req, res) => {
  const { id_item_oferecido, id_item_desejado, mensagem_inicial } = req.body || {};
  if (!req.usuario?.id_usuario) return res.status(401).json({ error: 'Não autenticado' });
  if (!id_item_oferecido || !id_item_desejado) {
    return res.status(400).json({ error: 'id_item_oferecido e id_item_desejado são obrigatórios' });
  }

  try {
    const result = await addPropostaComMensagem({
      id_item_oferecido: Number(id_item_oferecido),
      id_item_desejado: Number(id_item_desejado),
      id_usuario_proponente: req.usuario.id_usuario,
      mensagem_inicial: (mensagem_inicial || '').trim()
    });
    return res.status(201).json(result);
  } catch (err) {
    const map = {
      PROPRIO_ITEM: [400, 'Você não pode propor troca para o próprio item.'],
      ITEM_NAO_ENCONTRADO: [404, 'Item não encontrado.'],
      ITEM_INDISPONIVEL: [409, 'Um dos itens não está disponível.'],
      PROPOSTA_DUPLICADA: [409, 'Já existe uma proposta pendente igual.']
    };
    const [code, msg] = map[err.message] || [500, 'Erro ao criar proposta.'];
    return res.status(code).json({ error: msg });
  }
};

// Atualizar proposta
exports.updatePropostaHandler = async (req, res) => {
  try {
    const id = Number(req.params.id_proposta);
    const proposta = await updateProposta(id, req.body);
    res.json(proposta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar proposta
exports.deletePropostaHandler = async (req, res) => {
  try {
    const id = Number(req.params.id_proposta);
    const proposta = await deleteProposta(id);
    res.json(proposta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Aceitar proposta (somente dono do item desejado)
exports.aceitarPropostaHandler = async (req, res) => {
  if (!req.usuario?.id_usuario) return res.status(401).json({ error: 'Não autenticado' });
  try {
    const id = Number(req.params.id_proposta);
    const proposta = await aceitarProposta(id, req.usuario.id_usuario);
    res.json(proposta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Recusar proposta (somente dono do item desejado)
exports.recusarPropostaHandler = async (req, res) => {
  if (!req.usuario?.id_usuario) return res.status(401).json({ error: 'Não autenticado' });
  try {
    const id = Number(req.params.id_proposta);
    const proposta = await recusarProposta(id, req.usuario.id_usuario);
    res.json(proposta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Cancelar proposta (somente dono da proposta)
exports.cancelarPropostaHandler = async (req, res) => {
  if (!req.usuario?.id_usuario) return res.status(401).json({ error: 'Não autenticado' });
  try {
    const id = Number(req.params.id_proposta);
    const proposta = await cancelarProposta(id, req.usuario.id_usuario);
    res.json(proposta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
