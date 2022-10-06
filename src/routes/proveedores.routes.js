import { Router } from "express";
import {
  getProveedores,
  getProveedor,
  deleteProveedor,
  createProveedor,
  updateProveedor,
} from "../controllers/proveedores.controller.js";

const router = Router();

// GET proveedores
router.get("/proveedores", getProveedores);

// GET proveedores
router.get("/proveedores/:id", getProveedor);

// DELETE proveedores
router.delete("/proveedores/:id", deleteProveedor);

// INSERT proveedores
router.post("/proveedores", createProveedor);

// UPDATE proveedores
router.patch("/proveedores/:id", updateProveedor);

export default router;