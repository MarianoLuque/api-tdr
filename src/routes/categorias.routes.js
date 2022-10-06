import { Router } from "express";
import {
  getCategorias,
  getCategoria,
  deleteCategoria,
  createCategoria,
  updateCategoria,
} from "../controllers/categorias.controller.js";

const router = Router();

// GET categorias
router.get("/categorias", getCategorias);

// GET categoria
router.get("/categorias/:id", getCategoria);

// DELETE categorias
router.delete("/categorias/:id", deleteCategoria);

// INSERT categorias
router.post("/categorias", createCategoria);

// UPDATE categoria
router.patch("/categorias/:id", updateCategoria);

export default router;