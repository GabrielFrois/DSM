DROP TABLE IF EXISTS tbpessoa;

CREATE TABLE IF NOT EXISTS tbpessoa(
	id INTEGER PRIMARY KEY,
	nome VARCHAR(40) NOT NULL,
	mail VARCHAR(30),
	idade INTEGER
);

INSERT INTO tbpessoa(id,nome,mail,idade)
VALUES
(1, 'Ana Maria', 'ana@teste.com', 22),
(2, 'Pedro Souza', NULL, 25),
(3, 'Mara Silva', 'mara@teste.com', 27);

SELECT * FROM tbpessoa;

-- Não é obrigatório manter o nome das colunas quando todos são preenchidos
INSERT INTO tbpessoa
VALUES
(4, 'Lucas Naves', 'lucas@teste.com', 25),
(5, 'Ivo Gomes', NULL, 29);
SELECT * FROM tbpessoa;

--Os campos nulos não são obrigatórios na cláusula, porém, deve-se informar o nome das colunas
INSERT INTO tbpessoa(id,nome)
VALUES
(6, 'Maria Ribeiro'),
(7, 'Otávio Neves');
SELECT * FROM tbpessoa;

--Os valores podem ser apresentados em qualquer ordem de registro, mas os nomes das colunas devem ser especificados
INSERT INTO tbpessoa(mail, id, idade, nome)
VALUES
('carla@teste.com', 8, 24, 'Carla Silva'),
('joao@teste.com', 9, 23, 'João Santos');
SELECT * FROM tbpessoa;
