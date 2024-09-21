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
WHERE municipio LIKE 'F%';
