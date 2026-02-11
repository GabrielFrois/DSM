CREATE TABLE produtos (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(100),
	preco INTEGER,
	categoria VARCHAR(100)
);

INSERT INTO produtos (nome, preco, categoria)
VALUES
('Notebook', 4500.00, 'Eletrônicos'),
('Smartphone', 2500.00, 'Eletrônicos'),
('Cadeira Gamer', 850.00, 'Móveis'),
('Geladeira', 3200.00, 'Eletrodomésticos'),
('Fone de Ouvido', 200.00, 'Acessórios');

SELECT * FROM produtos;

SELECT * FROM produtos
WHERE categoria = 'Eletrônicos';

SELECT * FROM produtos
ORDER BY preco DESC;
