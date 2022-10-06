import { Router } from "express";
import {
  getDetallesPedidos,
  getDetallePedido,
  getDetallesPedido,
  deleteDetallePedido,
  createDetallePedido,
  updateDetallePedido,
} from "../controllers/detallesPedidos.controller.js";

const router = Router();

// GET todos los detalles de todos los pedidos
router.get("/detallespedidos", getDetallesPedidos);

// GET un detalle de un pedido
router.get("/detallespedidos/:id_pedido/:id_articulo", getDetallePedido);

// GET todos los detalles de un pedido
router.get("/detallespedidos/:id_pedido", getDetallesPedido);

// DELETE detalles pedidos
router.delete("/detallespedidos/:id_pedido/:id_articulo", deleteDetallePedido);

// INSERT detalles pedidos
router.post("/detallespedidos", createDetallePedido);

// UPDATE detalles pedidos
router.patch("/detallespedidos/:id_pedido/:id_articulo", updateDetallePedido);

export default router;