const express = require('express');
const router = express.Router();
const {
  getAllItensHandler,
  getItemByIdHandler,
  addItemHandler,
  updateItemHandler,
  deleteItemHandler
} = require('../controllers/itemController');

const autenticar = require('../middlewares/authMiddleware'); 
const verificarDonoItem = require('../middlewares/regraDonoItem'); 

// Rotas públicas
router.get("/", getAllItensHandler);
router.get("/:id_item", getItemByIdHandler);


// Rotas que precisam verificar dono do item
router.post("/", autenticar, addItemHandler); // se cadastrar item precisar de login
router.put("/:id_item", autenticar, verificarDonoItem, updateItemHandler);
router.delete("/:id_item", autenticar, verificarDonoItem, deleteItemHandler);

module.exports = router;