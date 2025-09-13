const express = require('express');
const router = express.Router();
const { addUsuarioHandler, getAllUsuariosHandler, getUsuarioByIdHandler, loginUsuarioHandler, updateUsuarioHandler, deleteUsuarioHandler, resetarSenhaHandler } = require('../controllers/usuarioController');
const autenticar = require('../middlewares/authMiddleware');

// Rotas públicas
router.post("/", addUsuarioHandler);        // cadastro
router.post("/login", loginUsuarioHandler); // login
router.get("/", getAllUsuariosHandler);     // listar todos (opcionalmente pode ser privado)
router.get("/:id_usuario", getUsuarioByIdHandler);

// 🔑 Rota pública para redefinição de senha
router.post("/resetar-senha", resetarSenhaHandler);

// Rotas privadas (só usuário autenticado pode mexer)
router.put("/:id_usuario", autenticar, updateUsuarioHandler);
router.delete("/:id_usuario", autenticar, deleteUsuarioHandler);

module.exports = router;
