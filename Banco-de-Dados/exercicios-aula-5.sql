-- Exercício 1:
DROP TABLE IF EXISTS endereco;
DROP TABLE IF EXISTS bairro;
DROP TABLE IF EXISTS cidade;

-- Exercício 2:
CREATE TABLE bairro (
 	idbairro INTEGER NOT NULL,
 	cidade_idcidade INTEGER  NOT NULL,
	nome VARCHAR(20) NULL,
  	PRIMARY KEY(idbairro)
  );

CREATE TABLE cidade (
  	idcidade INTEGER NOT NULL,
  	nome VARCHAR NULL,
  	uf CHAR(2) NULL,
  	PRIMARY KEY(idcidade)
);

CREATE TABLE endereco (
	idendereco INTEGER NOT NULL,
  	bairro_idbairro INTEGER NOT NULL,
  	logradouro VARCHAR(30) NULL,
  	numero INTEGER NULL,
  	cep INTEGER NULL,
  	PRIMARY KEY(idendereco)
);

-- Exercício 3:
CREATE TABLE tarefa (
  	idtarefa INTEGER NOT NULL ,
  	idtarefapai INTEGER NOT NULL,
  	nome VARCHAR(30) NOT NULL,
  	valor FLOAT NOT NULL,
  	PRIMARY KEY(idtarefa)
);

-- Exercício 4
CREATE TABLE ocupa (
	veiculo_placa CHAR(7) NOT NULL,
  	vaga_nome VARCHAR(10) NOT NULL,
  	valor FLOAT NULL,
  	inicio TIMESTAMP NULL,
  	fim TIMESTAMP NULL,
  	PRIMARY KEY(veiculo_placa, vaga_nome)
);

CREATE TABLE vaga (
  	nome VARCHAR(10) NOT NULL,
  	PRIMARY KEY(nome)
);

CREATE TABLE veiculo (
  	placa CHAR(7) NOT NULL,
  	marca VARCHAR(20) NULL,
  	modelo VARCHAR(20) NULL,
  	PRIMARY KEY(placa)
);

-- Exercício 5
CREATE TABLE imovel (
  idimovel INTEGER NOT NULL,
  idinquilino INTEGER NOT NULL,
  idproprietario INTEGER NOT NULL,
  descricao VARCHAR(50) NULL,
  PRIMARY KEY(idimovel)
);

CREATE TABLE pessoa (
  idpessoa INTEGER NOT NULL,
  npme VARCHAR(40) NULL,
  PRIMARY KEY(idpessoa)
);
