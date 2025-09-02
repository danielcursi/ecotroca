const express = require('express');
const router = express.Router();
const { getAllUsuarios, getUsuarioById, addUsuario, updateUsuario, deleteUsuario, loginUsuario } = require('../services/usuarioService');

router.get("/", getAllUsuarios)
router.get("/:id", getUsuarioById)
router.post("/", addUsuario)
router.post("/login", loginUsuario)
router.put("/:id", updateUsuario)
router.delete("/:id", deleteUsuario)
module.exports = router;