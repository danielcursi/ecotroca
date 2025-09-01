import { Router } from "express";
import mensagemController from "../controllers/mensagemController.js";

const router = Router();

router.post("/", mensagemController.criar);
router.get("/", mensagemController.listar);
router.get("/:id", mensagemController.buscar);
router.put("/:id", mensagemController.atualizar);
router.delete("/:id", mensagemController.deletar);

export default router;
