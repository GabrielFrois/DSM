-- Ex 1: Fazer uma consulta para listar os registros da tbfaculdade.
-- O resultado terá 50 registros. Dica: use os termos select e from.
SELECT * FROM tbfaculdade;

-- Ex 2: Fazer uma consulta para listar os registros da tbfaculdade em ordem decrescente de município.
-- O resultado terá 50 registros. Dica: use os termos select, from e order by.
SELECT * FROM tbfaculdade
ORDER BY id DESC;

-- Ex 3: Fazer uma consulta para listar o registro da tbfaculdade que está no município de Jacareí.
-- O resultado terá 1 registro. Dica: use os termos select, from e where.
SELECT * FROM tbfaculdade
WHERE municipio = 'Jacareí';

-- Ex 4: Fazer uma consulta para listar os registros da tbfaculdade que não possuem número.
-- O resultado terá 4 registros. Dica: use os termos select, from e where, e o operador is null.
SELECT * FROM tbfaculdade
WHERE numero IS NULL;

-- Ex 5: Fazer uma consulta para listar os registros da tbfaculdade que possuem o nome do município começando pela letra f.
-- O resultado terá 3 registros. Dica: use os termos select, from e where, e o operador like ou ilike.
SELECT * FROM tbfaculdade
WHERE municipio ILIKE 'f%';

-- Ex 6: : Fazer uma consulta para listar os registros da tbfaculdade que estão em um bairro que possui o termo vila.
-- O resultado terá 11 registros. Dica: use os termos select, from e where, e o operador like ou ilike.
SELECT * FROM tbfaculdade
WHERE bairro ILIKE '%Vila%';

-- Ex 7: Fazer uma consulta para listar os registros da tbfaculdade que possuem o CEP com os três últimos dígitos sendo zero.
-- O resultado terá 6 registros. Dica: use os termos select, from e where, e o operador like.
SELECT * FROM tbfaculdade
WHERE cep LIKE '%000';

-- Ex 8: Fazer uma consulta para listar os registros da tbfaculdade que possuem o dígito 5 na 2ª posição do CEP.
-- O resultado terá 3 registros. Dica: use os termos select, from e where, e o operador like.
SELECT * FROM tbfaculdade
WHERE cep LIKE '_5%';

-- Ex 9: Fazer uma consulta para listar os registros da tbfaculdade que possuem o dígito 5 na 2ª posição e o dígito 2 na penúltima posição do CEP.
-- O resultado terá 1 registro. Dica: use os termos select, from e where. Use o operador like.
SELECT * FROM tbfaculdade
WHERE cep LIKE '_5%' AND cep LIKE '%2_';

-- Ex 10: Fazer uma consulta para listar os registros da tbfaculdade que possuem exatamente dois dígitos no número.
-- O resultado terá 7 registros. Dica: use os termos select, from e where, e o operador like.
SELECT * FROM tbfaculdade
WHERE numero LIKE '__';
