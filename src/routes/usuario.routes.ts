import { Router } from "express";
import { getlogin } from "../controllers/usuario.controller.ts";
import { getclose } from "../controllers/usuario.controller.ts";

const router = Router();

router.get("/Ingreso", getlogin);
router.get("/Cierre", getclose);

export default router;