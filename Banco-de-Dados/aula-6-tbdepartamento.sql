-- 'Enter' até pedir a senha padrão do pgadmin
DROP TABLE IF EXISTS tbdepartamento;
--
CREATE TABLE IF NOT EXISTS tbdepartamento (
	iddepartamento INTEGER PRIMARY KEY,
	nome VARCHAR(20) NOT NULL
);
--
INSERT INTO tbdepartamento VALUES (1, 'Estoque');
SELECT * FROM tbdepartamento;
--
BEGIN;
--
INSERT INTO tbdepartamento VALUES (2, 'RH');
SELECT * FROM tbdepartamento;
--
ROLLBACK;
--
SELECT * FROM tbdepartamento;
--
BEGIN:
--
INSERT INTO tbdepartamento
VALUES (3, 'Compras');
SELECT * FROM tbdepartamento;
--
COMMIT:
SELECT * FROM tbdepartamento;
