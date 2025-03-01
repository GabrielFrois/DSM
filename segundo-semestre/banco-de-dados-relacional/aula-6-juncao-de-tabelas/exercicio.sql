CREATE TABLE cursos (id_curso SERIAL PRIMARY KEY, nome VARCHAR(100) NOT NULL);
CREATE TABLE alunos (id_aluno SERIAL PRIMARY KEY, nome VARCHAR(100) NOT NULL, idade INT, 
id_curso INT REFERENCES cursos(id_curso));

INSERT INTO cursos (nome) VALUES ('Engenharia'), ('Computação');
INSERT INTO alunos (nome, idade, id_curso) VALUES ('Carlos Almeida', 19, 1), ('Fernanda Costa', 20, 2);

SELECT alunos.nome AS Nome, cursos.nome AS Curso FROM alunos
INNER JOIN cursos ON alunos.id_aluno = cursos.id_curso;

INSERT INTO alunos (nome, idade, id_curso) VALUES ('Roberto', 22, null);

SELECT alunos.nome, cursos.nome AS Curso FROM alunos
LEFT JOIN cursos ON alunos.id_aluno = cursos.id_curso;
