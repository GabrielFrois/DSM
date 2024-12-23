-- Exercício 1: Fazer uma única cláusula SQL para inserir na tbaluno os registros mostrados ao lado.
INSERT INTO tbaluno(id, nome)
VALUES
(1,'Ana Maria'),
(2,'Luiz Carlos'),
(3, 'Maria Silva'),
(4, 'Renato Rodrigues'),
(5, 'Carla Santiago');

-- Exercício 2: Fazer uma única cláusula SQL para inserir na tbdisciplina os registros mostrados ao lado.
INSERT INTO tbdisciplina(id, nome, carga)
VALUES
(1,'Modelagem de Banco de Dados', 80),
(2,'Design Digital', 80),
(3, 'Estrutura de Dados', NULL),
(4, 'Experiência do Usuário', 40),
(5, 'Aprendizagem de Máquina', NULL),
(6, 'Inglês', NULL);

-- Exercício 3: Fazer uma única cláusula SQL para inserir na tbmatricula os registros mostrados ao lado.
INSERT INTO tbmatricula
VALUES
(3, 1, 7.8),
(1, 5, 8.4),
(1, 2, 7.5),
(6, 2, NULL),
(3, 4, NULL),
(5, 4, 8.9),
(6, 4, NULL);
-- Consultar a tabela:
SELECT d.nome AS "Disciplina", a.nome AS "Aluno", nota FROM tbaluno AS a, tbmatricula AS m, tbdisciplina AS d
WHERE a.id = m.idaluno AND m.iddisciplina = d.id;

-- Exercício 4: Fazer uma cláusula SQL para somar meio ponto para os alunos que tiverem nota.
-- Dica: use o comando update e o operador is not null.
UPDATE tbmatricula 
SET nota = nota + 0.5
WHERE nota IS NOT NULL;

-- Exercício 5: Fazer uma cláusula SQL para somar 0,2 pontos para os alunos que tiverem nota na disciplina de Modelagem de Banco de Dados.
-- Dicas: Use o comando update, use o operador is not null, inclua a tbdisciplina no termo from, faça a ligação da tbmatricula e tbdisciplina no termo where.
UPDATE tbmatricula as m
SET nota = nota + 0.2
FROM tbdisciplina AS d
WHERE d.id = m.iddisciplina AND d.nome = 'Modelagem de Banco de Dados';

-- Exercício 6: Fazer uma cláusula SQL para colocar a nota 5 para o Luiz Carlos na disciplina de Inglês I.
-- Dicas: Use o comando update, inclua a tbdisciplina e tbaluno no termo from, faça a ligação da tbmatricula e tbdisciplina no termo where, faça a ligação da tbmatricula e tbaluno no termo where.
--
UPDATE tbmatricula AS m
SET nota = 5.0
FROM tbaluno AS a, tbdisciplina AS d
WHERE a.id = m.idaluno AND d.id = m.iddisciplina
AND a.nome = 'Luiz Carlos' AND d.nome = 'Inglês I';
-- Consulta:
SELECT d.nome, m.nota FROM tbaluno AS a, tbmatricula AS m, tbdisciplina AS d
WHERE a.id = m.idaluno AND d.id = m.iddisciplina
AND a.nome = 'Luiz Carlos' AND d.nome = 'Inglês I'
ORDER BY a.nome, d.nome;

-- Exercício 7: Fazer uma cláusula SQL para colocar nota zero para os alunos que estão sem nota.
-- Dica: use o comando update e o operador is null.
UPDATE tbmatricula AS m
SET nota = 0.0
FROM tbaluno AS a, tbdisciplina AS d
WHERE a.id = m.idaluno AND d.id = m.iddisciplina
AND nota IS NULL;
-- Consulta:
SELECT d.nome, a.nome, m.nota FROM tbaluno AS a, tbmatricula as m, tbdisciplina AS d
WHERE a.id = m.idaluno AND d.id = m.iddisciplina
ORDER BY a.nome, d.nome;

-- Exercício 8: Fazer uma cláusula SQL remover da tbmatricula os registros que possuem nota zero.
-- Dica: use o comando delete.
DELETE FROM tbmatricula
WHERE nota = 0.0;

-- Exercício 9: Fazer uma cláusula SQL remover da tbmatricula o registro que possui Inglês I e Luiz Carlos.
-- Dica: use o comando delete.
DELETE FROM tbmatricula as m
USING tbaluno AS a, tbdisciplina AS d
WHERE a.id = m.idaluno AND d.id = m.iddisciplina
AND a.nome = 'Luiz Carlos' AND d.nome = 'Inglês I';

-- Exercício 10: Fazer uma cláusula SQL remover da tbmatricula todos os registros.
-- Dica: use o comando delete.
DELETE FROM tbmatricula;
