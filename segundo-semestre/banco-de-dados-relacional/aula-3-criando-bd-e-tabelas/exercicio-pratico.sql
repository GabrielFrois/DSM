CREATE TABLE cursos (
	id_curso SERIAL PRIMARY KEY,
	nome VARCHAR(100) NOT NULL
);

CREATE TABLE alunos (
	id_aluno SERIAL PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	idade INT,
	id_curso INT REFERENCES cursos(id_curso)
);

INSERT INTO cursos (id_curso, nome)
VALUES (1, 'Engenharia');

INSERT INTO alunos (nome, idade, id_curso)
VALUES ('João Silva', 22, 1);

INSERT INTO cursos (id_curso, nome)
VALUES (2, 'Matemática');

INSERT INTO alunos (nome, idade, id_curso)
VALUES ('Maria Souza', 23, 2);

SELECT * FROM alunos;
