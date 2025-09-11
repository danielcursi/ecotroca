const express = require('express');
const router = express.Router();
const {
  getAllMensagensHandler,
  getMensagemByIdHandler,
  addMensagemHandler,
  updateMensagemHandler,
  deleteMensagemHandler,
  marcarComoLidaHandler
} = require('../controllers/mensagemController');

const verificarParticipanteProposta = require('../middlewares/regraMensagem');

// Rotas públicas / leitura
router.get("/", getAllMensagensHandler);
router.get("/:id_mensagem", getMensagemByIdHandler);

// Rotas protegidas - só participantes da proposta podem enviar ou atualizar mensagens
router.post("/", verificarParticipanteProposta, addMensagemHandler);
router.put("/:id_mensagem", verificarParticipanteProposta, updateMensagemHandler);

// Rotas que não precisam de middleware (ex: deletar ou marcar como lida)
router.delete("/:id_mensagem", deleteMensagemHandler);
router.put("/:id_mensagem/lida", marcarComoLidaHandler);

module.exports = router;
