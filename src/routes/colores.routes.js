import { Router } from "express";
import {
  createColor,
  deleteColor,
  getColor,
  getColores,
  updateColor,
} from "../controllers/colores.controller.js";

const router = Router();

// GET colores
router.get("/colores", getColores);

// GET colores
router.get("/colores/:id", getColor);

// DELETE colores
router.delete("/colores/:id", deleteColor);

// INSERT colores
router.post("/colores", createColor);

// UPDATE colores
router.patch("/colores/:id", updateColor);

export default router;