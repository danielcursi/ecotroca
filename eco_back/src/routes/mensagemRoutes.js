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

router.get("/", getAllMensagensHandler);
router.get("/:id_mensagem", getMensagemByIdHandler);
router.post("/", addMensagemHandler);
router.put("/:id_mensagem", updateMensagemHandler);
router.delete("/:id_mensagem", deleteMensagemHandler);

// ---- Ação específica ----
router.put("/:id_mensagem/lida", marcarComoLidaHandler);

module.exports = router;
