-- Ex 1: Fazer uma consulta para listar os cursos disponíveis no município de Jacareí. Use como filtro no termo
-- where da cláusula somente o nome do município. Apresente o resultado ordenado em ordem alfabética.
-- Renomear a coluna para Curso. Observação: você sabe apenas o nome do município, ou seja, você não sabe que o id da unidade é 33.
-- O resultado terá 3 registros.
SELECT curso.nome AS "Curso" FROM tbcurso AS curso, tbunidade AS unidade, tbcurso_por_unidade AS cpu
WHERE unidade.id = cpu.idunidade -- Faz a junção entre tbunidade e tbcurso_por_unidade onde os IDs da unidade correspondem
AND curso.id = cpu.idcurso -- Faz a junção entre tbcurso e tbcurso_por_unidade onde os IDs dos cursos correspondem
AND unidade.municipio = 'Jacareí'
ORDER BY curso.nome;

-- Ex 2: Alterar a consulta do Exercício 1 para mostrar o turno de cada curso.
-- O resultado terá 3 registros.
SELECT curso.nome AS "Curso", turno.nome AS "Turno" 
FROM tbcurso AS curso, tbunidade AS unidade, tbcurso_por_unidade AS cpu, tbturno AS turno
WHERE unidade.id = cpu.idunidade
AND curso.id = cpu.idcurso
AND turno.id = cpu.idturno
AND unidade.municipio = 'Jacareí'
ORDER BY curso.nome;

-- Ex 3:  Fazer uma consulta para listar as unidades que possuem o curso de Gestão Financeira. Apresente o
-- resultado ordenado em ordem alfabética e evitar nomes repetidos. Renomear a coluna para Unidade.
-- Observação: você sabe apenas o nome do curso, ou seja, você não sabe que o id do curso.
-- O resultado terá 3 registros. Dica: use o termo distinct para evitar repetições
SELECT DISTINCT unidade AS "Unidade" FROM tbcurso AS curso, tbunidade AS unidade, tbcurso_por_unidade AS cpu
WHERE unidade.id = cpu.idunidade
AND curso.id = cpu.idcurso
AND curso.nome = 'Gestão Financeira'
ORDER BY unidade;

-- Ex 4: Fazer uma consulta para listar os turnos que possuem o curso de Gestão Financeira. Apresente o
-- resultado ordenado em ordem alfabética e evitar nomes repetidos. Renomear a coluna para Turno.
-- Observação: você sabe apenas o nome do curso, ou seja, você não sabe que o id do curso.
-- O resultado terá 2 registros. Dica: use o termo distinct para evitar repetições.
SELECT DISTINCT turno.nome AS "Turno" FROM tbcurso AS curso, tbturno AS turno, tbcurso_por_unidade AS cpu
WHERE turno.id = cpu.idturno
AND curso.id = cpu.idcurso
AND curso.nome = 'Gestão Financeira'
ORDER BY turno.nome;

-- Ex 5: Fazer uma consulta para listar a quantidade de cursos por turno. Apresente o resultado ordenado em
-- ordem alfabética e renomear as colunas para Turno e Quantidade.
-- O resultado terá 4 registros. Dica: use o termo group by e a função agrupadora count.
SELECT t.nome AS "Turno", COUNT(c.id) AS "Quantidade"
FROM tbturno AS t, tbcurso_por_unidade AS cpu, tbcurso AS c
WHERE t.id = cpu.idturno AND c.id = cpu.idcurso
GROUP BY "Turno"
ORDER BY "Turno";

-- Ex 6: Fazer uma consulta para listar a quantidade de vagas por turno. Apresente o resultado ordenado em
-- ordem alfabética e renomear as colunas para Turno e Vagas.
-- O resultado terá 4 registros. Dica: use o termo group by e a função agrupadora sum.
SELECT t.nome AS "Turno", SUM(vaga) as "Vagas"
FROM tbturno AS t, tbcurso_por_unidade AS cpu
WHERE t.id = cpu.idturno
GROUP BY "Turno"
ORDER BY "Turno";

-- Ex 7: Fazer uma consulta para listar os turnos de cada unidade. Apresente o resultado ordenado em ordem
-- alfabética e renomear as colunas para Unidade e Turno.
-- O resultado terá 211 registros. Dica: use o termo group by.
SELECT unidade AS "Unidade", t.nome AS "Turno"
FROM tbturno AS t, tbcurso_por_unidade AS cpu, tbunidade AS u
WHERE t.id = cpu.idturno AND u.id = cpu.idunidade
GROUP BY "Unidade", "Turno"
ORDER BY "Unidade";

-- Ex 8: Alterar a consulta do Exercício 7 para incluir a quantidade de cursos por turno.
-- O resultado terá 211 registros. Dica: use o termo group by e a função agrupadora count.
SELECT u.unidade AS "Unidade", t.nome AS "Turno", COUNT(cpu.idcurso) AS "Cursos"
FROM tbturno AS t, tbcurso_por_unidade AS cpu, tbunidade AS u, tbcurso AS c
WHERE t.id = cpu.idturno AND u.id = cpu.idunidade AND c.id = cpu.idcurso
GROUP BY "Unidade", "Turno"
ORDER BY "Unidade";

-- Ex 9: Alterar a consulta do Exercício 8 para listar somente os registros que possuem 5 cursos por turno.
-- O resultado terá 7 registros. Dica: use os termos group by e having, e a função agrupadora count.
SELECT u.unidade AS "Unidade", t.nome AS "Turno", COUNT(cpu.idcurso) AS "Cursos"
FROM tbturno AS t, tbcurso_por_unidade AS cpu, tbunidade AS u, tbcurso AS c
WHERE t.id = cpu.idturno AND u.id = cpu.idunidade AND c.id = cpu.idcurso
GROUP BY "Unidade", "Turno"
HAVING COUNT(cpu.idcurso) = 5
ORDER BY "Unidade";

-- Ex 10: Alterar a consulta do Exercício 9 para listar somente os registros do turno matutino.
--O resultado terá 2 registros. Dica: adicione a comparação no termo where para filtrar matutino.
SELECT u.unidade AS "Unidade", t.nome AS "Turno", COUNT(cpu.idcurso) AS "Cursos"
FROM tbturno AS t, tbcurso_por_unidade AS cpu, tbunidade AS u, tbcurso AS c
WHERE t.id = cpu.idturno AND u.id = cpu.idunidade AND c.id = cpu.idcurso AND t.nome = 'matutino'
GROUP BY "Unidade", "Turno"
HAVING COUNT(cpu.idcurso) = 5
ORDER BY "Unidade";
