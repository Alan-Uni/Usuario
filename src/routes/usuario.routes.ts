import { Router } from "express";
import { getclose } from "../controllers/usuario.controller.ts";

const router = Router();

router.get("/Cierre", getclose);


export default router;