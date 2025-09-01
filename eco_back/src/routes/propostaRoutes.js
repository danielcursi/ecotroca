import { Router } from "express";
import propostaController from "../controllers/propostaController.js";

const router = Router();

router.post("/", propostaController.criar);
router.get("/", propostaController.listar);
router.get("/:id", propostaController.buscar);
router.put("/:id", propostaController.atualizar);
router.delete("/:id", propostaController.deletar);

export default router;
