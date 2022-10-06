import { Router } from "express";
import {
  getSubCategorias,
  getSubUnaCategoria,
  getTodasSubcategorias,
  deleteSubCategoria,
  createSubCategoria,
  updateSubCategoria,
} from "../controllers/subcategorias.controller.js";

const router = Router();

// GET todas las subcategorias
router.get("/subcategorias/", getSubCategorias);

// GET una subcategoria
router.get("/subcategorias/una/:id_subcategoria", getSubUnaCategoria);

// GET todas las subcategorias de una categoria
router.get("/subcategorias/todas/:id_categoria", getTodasSubcategorias);

// DELETE subcategorias
router.delete("/subcategorias/:id", deleteSubCategoria);

// INSERT subcategorias
router.post("/subcategorias/:id_categoria", createSubCategoria);

// UPDATE subcategoria
router.patch("/subcategorias/:id", updateSubCategoria);

export default router;