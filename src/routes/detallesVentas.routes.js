import { Router } from "express";
import {
  getDetallesVentas,
  getDetalleVenta,
  getDetallesVenta,
  deleteDetalleVenta,
  createDetalleVenta,
  updateDetalleVenta,
} from "../controllers/detallesVentas.controller.js";

const router = Router();

// GET todos los detalles de todos las ventas
router.get("/detallesventas", getDetallesVentas);

// GET un detalle de una venta
router.get("/detallesventas/:id_venta/:id_articulo", getDetalleVenta);

// GET todos los detalles de una venta
router.get("/detallesventas/:id_venta", getDetallesVenta);

// DELETE detalles ventas
router.delete("/detallesventas/:id_venta/:id_articulo", deleteDetalleVenta);

// INSERT detalles ventas
router.post("/detallesventas", createDetalleVenta);

// UPDATE detalles ventas
router.patch("/detallesventas/:id_venta/:id_articulo", updateDetalleVenta);

export default router;