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
