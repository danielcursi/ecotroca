const express = require('express');
const router = express.Router();
const {
  getAllPropostasHandler,
  getPropostaByIdHandler,
  addPropostaHandler,
  updatePropostaHandler,
  deletePropostaHandler,
  aceitarPropostaHandler,
  recusarPropostaHandler,
  cancelarPropostaHandler
} = require('../controllers/propostaController');
const autenticar = require('../middlewares/authMiddleware');
const verificarDonoProposta = require('../middlewares/regraDonoProposta');

// Rotas públicas / leitura
router.get("/", getAllPropostasHandler);
router.get("/:id_proposta", getPropostaByIdHandler);
router.post("/", addPropostaHandler);

// Rotas protegidas
router.post("/", autenticar, addPropostaHandler); // usuário logado cria proposta
router.put("/:id_proposta", autenticar, verificarDonoProposta, updatePropostaHandler);
router.delete("/:id_proposta", autenticar, verificarDonoProposta, deletePropostaHandler);
router.put("/:id_proposta/cancelar", autenticar, verificarDonoProposta, cancelarPropostaHandler);

// Aceitar/Recusar: apenas destinatário (dono do item desejado)
router.put("/:id_proposta/aceitar", autenticar, aceitarPropostaHandler);
router.put("/:id_proposta/recusar", autenticar, recusarPropostaHandler);

module.exports = router;

