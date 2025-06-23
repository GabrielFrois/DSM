-- ex 1:
CREATE OR REPLACE VIEW vw_clientes_pedidos AS
SELECT 
  c.nome AS cliente,
  p.data_pedido
FROM clientes c
JOIN pedidos p ON c.id_cliente = p.id_cliente;

-- ex 2:
CREATE OR REPLACE VIEW vw_total_pedidos AS
SELECT 
  c.nome AS cliente,
  COALESCE(SUM(pr.preco * ip.quantidade), 0) AS total_gasto
FROM clientes c
LEFT JOIN pedidos p ON c.id_cliente = p.id_cliente
LEFT JOIN itens_pedido ip ON p.id_pedido = ip.id_pedido
LEFT JOIN produtos pr ON ip.id_produto = pr.id_produto
GROUP BY c.nome;

-- ex 3:
CREATE OR REPLACE PROCEDURE inserir_cliente(p_nome TEXT, p_email TEXT)
LANGUAGE plpgsql AS $$
BEGIN
  INSERT INTO clientes (nome, email)
  VALUES (p_nome, p_email);
END;
$$;

-- ex 4:
CREATE OR REPLACE PROCEDURE registrar_pedido(p_id_cliente INT)
LANGUAGE plpgsql AS $$
BEGIN
  INSERT INTO pedidos (id_cliente, data_pedido)
  VALUES (p_id_cliente, CURRENT_DATE);
END;
$$;

-- ex 5:
CREATE OR REPLACE PROCEDURE total_pedidos_cliente(p_id_cliente INT)
LANGUAGE plpgsql AS $$
DECLARE
  total INT;
BEGIN
  SELECT COUNT(*) INTO total
  FROM pedidos
  WHERE id_cliente = p_id_cliente;

  RAISE NOTICE 'Total de pedidos: %', total;
END;
$$;

-- ex 6:
CREATE TABLE log_pedidos (
  id_log SERIAL PRIMARY KEY,
  id_cliente INT,
  data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE OR REPLACE FUNCTION log_novo_pedido()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO log_pedidos (id_cliente)
  VALUES (NEW.id_cliente);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_log_pedido
AFTER INSERT ON pedidos
FOR EACH ROW
EXECUTE FUNCTION log_novo_pedido();

-- ex 7:
CREATE OR REPLACE FUNCTION verifica_quantidade()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.quantidade > 10 THEN
    RAISE EXCEPTION 'Quantidade excede o limite permitido (10 unidades).';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_verifica_estoque
BEFORE INSERT ON itens_pedido
FOR EACH ROW
EXECUTE FUNCTION verifica_quantidade();

-- ex 8:
CREATE OR REPLACE VIEW vw_pedidos_ultimos_7_dias AS
SELECT *
FROM pedidos
WHERE data_pedido >= CURRENT_DATE - INTERVAL '7 days';

-- ex 9:
CREATE OR REPLACE PROCEDURE aumentar_precos()
LANGUAGE plpgsql AS $$
BEGIN
  UPDATE produtos
  SET preco = preco * 1.10;
END;
$$;

-- ex 10:
CREATE TABLE log_clientes (
  id_log SERIAL PRIMARY KEY,
  id_cliente INT,
  nome_antigo TEXT,
  email_antigo TEXT,
  data_alteracao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE OR REPLACE FUNCTION log_alteracao_cliente()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.nome IS DISTINCT FROM OLD.nome OR NEW.email IS DISTINCT FROM OLD.email THEN
    INSERT INTO log_clientes (id_cliente, nome_antigo, email_antigo)
    VALUES (OLD.id_cliente, OLD.nome, OLD.email);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_log_cliente
BEFORE UPDATE ON clientes
FOR EACH ROW
EXECUTE FUNCTION log_alteracao_cliente();
