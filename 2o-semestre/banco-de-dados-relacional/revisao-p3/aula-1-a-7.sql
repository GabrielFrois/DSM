-- ex 1:
DROP DATABASE IF EXISTS loja_virtual;
CREATE DATABASE loja_virtual;

CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE produtos (
    id_produto INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL
);

CREATE TABLE pedidos (
    id_pedido INT PRIMARY KEY,
    id_cliente INT NOT NULL,
    data_pedido DATE NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

CREATE TABLE itens_pedido (
    id_item INT PRIMARY KEY,
    id_pedido INT NOT NULL,
    id_produto INT NOT NULL,
    quantidade INT NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
    FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
);

-- ex 2:
INSERT INTO clientes (id_cliente, nome, email) VALUES
  (1, 'João Silva', 'joao.silva@email.com'),
  (2, 'Maria Oliveira', 'maria.oliveira@email.com'),
  (3, 'Ana Luiza', 'ana.luiza@email.com');

INSERT INTO produtos (id_produto, nome, preco) VALUES
  (1, 'Notebook', 3500.00),
  (2, 'Mouse Gamer', 150.00),
  (3, 'Teclado Mecânico', 250.00);

INSERT INTO pedidos (id_pedido, id_cliente, data_pedido) VALUES
  (1, 1, '2025-06-20'),
  (2, 2, '2025-06-21');

INSERT INTO itens_pedido (id_item, id_pedido, id_produto, quantidade) VALUES
  (1, 1, 1, 1),
  (2, 1, 2, 2),
  (3, 2, 3, 1),
  (4, 2, 2, 1);

-- ex 3:
SELECT 
  c.nome AS cliente,
  p.nome AS produto,
  ip.quantidade
FROM itens_pedido ip
INNER JOIN pedidos pd ON ip.id_pedido = pd.id_pedido
INNER JOIN clientes c ON pd.id_cliente = c.id_cliente
INNER JOIN produtos p ON ip.id_produto = p.id_produto;

-- ex 4:
SELECT 
  c.nome AS cliente,
  pd.id_pedido,
  pd.data_pedido
FROM clientes c
LEFT JOIN pedidos pd ON c.id_cliente = pd.id_cliente;

-- ex 5:
SELECT 
  p.nome AS produto,
  COALESCE(SUM(ip.quantidade), 0) AS total_vendido
FROM produtos p
LEFT JOIN itens_pedido ip ON p.id_produto = ip.id_produto
GROUP BY p.nome
ORDER BY total_vendido DESC;

-- ex 6:
UPDATE produtos
SET preco = 65.00
WHERE nome = 'Mouse Gamer';

-- ex 7:
SELECT 
  c.nome AS cliente,
  COALESCE(SUM(p.preco * ip.quantidade), 0) AS total_gasto
FROM clientes c
LEFT JOIN pedidos pd ON c.id_cliente = pd.id_cliente
LEFT JOIN itens_pedido ip ON pd.id_pedido = ip.id_pedido
LEFT JOIN produtos p ON ip.id_produto = p.id_produto
GROUP BY c.nome
ORDER BY total_gasto DESC;
