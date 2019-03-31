DROP TABLE IF EXISTS Article;
CREATE TABLE Article (
  Id INT  PRIMARY KEY auto_increment,
  text VARCHAR(255),
);

INSERT Article (text) values ("text1");
INSERT Article (text) values ("text2");
INSERT Article (text) values ("text3");
