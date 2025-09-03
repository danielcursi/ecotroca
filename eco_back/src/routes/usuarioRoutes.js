const express = require('express');
const router = express.Router();
const { addUsuarioHandler, getAllUsuariosHandler, getUsuarioByIdHandler, loginUsuarioHandler, updateUsuarioHandler, deleteUsuarioHandler } = require('../controllers/usuarioController');

router.get("/", getAllUsuariosHandler)
router.get("/:id_usuario", getUsuarioByIdHandler)
router.post("/", addUsuarioHandler)
router.post("/login", loginUsuarioHandler)
router.put("/:id_usuario", updateUsuarioHandler)
router.delete("/:id_usuario", deleteUsuarioHandler)

module.exports = router;