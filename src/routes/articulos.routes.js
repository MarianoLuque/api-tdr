import { Router } from "express";
import {
  getArticulos,
  getArticulo,
  deleteArticulo,
  createArticulo,
  updateArticulo,
} from "../controllers/articulos.controller.js";

const router = Router();

// GET articulos
router.get("/articulos", getArticulos);

// GET articulos
router.get("/articulos/:id", getArticulo);

// DELETE articulos
router.delete("/articulos/:id", deleteArticulo);

// INSERT articulos
router.post("/articulos", createArticulo);

// UPDATE articulos
router.patch("/articulos/:id", updateArticulo);

export default router;