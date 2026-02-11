# Aula 3 - Operações CRUD no MongoDB

## Comando `use`
```
use dbcursos
```
- Comando usado para especificar o banco de dados a ser usado
- criará o BD se ele não existir

## Listar o banco de dados
```
show databases
```

## Criando coleções
Para se criar um documento dentro do BD, primeiro cria-se uma coleção e automaticamente o documento é criado.  
Crie a coleção alunos no `bdcursos` com os campos: `nome`, `idade`, `genero`.
```
db.alunos.insertOne({
  nome: “Gabriela",
  idade: 21,
  genero: "F"
})
```

- `db`: faz referência ao bd atual (`dbcursos`)
- alunos: é a coleção que vamos inserir no bd. Ela será criada se não existir.
- `insertOne`: é o método que insere o documento na coleção aluno.
- O campo `_id` serve como identificador único. É gerado automaticamente a cada novo documento.
- Um `_id` específico pode ser fornecido durante a inserção. O _id é indexado para otimizar operações de busca e garantir a sua unicidade.

## Listando as coleções
```
show tables
show collections
```

## Inseririndo documentos na coleção

### `insertOne()` recebe um objeto `JSON` com os campos e valores do documento a ser inserido;
```
db.alunos.insertOne({
  nome: “Vitória",
  idade: 24,
  genero: "F"
})

```

### `insertMany()` recebe um array onde cada elemento é um objeto `JSON` com os campos e valores do documento a ser inserido.
```
db.alunos.insertMany([
  {
		nome: "Valdirene",
		idade: 20,
		genero: "F"
	},
  {
		nome: "Tiago",
		idade: 25,
		genero: "M"
	}
])
```

## Método e comando `drop`

- O método `drop` é usado para remover a coleção do BD:
```
db.alunos.drop()
show collections
```

- O comando `db.dropDatabase()` remove o BD em uso:
```
db.drop.database()
show databases
```

## Inserir documentos na coleção aluno
```
db.alunos.insertMany([
  { nome: "Pedro", idade: 25, genero: "M" },
  { nome: "Ana", idade: 20, genero: "F" },
  { nome: "Maria", idade: 21, genero: "F" },
  { nome: "Lucas", idade: 28, genero: "M" },
  { nome: "João", idade: 22, genero: "M" },
  { nome: "Renata", idade: 24, genero: "F" },
  { nome: "Paulo", idade: 23, genero: "M" },
  { nome: "Bruna", idade: 27, genero: "F" },
  { nome: "Irene", idade: 20, genero: "F" },
  { nome: "Roberto", idade: 21, genero: "M" },
  { nome: "Yuri",genero: "M" }
])
```

## Ler documentos na coleção
```
db.alunos.find()
```

## Consultas com critérios de seleção
### Liste todos os documentos da coleção alunos com gênero F e idade = 20:
```
db.alunos.find(
  {
    genero: "F",
    idade: 20
  }
)
```
- O método `find` recebe um objeto `JSON` com os critérios de filtragem. 

## Consultas com projeção de campos
### Liste apenas os nomes de todos os documentos da coleção alunos:
```
db.alunos.find(
  {},
  {
  nome: true, _id: false
  }
)
```
- O método `find` recebe um objeto `JSON` com os critérios de filtragem. 

## Consulta com opções
Liste os alunos ordenados por idade, ignorando os 2 primeiros documentos e mostrando os 4 últimos:
```
db.alunos.find(
  {},
  {
    nome:true,
    idade:true,
    _id:false
  },
  {
    sort:{ idade:1 },
    skip: 2,
    limit: 4
  }
)
```
- `sort`: especifica a ordenação dos documentos retornados (1 para ascendente e -1 para descendente).
- `skip`: pula um número especificado de documentos antes de começar a retornar os resultados.
- `limit`: limita o número de documentos retornados pela consulta ao valor especificado. 

## Consulta `findOne()`
Liste o primeiro documento da coleção alunos:
```
db.alunos.findOne()
```

## Consulta com critérios de seleção e projeção de campos
- Retorne o 1º documento da coleção que tenha o gênero F e idade = 20:
```
db.alunos.findOne(
  {
  genero: "F",
  idade: 20
  },
  {
    nome: true,
    _id: false
  }
)
```

## Operadores

- Os operadores de comparação são usados para realizar consultas mais específicas e filtrar documentos com base em critérios de comparação.
- São usados com os métodos `find` e `findOne()`.

### Operador de igualdade: `$eq` - comparador “igual a”
Liste os documentos que possuem idade = 20 e gênero = F:
```
db.alunos.find(
  {
		idade: {$eq: 20},
		genero: {$eq: "F"}
	},
  {
		nome: true,
		idade: true,
		_id: false
	}
)
```

### Operador: `$ne` - comparador “diferente de”
- Liste os documentos que não possuem idade = 20 e gênero =F:
```
db.alunos.find(
  {
		idade: {$ne: 20},
		genero: {$eq: "F"}
	},
  {
		nome: true,
		idade: true,
		_id: false
	}
)
```

### Operador: `$gt`, `$gte`, `$lt`, `$lte`
Comparadores “maior que”, “maior ou igual a”, “menor que” e “menor ou igual a”, respectivamente.  

- Liste os documentos de alunos que possuem idade entre 22 e 24 anos:
```
db.alunos.find(
  {
		idade: {$gte:22, $lte: 24}
	},
  {
		nome: true,
		idade: true,
		_id: false
	}
)
```

### Operador de intervalo: `$in` - corresponde a qualquer um dos valores especificados em um array
```
db.alunos.find(
  {
  	nome: {$in:["Maria", "João", "Bruna"]}
	},
  {
		nome: true,
		idade: true,
		_id: false
	}
)
```

### Operador de intervalo: `$nin`- não corresponde a nenhum dos valores especificados em um array. 
- Liste os documentos que não possuem o nome de alunos: Maria, João e Bruna:
```
db.alunos.find(
  {
		nome:{$nin:["Maria", "João", "Bruna"]}	
	},
  {
		nome: true,
		idade: true,
		_id: false
	}
)
```

### Operador de expressão regular: `$regex` - seleciona os documentos cujos valores correspondem a expressão regular especificada.
- Liste os documentos que possuem a letra “o” em qualquer parte do campo nome:
```
db.alunos.find(
  {
		nome:{$regex: /o/i}
	},
  {
		nome: true,
		idade: true,
		_id: false
	}
)
```
- O `i` indica que a expressão é insensível ao case da letra

## CRUD
### As 4 operações básicas de um banco de dados:
| Operação | Comando |
|----------|---------|
| Create | db.colecao.insertOne({...}) |
| Read | db.colecao.find({...}) |
| Update | db.colecao.updateOne({...}) |
| Delete | db.colecao.deleteOne({...}) |
