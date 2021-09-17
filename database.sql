create database if not exists cemaco;
use cemaco;
create table if not exists productos (
  id int not null AUTO_INCREMENT PRIMARY KEY,
  nombre varchar(500),
  precio DECIMAL(6, 2),
  img VARCHAR(500),
  tipo VARCHAR(100)
) engine = innodb;