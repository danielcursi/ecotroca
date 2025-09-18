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
const autenticar = require('../middlewares/authMiddleware');
const verificarParticipanteProposta = require('../middlewares/regraMensagem');


// Rotas públicas / leitura
router.get("/", getAllMensagensHandler);
router.get("/:id_mensagem", getMensagemByIdHandler);

// Rotas protegidas - só participantes da proposta podem enviar ou atualizar mensagens
router.post("/", autenticar,verificarParticipanteProposta, addMensagemHandler);
router.put("/:id_mensagem", autenticar,verificarParticipanteProposta, updateMensagemHandler);

// Rotas que não precisam de middleware (ex: deletar ou marcar como lida)
router.delete("/:id_mensagem", autenticar,deleteMensagemHandler);
router.put("/:id_mensagem/lida", autenticar, marcarComoLidaHandler);

module.exports = router;
