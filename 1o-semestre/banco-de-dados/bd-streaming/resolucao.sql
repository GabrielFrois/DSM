-- Exercício 2:
DROP TABLE IF EXISTS usuarios;
DROP TABLE IF EXISTS filmes;
DROP TABLE IF EXISTS usuarios_has_filmes;

CREATE TABLE filmes (
  idfilmes INTEGER NOT NULL,
  titulo VARCHAR(255) NOT NULL,
  genero VARCHAR(255) NOT NULL,
  PRIMARY KEY(idfilmes)
);

CREATE TABLE usuarios (
  cpf VARCHAR(14) NOT NULL,
  nome VARCHAR(50) NOT NULL,
  celular VARCHAR(15) NOT NULL,
  PRIMARY KEY(cpf)
);

CREATE TABLE usuarios_has_filmes (
  usuarios_cpf VARCHAR(14) NOT NULL,
  filmes_idfilmes INTEGER NOT NULL,
  PRIMARY KEY(usuarios_cpf, filmes_idfilmes)
);

-- Exercício 3:
INSERT INTO usuarios(cpf, nome, celular)
VALUES
('123.456.789-00', 'Ana Oliveira', '(11) 98765-4321'),
('987.654.321-00', 'João Silva', '(21) 91234-5678'),
('456.789.123-00', 'Maria Santos', '(31) 99876-5432'),
('654.321.987-00', 'Pedro Costa', '(41) 97654-3210');

INSERT INTO filmes(idfilmes, titulo, genero)
VALUES
(101, 'Vingadores: Ultimato', 'Ação'),
(102, 'Interestelar', 'Ficção Científica'),
(103, 'O Senhor dos Anéis', 'Fantasia'),
(104, 'Matrix', 'Ficção Científica');

INSERT INTO usuarios_has_filmes
VALUES
('123.456.789-00', 101),
('987.654.321-00', 102),
('456.789.123-00', 103),
('123.456.789-00', 103),
('987.654.321-00', 104),
('654.321.987-00', 101),
('456.789.123-00', 104);

-- Exercício 4:
SELECT
	usuarios.cpf,
	usuarios.nome,
	usuarios.celular,
	filmes.idfilmes,
	filmes.titulo,
	filmes.genero
FROM
	usuarios, filmes, usuarios_has_filmes
WHERE
	usuarios.cpf = usuarios_has_filmes.usuarios_cpf
	AND filmes.idfilmes = usuarios_has_filmes.filmes_idfilmes;

-- Exercício 5:
SELECT 
    usuarios.nome
FROM 
    usuarios, filmes, usuarios_has_filmes
WHERE 
    filmes.titulo = 'O Senhor dos Anéis'
    AND usuarios.cpf = usuarios_has_filmes.usuarios_cpf
	AND filmes.idfilmes = usuarios_has_filmes.filmes_idfilmes;
