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

const verificarDonoProposta = require('../middlewares/regraDonoProposta');

// Rotas públicas / leitura
router.get("/", getAllPropostasHandler);
router.get("/:id_proposta", getPropostaByIdHandler);
router.post("/", addPropostaHandler);

// Rotas protegidas (só o proponente pode alterar ou cancelar)
router.put("/:id_proposta", verificarDonoProposta, updatePropostaHandler);
router.delete("/:id_proposta", verificarDonoProposta, deletePropostaHandler);
router.put("/:id_proposta/cancelar", verificarDonoProposta, cancelarPropostaHandler);

// Ações que dependem do destinatário (não aplicamos o middleware do proponente)
router.put("/:id_proposta/aceitar", aceitarPropostaHandler);
router.put("/:id_proposta/recusar", recusarPropostaHandler);

module.exports = router;
