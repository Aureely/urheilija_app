CREATE DATABASE urheilijat CHARACTER SET utf8mb4;
USE urheilijat;

CREATE TABLE urheilija (
  id INT AUTO_INCREMENT PRIMARY KEY,
  etunimi VARCHAR(100) NOT NULL,
  sukunimi VARCHAR(100) NOT NULL,
  kutsumanimi VARCHAR(100),
  syntymavuosi DATE,
  paino DECIMAL(5,1),
  kuva_url VARCHAR(250),
  laji VARCHAR(100),
  saavutukset TEXT
);