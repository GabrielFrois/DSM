CREATE DATABASE Banco;
\c Banco;

CREATE TABLE Clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    saldo DECIMAL(15,2) DEFAULT 0.00
);

CREATE TABLE Transacoes (
    id SERIAL PRIMARY KEY,
    cliente_id INT,
    tipo VARCHAR(10) CHECK (tipo IN ('deposito', 'saque')) NOT NULL,
    valor DECIMAL(15,2) NOT NULL,
    data_transacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES Clientes(id) ON DELETE CASCADE
);

-- Inserindo clientes
INSERT INTO Clientes (nome, cpf, email, saldo) VALUES
('Carlos Silva', '111.222.333-44', 'carlos@email.com', 1500.00),
('Mariana Souza', '222.333.444-55', 'mariana@email.com', 2300.50),
('João Pereira', '333.444.555-66', 'joao@email.com', 1800.75),
('Ana Costa', '444.555.666-77', 'ana@email.com', 2500.00),
('Pedro Lima', '555.666.777-88', 'pedro@email.com', 1200.50),
('Fernanda Alves', '666.777.888-99', 'fernanda@email.com', 3100.75),
('Ricardo Mendes', '777.888.999-00', 'ricardo@email.com', 4100.25),
('Beatriz Rocha', '888.999.000-11', 'beatriz@email.com', 2950.30),
('Lucas Martins', '999.000.111-22', 'lucas@email.com', 1850.45),
('Juliana Duarte', '000.111.222-33', 'juliana@email.com', 2200.00);

-- Inserindo transações
INSERT INTO Transacoes (cliente_id, tipo, valor) VALUES
(1, 'deposito', 500.00), 
(1, 'saque', 200.00),
(1, 'deposito', 400.00), 
(1, 'saque', 150.00),
(2, 'deposito', 1000.00), 
(2, 'saque', 300.00),
(2, 'deposito', 700.00), 
(2, 'saque', 280.00),
(3, 'deposito', 700.00), 
(3, 'saque', 400.00),
(3, 'deposito', 600.00), 
(3, 'saque', 300.00),
(4, 'deposito', 900.00), 
(4, 'saque', 250.00),
(5, 'deposito', 1200.00), 
(5, 'saque', 500.00),
(6, 'deposito', 1500.00), 
(6, 'saque', 600.00),
(7, 'deposito', 2000.00), 
(7, 'saque', 800.00),
(8, 'deposito', 1800.00), 
(8, 'saque', 750.00),
(9, 'deposito', 2100.00), 
(9, 'saque', 900.00),
(10, 'deposito', 2300.00), 
(10, 'saque', 950.00);

-- Contar quantos clientes estão cadastrados no banco
SELECT COUNT(*) AS Total_clientes FROM Clientes;

-- Calcular o saldo total armazenado no banco
SELECT SUM(saldo) AS saldo_total FROM Clientes;

-- Descobrir a média dos saques feitos
SELECT AVG(valor) AS media_saques FROM Transacoes WHERE tipo = 'saque';
