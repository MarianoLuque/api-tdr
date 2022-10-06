INSERT INTO categorias (nombre) VALUES ('Remeras');
INSERT INTO categorias (nombre) VALUES ('Shorts');
INSERT INTO categorias (nombre) VALUES ('Buzos');
INSERT INTO categorias (nombre) VALUES ('Camperas');
INSERT INTO categorias (nombre) VALUES ('Joggin');

INSERT INTO colores (nombre) VALUES ('Coral');
INSERT INTO colores (nombre) VALUES ('Negro');
INSERT INTO colores (nombre) VALUES ('Blanco');
INSERT INTO colores (nombre) VALUES ('Verde');
INSERT INTO colores (nombre) VALUES ('Celeste oscuro');
INSERT INTO colores (nombre) VALUES ('Azul francia');
INSERT INTO colores (nombre) VALUES ('Celeste claro');
INSERT INTO colores (nombre) VALUES ('Rojo');
INSERT INTO colores (nombre) VALUES ('Beige');
INSERT INTO colores (nombre) VALUES ('Verde militar');
INSERT INTO colores (nombre) VALUES ('Gris claro');
INSERT INTO colores (nombre) VALUES ('Naranja');
INSERT INTO colores (nombre) VALUES ('Rosa claro');
INSERT INTO colores (nombre) VALUES ('Violeta');
INSERT INTO colores (nombre) VALUES ('Gris oscuro');
INSERT INTO colores (nombre) VALUES ('Rosa oscuro');

INSERT INTO formasDePago (nombre) VALUES ('Efectivo');
INSERT INTO formasDePago (nombre) VALUES ('Tarjeta');
INSERT INTO formasDePago (nombre) VALUES ('Transferencia');

INSERT INTO proveedores (nombre, telefono) VALUES ('Todo liso', '54 9 11 5523-9933');

INSERT INTO subcategorias (nombre, id_categoria) VALUES ('Remeras algodon cardado', 1);
INSERT INTO subcategorias (nombre, id_categoria) VALUES ('Remeras algodon peinado', 1);
INSERT INTO subcategorias (nombre, id_categoria) VALUES ('Shorts algodon', 2);
INSERT INTO subcategorias (nombre, id_categoria) VALUES ('Buzos rusticos', 3);
INSERT INTO subcategorias (nombre, id_categoria) VALUES ('Buzos frisa', 3);
INSERT INTO subcategorias (nombre, id_categoria) VALUES ('Camperas rusticas', 4);
INSERT INTO subcategorias (nombre, id_categoria) VALUES ('Joggin frisa', 5);

INSERT INTO talles (nombre) VALUES ('S');
INSERT INTO talles (nombre) VALUES ('M');
INSERT INTO talles (nombre) VALUES ('L');
INSERT INTO talles (nombre) VALUES ('XL');
INSERT INTO talles (nombre) VALUES ('XXL');
INSERT INTO talles (nombre) VALUES ('XXXL');
INSERT INTO talles (nombre) VALUES ('XXXXL');
INSERT INTO talles (nombre) VALUES ('XXXXXL');

INSERT INTO tiposVenta (nombre) VALUES ('Minorista');
INSERT INTO tiposVenta (nombre) VALUES ('Mayorista');