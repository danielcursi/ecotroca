const express = require('express');
const router = express.Router();
const { 
  getAllPropostasHandler, getPropostaByIdHandler,
  addPropostaHandler, updatePropostaHandler, deletePropostaHandler,
  aceitarPropostaHandler, recusarPropostaHandler, cancelarPropostaHandler
} = require('../controllers/propostaController');

const autenticar = require('../middlewares/authMiddleware');
const verificarDonoProposta = require('../middlewares/regraDonoProposta');
const verificarDonoItemDesejado = require('../middlewares/regraDonoItem'); // deve existir

// Rotas públicas
router.get("/", getAllPropostasHandler);
router.get("/:id_proposta", getPropostaByIdHandler);

// Rotas protegidas
router.post("/", autenticar, addPropostaHandler);
router.put("/:id_proposta", autenticar, verificarDonoProposta, updatePropostaHandler);
router.delete("/:id_proposta", autenticar, verificarDonoProposta, deletePropostaHandler);
router.put("/:id_proposta/cancelar", autenticar, verificarDonoProposta, cancelarPropostaHandler);

// Aceitar/Recusar (somente dono do item desejado)
router.put("/:id_proposta/aceitar", autenticar, verificarDonoItemDesejado, aceitarPropostaHandler);
router.put("/:id_proposta/recusar", autenticar, verificarDonoItemDesejado, recusarPropostaHandler);

module.exports = router;
