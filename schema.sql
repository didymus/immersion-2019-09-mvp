DROP DATABASE IF EXISTS db_steven;

CREATE DATABASE db_steven;

USE db_steven;

CREATE TABLE ip (
  id int NOT NULL AUTO_INCREMENT,
  -- host varchar(255) NOT NULL,
  ip varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE vulns (
  vulns varchar(255) NOT NULL,
  id int NOT NULL,
  FOREIGN KEY(id) REFERENCES ip(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/
