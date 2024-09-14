-- Exercício 1:

DROP TABLE IF EXISTS endereco;

DROP TABLE IF EXISTS bairro;

DROP TABLE IF EXISTS cidade;


-- Exercício 2:
CREATE TABLE cidade (
    idcidade INTEGER PRIMARY KEY,
    nome VARCHAR(40) NOT NULL,
    uf CHAR(2) NOT NULL
);

CREATE TABLE bairro (
    idbairro INTEGER PRIMARY KEY,
    nome VARCHAR(20) NOT NULL,
    idcidade INTEGER NOT NULL,
    FOREIGN KEY (idcidade) REFERENCES cidade(idcidade)
);

CREATE TABLE endereco (
    idendereco INTEGER PRIMARY KEY,
    logradouro VARCHAR(30) NOT NULL,
    numero INTEGER NOT NULL,
    cep VARCHAR(10) NOT NULL,
    idbairro INTEGER NOT NULL,
    FOREIGN KEY (idbairro) REFERENCES bairro(idbairro)
);


-- Exercício 3:
CREATE TABLE tarefa (
    idtarefa INTEGER PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    valor FLOAT NOT NULL,
    idtarefapai INTEGER,
    FOREIGN KEY (idtarefapai) REFERENCES tarefa(idtarefa)
);


-- Exercício 4
CREATE TABLE veiculo (
    placa CHAR(7) PRIMARY KEY,
    marca VARCHAR(20) NOT NULL,
    modelo VARCHAR(20) NOT NULL
);

CREATE TABLE vaga (
    nome VARCHAR(10) PRIMARY KEY
);

CREATE TABLE ocupa (
	PRIMARY KEY (placa_veiculo, nome_vaga),
    FOREIGN KEY (placa_veiculo) REFERENCES veiculo(placa),
    FOREIGN KEY (nome_vaga) REFERENCES vaga(nome),
    placa_veiculo CHAR(7),
    nome_vaga VARCHAR(10),
    valor FLOAT NOT NULL,
    inicio TIMESTAMP NOT NULL,
    fim TIMESTAMP NOT NULL
);

-- Exercício 5
CREATE TABLE pessoa (
    idpessoa INTEGER PRIMARY KEY,
    nome VARCHAR(40) NOT NULL
);

CREATE TABLE imovel (
    idimovel INTEGER PRIMARY KEY,
    descricao VARCHAR(50) NOT NULL,
    idproprietario INTEGER NOT NULL,
    idinquilino INTEGER,
    FOREIGN KEY (idproprietario) REFERENCES pessoa(idpessoa),
    FOREIGN KEY (idinquilino) REFERENCES pessoa(idpessoa)
);
