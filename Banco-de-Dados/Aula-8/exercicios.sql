-- Ex 1: Fazer uma consulta para listar os cursos disponíveis no município de Jacareí. Use como filtro no termo
-- where da cláusula somente o nome do município. Apresente o resultado ordenado em ordem alfabética.
-- Renomear a coluna para Curso. Observação: você sabe apenas o nome do município, ou seja, você não sabe que o id da unidade é 33.
-- O resultado terá 3 registros.


-- Ex 2: Alterar a consulta do Exercício 1 para mostrar o turno de cada curso.
-- O resultado terá 3 registros.


-- Ex 3:  Fazer uma consulta para listar as unidades que possuem o curso de Gestão Financeira. Apresente o
-- resultado ordenado em ordem alfabética e evitar nomes repetidos. Renomear a coluna para Unidade.
-- Observação: você sabe apenas o nome do curso, ou seja, você não sabe que o id do curso.
-- O resultado terá 3 registros. Dica: use o termo distinct para evitar repetições


-- Ex 4: Fazer uma consulta para listar os turnos que possuem o curso de Gestão Financeira. Apresente o
-- resultado ordenado em ordem alfabética e evitar nomes repetidos. Renomear a coluna para Turno.
-- Observação: você sabe apenas o nome do curso, ou seja, você não sabe que o id do curso.
-- O resultado terá 2 registros. Dica: use o termo distinct para evitar repetições.


-- Ex 5: Fazer uma consulta para listar a quantidade de cursos por turno. Apresente o resultado ordenado em
-- ordem alfabética e renomear as colunas para Turno e Quantidade.
-- O resultado terá 4 registros. Dica: use o termo group by e a função agrupadora count.


-- Ex 6: Fazer uma consulta para listar a quantidade de vagas por turno. Apresente o resultado ordenado em
-- ordem alfabética e renomear as colunas para Turno e Vagas.
-- O resultado terá 4 registros. Dica: use o termo group by e a função agrupadora sum.


-- Ex 7: Fazer uma consulta para listar os turnos de cada unidade. Apresente o resultado ordenado em ordem
-- alfabética e renomear as colunas para Unidade e Turno.
-- O resultado terá 211 registros. Dica: use o termo group by.


-- Ex 8: Alterar a consulta do Exercício 7 para incluir a quantidade de cursos por turno.
-- O resultado terá 211 registros. Dica: use o termo group by e a função agrupadora count.


-- Ex 9: Alterar a consulta do Exercício 8 para listar somente os registros que possuem 5 cursos por turno.
-- O resultado terá 7 registros. Dica: use os termos group by e having, e a função agrupadora count.


-- Ex 10: Alterar a consulta do Exercício 9 para listar somente os registros do turno matutino.
--O resultado terá 2 registros. Dica: adicione a comparação no termo where para filtrar matutino.
