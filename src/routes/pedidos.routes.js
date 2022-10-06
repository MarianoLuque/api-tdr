import { Router } from "express";
import {
  getPedidos,
  getPedido,
  deletePedido,
  createPedido,
  updatePedido,
} from "../controllers/pedidos.controller.js";

const router = Router();

// GET pedidos
router.get("/pedidos", getPedidos);

// GET pedidos
router.get("/pedidos/:id", getPedido);

// DELETE pedidos
router.delete("/pedidos/:id", deletePedido);

// INSERT pedidos
router.post("/pedidos", createPedido);

// UPDATE pedidos
router.patch("/pedidos/:id", updatePedido);

export default router;