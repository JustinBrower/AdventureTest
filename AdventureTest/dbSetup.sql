CREATE TABLE IF NOT EXISTS accounts(
  id VARCHAR(255) NOT NULL primary key COMMENT 'primary key',
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
  name varchar(255) COMMENT 'User Name',
  email varchar(255) COMMENT 'User Email',
  picture varchar(255) COMMENT 'User Picture'
) default charset utf8 COMMENT '';
CREATE TABLE IF NOT EXISTS questions(
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  body varchar(1000),
  answer varchar(255),
  teacher VARCHAR(255)
) default charset utf8 COMMENT '';
CREATE TABLE IF NOT EXISTS teachers(
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(255),
  picture TEXT
) default charset utf8 COMMENT '';
CREATE TABLE IF NOT EXISTS phrases(
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  body varchar(255),
  teacher VARCHAR(255)
) default charset utf8 COMMENT '';
INSERT INTO
  questions (body, answer, teacher)
VALUES
  (
    'What color is the sky?',
    'Blue, probably',
    "jeremy"
  );
INSERT INTO
  teachers (name, picture)
VALUES
  (
    'jeremy',
    'https://thiscatdoesnotexist.com'
  );
INSERT INTO
  phrases (body, teacher)
VALUES
  ('Please adopt my cats', 'jeremy');