import { pool } from "../db.js";

export const getSubCategorias = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM subcategorias");
    res.json(rows);

  } catch (error) {
      return res.status(500).json({ message: "Algo salio mal" });
  }
};

export const getSubUnaCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM subcategorias WHERE id_subcategoria = ?", [id]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Subcategoria no encontrada" });
    }

    res.json(rows[0]);

  } catch (error) {
      return res.status(500).json({ message: "Algo salio mal" });
  }
};

export const getTodasSubcategorias = async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await pool.query("SELECT * FROM subcategorias WHERE id_categoria = ?", [id]);
  
      if (rows.length <= 0) {
        return res.status(404).json({ message: "Categoria no encontrada" });
      }
  
      res.json(rows[0]);
  
    } catch (error) {
        return res.status(500).json({ message: "Algo salio mal" });
    }
  };

export const deleteSubCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM subcategorias WHERE id_subcategoria = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Subcategoria no encontrada" });
    }

    res.sendStatus(204);

  } catch (error) {
      return res.status(500).json({ message: "Algo salio mal" });
  }
};

export const createSubCategoria = async (req, res) => {
  try {
    const { id_categoria } = req.params;
    const { nombre } = req.body;
    
    const [rows] = await pool.query(
      "INSERT INTO subcategorias (id_categoria, nombre) VALUES (?, ?)",
      [id_categoria, nombre]
    );
    res.status(201).json({ id: rows.insertId, id_categoria, nombre});

  } catch (error) {
      return res.status(500).json({ message: "Algo salio mal" });
  }
};

export const updateSubCategoria = async (req, res) => {
  try {
    const { id, id_categoria } = req.params;
    const { nombre } = req.body;

    const [result] = await pool.query(
        "UPDATE subcategorias SET nombre = IFNULL(?, nombre), id_categoria = IFNULL(?, id_categoria) WHERE id_subcategoria = ?",
        [nombre, id_categoria, id]
    );

    if (result.affectedRows === 0){
      return res.status(404).json({ message: "Subcategoria no encontrada" });
    }

    const [rows] = await pool.query("SELECT * FROM subcategorias WHERE id_subcategoria = ?", [id]);

    res.json(rows[0]);
  } catch (error) {
      return res.status(500).json({ message: "Algo salio mal" });
  }
};