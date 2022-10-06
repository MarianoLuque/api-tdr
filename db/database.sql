CREATE DATABASE IF NOT EXISTS tdr;

USE tdr;

CREATE TABLE tiposVenta(
    id_tipo_venta INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(25) NOT NULL,
    PRIMARY KEY(id_tipo_venta)
);

CREATE TABLE proveedores(
    id_proveedor INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(25) NOT NULL,
    telefono VARCHAR(20),
    PRIMARY KEY(id_proveedor)
);

CREATE TABLE formasDePago(
    id_forma_pago INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(25) NOT NULL,
    PRIMARY KEY(id_forma_pago)
);

CREATE TABLE colores(
    id_color INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(25) NOT NULL,
    rgb VARCHAR(10) NOT NULL,
    PRIMARY KEY(id_color)
);

CREATE TABLE talles(
    id_talle INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(25) NOT NULL,
    PRIMARY KEY(id_talle)
);

CREATE TABLE categorias(
    id_categoria INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(25) NOT NULL,
    PRIMARY KEY(id_categoria)
);

CREATE TABLE subcategorias(
    id_subcategoria INT NOT NULL AUTO_INCREMENT,
    id_categoria INT NOT NULL,
    nombre VARCHAR(25) NOT NULL,
    PRIMARY KEY(id_subcategoria),
    FOREIGN KEY(id_categoria) REFERENCES categorias(id_categoria)
);

CREATE TABLE articulos (
  id_articulo INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  descripcion VARCHAR(250) NOT NULL,
  stock INT NOT NULL,
  id_color INT NOT NULL,
  id_talle INT NOT NULL,
  id_categoria INT NOT NULL,
  precio_menor DECIMAL(5,2) NOT NULL,
  id_proveedor INT NOT NULL,
  PRIMARY KEY(id_articulo),
  FOREIGN KEY (id_color) REFERENCES colores(id_color),
  FOREIGN KEY (id_talle) REFERENCES talles(id_talle),
  FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria),
  FOREIGN KEY (id_proveedor) REFERENCES proveedores(id_proveedor)
);

CREATE TABLE ventas(
    id_venta INT NOT NULL AUTO_INCREMENT,
    id_forma_pago INT NOT NULL,
    id_tipo_venta INT NOT NULL,
    monto_total INT NOT NULL,
    fecha_venta DATE NOT NULL,
    PRIMARY KEY(id_venta),
    FOREIGN KEY (id_forma_pago) REFERENCES formasDePago(id_forma_pago),
    FOREIGN KEY (id_tipo_venta) REFERENCES tiposVenta(id_tipo_venta)
);

CREATE TABLE detallesVentas(
    id_venta INT NOT NULL,
    id_articulo INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(5,2),
    dto_por_mayor DECIMAL(5,2),
    PRIMARY KEY(id_venta, id_articulo),
    FOREIGN KEY (id_venta) REFERENCES ventas(id_venta),
    FOREIGN KEY (id_articulo) REFERENCES articulos(id_articulo)
);

CREATE TABLE imagenesPorArticulo(
    nro_imagen INT NOT NULL,
    id_articulo INT NOT NULL,
    image_path VARCHAR(250) NOT NULL,
    PRIMARY KEY(nro_imagen, id_articulo),
    FOREIGN KEY (id_articulo) REFERENCES articulos(id_articulo)
);

CREATE TABLE pedidos(
    id_pedido INT NOT NULL AUTO_INCREMENT,
    id_proveedor INT NOT NULL,
    monto_total INT NOT NULL,
    fecha_pedido DATE NOT NULL,
    PRIMARY KEY(id_pedido),
    FOREIGN KEY (id_proveedor) REFERENCES proveedores(id_proveedor)
);

CREATE TABLE detallesPedidos(
    id_pedido INT NOT NULL,
    id_articulo INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(5,2),
    PRIMARY KEY(id_pedido, id_articulo),
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
    FOREIGN KEY (id_articulo) REFERENCES articulos(id_articulo)
);

