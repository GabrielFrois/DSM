-- Exercício 2:
drop table if exists tblivro;
drop table if exists tbautor;

create table if not exists tbautor(
   	id integer not null primary key,
   	nome varchar not null,
	nacionalidade varchar not null
);
create table if not exists tblivro(
   	isbn varchar not null,
   	titulo varchar not null,
	ano_publicacao integer not null,
	id_autor integer not null,
	primary key (isbn, id_autor),
	foreign key (id_autor) references tbautor(id)
);

-- Exercício 3:
insert into tbautor(id, nome, nacionalidade)
values
(1,'George R. R. Martin', 'Americano'),
(2,'J. R. R. Tolkien', 'Britânico'),
(3,'J. K. Rowling', 'Britânico'),
(4,'Fiódor Dostoiévski', 'Russo'),
(5,'Miguel de Cervantes', 'Espanhol'),
(6,'Jane Austen', 'Britânico'),
(7,'Gabriel García Márquez', 'Colombiano');

insert into tblivro(isbn, titulo, ano_publicacao, id_autor)
values
(8556510787,'A Guerra dos Tronos', 1996, 1),
(8556510787,'A Guerra dos Tronos', 1996, 2),
(9788845292613,'O Senhor dos Anéis', 1954, 2),
(8532511015,'Harry Potter e a Pedra Filosofal', 1997, 3),
(8573266465,'Crime e Castigo', 1866, 4),
(8532287441,'Dom Quixote', 1605, 5),
(9781428108325,'Orgulho e Preconceito', 1813, 6),
(9788501012074,'Cem Anos de Solidão', 1967, 7);

-- Exercício 4:
select livro.isbn as "ISBN", livro.titulo as "Título", 
livro.ano_publicacao as "Ano de Publicação", 
autor.id as "ID", autor.nome as "Nome", autor.nacionalidade as "Nacionalidade"
from tbautor as autor, tblivro as livro
where autor.id = livro.id_autor;

-- Exercício 5:
select livro.isbn as "ISBN", livro.titulo as "Título", 
livro.ano_publicacao as "Ano de Publicação", 
autor.id as "ID", autor.nome as "Nome", autor.nacionalidade as "Nacionalidade"
from tbautor as autor, tblivro as livro
where autor.id = livro.id_autor
and livro.isbn = '8556510787';


-- Resolução correta:
-- atividade 2 criando a tabela
DROP TABLE IF EXISTS livros_has_Autores;
DROP TABLE IF EXISTS autores, livros;

CREATE TABLE autores (
  idAutores INTEGER NOT NULL,
  nome VARCHAR(30) NULL,
  nacionalidade VARCHAR(30) NULL,
  PRIMARY KEY(idAutores)
);

CREATE TABLE livros (
  isbn BIGINT NOT NULL,
  titulo  VARCHAR(255) NULL,
  anodepubli VARCHAR(4) NULL,
  PRIMARY KEY(isbn)
);

CREATE TABLE livros_has_Autores (
  Livros_ISBN BIGINT NOT NULL,
  Autores_idAutores INTEGER NOT NULL,
  PRIMARY KEY(Livros_ISBN, Autores_idAutores)
);

-- Atividade 3 Inserindo autores 
insert into autores(idautores,nome,nacionalidade)
values
(1,'George R. R. Martin', 'Americano'),
(2,'J. R. R. Tolkien', 'Britânico'),
(3,'J. K. Rowling', 'Britânico'),
(4,'Fiódor Dostoiésvski', 'Russo'),
(5,'Miguel de Cervantes', 'Espanhol'),
(6,'Jane Austen', 'Britânico'),
(7,'Gabriel García Márquez', 'Colombiano');

--Inserindo dados da tabela de livros
insert into livros(isbn,titulo,anodepubli)
values
(8556510787,'A Guerra dos Tronos', 1996),
(9788845292613,'O Senhor dos Anéis', 1954),
(8532511015,'Hary Potter e a Pedra Filosofal', 1997),
(8573266465,'Crime Castigo', 1866),
(8532287441,'Dom Quixote', 1605),
(9781428108325,'Orgulho e Preconceito', 1813),
(9788501012074,'Cem Anos de Solidão', 1967);

--Inserir dados na tabela de relacionamento
insert into Livros_has_Autores
values
(8556510787,1),
(8556510787 , 2),
(9788845292613 , 2),
(8532511015 , 3),
(8573266465 , 4),
(8532287441 , 5),
(9781428108325 , 6),
(9788501012074 , 7);

-- Atividade 4 Lista de todos os Registros Armazenados
SELECT 
    livros.isbn AS "ISBN", 
    livros.titulo AS "Título", 
    livros.anodepubli AS "Ano de Publicação", 
    autores.idautores AS "ID", 
    autores.nome AS "Nome", 
    autores.nacionalidade AS "Nacionalidade"
FROM 
	livros, autores, livros_has_autores
WHERE 
	livros.isbn = livros_has_autores.livros_isbn 
  	AND autores.idautores = livros_has_autores.autores_idautores

-- Atividade 5 Consultando somente os autores da Guerra dos Tronos
SELECT 
    autores.nome AS "Nome do Autor"
FROM 
    livros, autores, livros_has_autores
WHERE 
    livros.titulo = 'A Guerra dos Tronos'
    AND livros.isbn = livros_has_autores.livros_isbn
    AND autores.idautores = livros_has_autores.autores_idautores;
