DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS rooms;

-- CREATE TABLE messages (
--   id int NOT NULL AUTO_INCREMENT, userID INT NOT NULL, text VARCHAR(140), roomID INT NOT NULL, PRIMARY KEY (id)
-- );

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT, 
  userid INT NOT NULL, 
  text VARCHAR(140), 
  roomname VARCHAR(30), 
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT, 
  username VARCHAR(30) NOT NULL, 
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  -- id int NOT NULL AUTO_INCREMENT, roomname VARCHAR(30) NOT NULL, PRIMARY KEY (id)
);

INSERT INTO messages VALUES (1, DEFAULT, DEFAULT, 'Hello there!');
INSERT INTO messages VALUES (2, DEFAULT, DEFAULT, 'Hey there!');

INSERT INTO users VALUES (1, 'anonymous!');

-- INSERT INTO rooms VALUES (1, 'lobby!');

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

