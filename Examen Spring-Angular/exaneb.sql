create table producto ( 
id_producto int(11) NOT NULL auto_increment,
nombre varchar(255) NOT NULL,
descripcion varchar(255) NOT NULL,
imagen varchar(255) NOT NULL,
precio double NOT NULL,
cantidad double NOT NULL,
primary key(id_producto)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


create table categoria ( 
id_categoria int(11) NOT NULL auto_increment,
nombre varchar(255) NOT NULL,
descripcion varchar(255) NOT NULL,
primary key(id_categoria)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


create table marca ( 
id_marca int(11) NOT NULL auto_increment,
nombre varchar(255) NOT NULL,
proveedor varchar(255) NOT NULL,
primary key(id_marca)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



INSERT INTO marca ( nombre, proveedor) VALUES 
( 'Castrol','CASTROL VECTON'),
( 'Mobil','Distribuidores - Mobil'),
( 'Federal','Distribuidores Latinoamérica y Caribe'),
( 'MOBIL ','Distribuidores - Mobil'),
( 'Kendal ','Kendal Import'),
( 'Prestone','Prestone ®'),
( 'Valvoline','Distribuidores - Valvoline');


INSERT INTO producto ( nombre, descripcion, imagen, precio, cantidad) VALUES
(' Delvac ', 'aceite para motores a diesel de muy alto desempeño', 'Delvac.png', 150.0 , 4   ),
('Aceite-FS', 'Aceite ligero para carros ligeros', 'AceiteFS.png', 50.0 , 5  ),
('Castrol Maxpro', 'Aceite ligero para carrosHecho en EE. UU. nuevo', 'Castrol Maxpro.png', 80.0 , 8  ),
('MOBIL GREASE MP', 'es una grasa a base de jabón de litio, ', 'MOBILGREASEMP.png', 25.00, 20 ),
(' POWER STEERING FLUID', 'Mantiene la suave operación de la dirección', 'POWER.png', 15.00 , 15  ),
('FILTRO ACEITE KENDALL W', 'TOYOTA mod: Corolla 1.3XL, 1.3GL, 1.6GL, Tercel', 'KENDALL.png', 22.00, 7  ),
('C-2524/1 HYUNDAI', 'FILTRO AIRE C-2524/1 HYUNDAI ACCENT PRIME 1.5 DIESEL 3 CIL', 'C-2524.png', 75.00 ,  8  );



INSERT INTO categoria ( nombre, descripcion) VALUES 
( 'Aceite de motor diesel','Se aplican a mecanismos que pueden ser lubricados con poca frecuencia'),
( 'Aceite de dirección','Para que este tipo de cambio funcione correctamente se necesita un aceite especial denominado aceite ATF.'),
( 'Grasas','Este tipo de aceites incorporan aditivos especiales para evitar que las gomas y tuberías de caucho del circuito'),
( 'Filtros de aceite','os filtros de aceite juegan un papel esencial en el funcionamiento de nuestro motor'),
( 'Filtros de aire','El filtro de aire está diseñado para proteger el motor de la contaminación directa producida por contaminantes externos');