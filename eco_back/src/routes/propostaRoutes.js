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

router.get("/", getAllPropostasHandler);
router.get("/:id_proposta", getPropostaByIdHandler);
router.post("/", addPropostaHandler);
router.put("/:id_proposta", updatePropostaHandler);
router.delete("/:id_proposta", deletePropostaHandler);

// ---- Ações específicas ----
router.put("/:id_proposta/aceitar", aceitarPropostaHandler);
router.put("/:id_proposta/recusar", recusarPropostaHandler);
router.put("/:id_proposta/cancelar", cancelarPropostaHandler);

module.exports = router;
