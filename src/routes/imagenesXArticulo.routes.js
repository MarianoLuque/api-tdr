import { Router } from "express";
import {
  getImagenes,
  deleteImagen,
  createImagen,
  updateImagen,
} from "../controllers/imagenesXArticulo.controller.js";

const router = Router();

// GET imagenes
router.get("/imagenes/:id_articulo", getImagenes);

// DELETE imagenes
router.delete("/imagenes/:id_articulo/:id_imagen", deleteImagen);

// INSERT imagenes
router.post("/imagenes/:id_articulo", createImagen);

// UPDATE imagenes
router.patch("/imagenes/:id_articulo/:id_imagen", updateImagen);

export default router;