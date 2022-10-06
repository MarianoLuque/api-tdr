import { pool } from "../db.js";

export const getColores = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM colores");
    res.json(rows);

  } catch (error) {
      return res.status(500).json({ message: "Algo salio mal" });
  }
};

export const getColor = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM colores WHERE id_color = ?", [id]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Color no encontrado" });
    }

    res.json(rows[0]);

  } catch (error) {
      return res.status(500).json({ message: "Algo salio mal" });
  }
};

export const deleteColor = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM colores WHERE id_color = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Color no encontrado" });
    }

    res.sendStatus(204);

  } catch (error) {
      return res.status(500).json({ message: "Algo salio mal" });
  }
};

export const createColor = async (req, res) => {
  try {
    const { nombre } = req.body;
    
    const [rows] = await pool.query(
      "INSERT INTO colores (nombre) VALUES (?)",
      [nombre]
    );
    res.status(201).json({ id: rows.insertId, nombre});

  } catch (error) {
      return res.status(500).json({ message: "Algo salio mal" });
  }
};

export const updateColor = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;

    const [result] = await pool.query("UPDATE colores SET nombre = IFNULL(?, nombre) WHERE id_color = ?",[nombre, id]);

    if (result.affectedRows === 0){
      return res.status(404).json({ message: "Color no encontrado" });
    }

    const [rows] = await pool.query("SELECT * FROM colores WHERE id_color = ?", [id]);

    res.json(rows[0]);
  } catch (error) {
      return res.status(500).json({ message: "Algo salio mal" });
  }
};