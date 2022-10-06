import { pool } from "../db.js";

export const getCategorias = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM categorias");
    res.json(rows);

  } catch (error) {
      return res.status(500).json({ message: "Algo salio mal" });
  }
};

export const getCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM categorias WHERE id_categoria = ?", [id]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "categoria no encontrada" });
    }

    res.json(rows[0]);

  } catch (error) {
      return res.status(500).json({ message: "Algo salio mal" });
  }
};

export const deleteCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM subcategorias WHERE id_categoria = ?", [id]);
    const [rows] = await pool.query("DELETE FROM categorias WHERE id_categoria = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Categoria no encontrada" });
    }

    res.sendStatus(204);

  } catch (error) {
      return res.status(500).json({ message: "Algo salio mal" });
  }
};

export const createCategoria = async (req, res) => {
  try {
    const { nombre } = req.body;
    
    const [rows] = await pool.query(
      "INSERT INTO categorias (nombre) VALUES (?)",
      [nombre]
    );
    res.status(201).json({ id: rows.insertId, nombre});

  } catch (error) {
      return res.status(500).json({ message: "Algo salio mal" });
  }
};

export const updateCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;

    const [result] = await pool.query("UPDATE categorias SET nombre = IFNULL(?, nombre) WHERE id_categoria = ?",[nombre, id]);

    if (result.affectedRows === 0){
      return res.status(404).json({ message: "Categoria no encontrada" });
    }

    const [rows] = await pool.query("SELECT * FROM categorias WHERE id_categoria = ?", [id]);

    res.json(rows[0]);
  } catch (error) {
      return res.status(500).json({ message: "Algo salio mal" });
  }
};