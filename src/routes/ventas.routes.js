import { Router } from "express";
import {
  getVentas,
  getVenta,
  deleteVenta,
  createVenta,
  updateVenta,
} from "../controllers/ventas.controller.js";

const router = Router();

// GET ventas
router.get("/ventas", getVentas);

// GET ventas
router.get("/ventas/:id", getVenta);

// DELETE ventas
router.delete("/ventas/:id", deleteVenta);

// INSERT ventas
router.post("/ventas", createVenta);

// UPDATE ventas
router.patch("/ventas/:id", updateVenta);

export default router;