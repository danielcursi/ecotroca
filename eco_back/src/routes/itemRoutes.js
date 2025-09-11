const express = require('express');
const router = express.Router();
const {
  getAllItensHandler,
  getItemByIdHandler,
  addItemHandler,
  updateItemHandler,
  deleteItemHandler
} = require('../controllers/itemController');

const verificarDonoItem = require('../middlewares/regraDonoItem');

// Rotas públicas
router.get("/", getAllItensHandler);
router.get("/:id_item", getItemByIdHandler);
router.post("/", addItemHandler);

// Rotas que precisam verificar dono do item
router.put("/:id_item", verificarDonoItem, updateItemHandler);
router.delete("/:id_item", verificarDonoItem, deleteItemHandler);

module.exports = router;
