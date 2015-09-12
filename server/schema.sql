DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS rooms;

CREATE TABLE messages (
  username VARCHAR(30) DEFAULT 'anonymous', roomname VARCHAR(30) DEFAULT 'lobby', text VARCHAR(140)
);

-- CREATE TABLE messages (
--   P_Id int NOT NULL AUTO_INCREMENT, userID INT(4) DEFAULT 1, roomID INT(4) DEFAULT 1, text VARCHAR(140), PRIMARY KEY (P_Id)
-- );

-- CREATE TABLE users (
--   P_Id int NOT NULL AUTO_INCREMENT, username VARCHAR(30) DEFAULT 'anonymous', PRIMARY KEY (P_Id)
-- );

-- CREATE TABLE rooms (
--   P_Id int NOT NULL AUTO_INCREMENT, roomname VARCHAR(30) DEFAULT 'lobby', PRIMARY KEY (P_Id)
-- );

INSERT INTO messages VALUES (DEFAULT, DEFAULT, 'Hello there!');
INSERT INTO messages VALUES (DEFAULT, DEFAULT, 'Hey there!');

-- INSERT INTO messages VALUES (1, DEFAULT, DEFAULT, 'Hello there!');
-- INSERT INTO messages VALUES (2, DEFAULT, DEFAULT, 'Hey there!');

-- INSERT INTO users VALUES (1, 'anonymous!');

-- INSERT INTO rooms VALUES (1, 'lobby!');

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

