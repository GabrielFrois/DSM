-- Ex 1: Fazer uma consulta para listar a quantidade de cursos por unidade. Apresente o resultado ordenado em ordem alfabética. 
-- Renomear as colunas para Fatec e Quantidade. O resultado terá 75 registros. Dica: use o termo group by e função agrupadora count.
SELECT unidade AS Fatec, COUNT(curso) AS Quantidade 
FROM tbcurso
GROUP BY Fatec
ORDER BY Fatec ASC;

-- Ex 2: Alterar a consulta do Exercício 1 para mostrar o resultado ordenado em ordem decrescente de quantidade.
-- O resultado terá 75 registros. Dica: ordene pela quantidade.
SELECT unidade AS Fatec, COUNT(curso) AS Quantidade 
FROM tbcurso
GROUP BY Fatec
ORDER BY Quantidade DESC;

-- Ex 3: Alterar a consulta do Exercício 2 para mostrar apenas o registro que possui a maior quantidade.
-- O resultado terá 1 registro. Dica: use o termo limit.
SELECT unidade AS Fatec, COUNT(curso) AS Quantidade 
FROM tbcurso
GROUP BY Fatec
ORDER BY Quantidade DESC
LIMIT 1;

-- Ex 4: Alterar a consulta do Exercício 3 para mostrar apenas o registro que possui a segunda maior quantidade.
-- O resultado terá 1 registro. Dica: use o termo offset.
SELECT unidade AS Fatec, COUNT(curso) AS Quantidade 
FROM tbcurso
GROUP BY Fatec
ORDER BY Quantidade DESC
LIMIT 1
OFFSET 1;

-- Ex 5: Alterar a consulta do Exercício 1 para mostrar apenas as unidades que possuem exatamente três cursos.
-- O resultado terá 9 registros. Dica: use o termo having.
SELECT unidade AS Fatec, COUNT(curso) AS Quantidade 
FROM tbcurso
GROUP BY Fatec
HAVING COUNT(curso) = 3
ORDER BY Fatec ASC;

-- Ex 6: Fazer uma consulta para listar a quantidade de cursos por turno e unidade. Apresente o resultado ordenado em ordem alfabética. Renomear as colunas para Fatec e Quantidade.
-- O resultado terá 211 registros.
SELECT unidade AS Fatec, COUNT(curso) AS Quantidade 
FROM tbcurso
GROUP BY Fatec, turno
ORDER BY Fatec ASC;

-- Ex 7: Alterar a consulta do Exercício 6 para listar somente as unidades que possuem cinco cursos no mesmo turno.
-- O resultado terá 7 registros.
SELECT unidade AS Fatec, COUNT(curso) AS Quantidade 
FROM tbcurso
GROUP BY Fatec, turno
HAVING COUNT(curso) = 5
ORDER BY Fatec ASC;

-- Ex 8: Alterar a consulta do Exercício 6 para listar somente o resultado de São José dos Campos.
-- O resultado terá 3 registros
SELECT unidade AS Fatec, COUNT(curso) AS Quantidade 
FROM tbcurso
WHERE municipio = 'São José dos Campos'
GROUP BY Fatec, turno
ORDER BY Fatec ASC;

-- Ex 9: Alterar a consulta do Exercício 8 para listar a quantidade total de vagas por turno.
-- O resultado terá 3 registros. Dica: use a função sum.
SELECT unidade AS Fatec, turno, SUM(vaga)
FROM tbcurso
WHERE municipio = 'São José dos Campos'
GROUP BY Fatec, turno, vaga
ORDER BY Fatec ASC;

-- Ex 10: Fazer uma consulta para listar a quantidade total de vagas por turno considerando todas as unidades e cursos.
-- O resultado terá 4 registros.
SELECT turno, SUM(vaga)
FROM tbcurso
GROUP BY turno
ORDER BY turno ASC;
