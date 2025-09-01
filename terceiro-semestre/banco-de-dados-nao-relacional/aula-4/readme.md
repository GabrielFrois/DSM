# Aula 4 - Operações CRUD Avançadas e Paginação 

## Inserindo documentos na coleção
```
use dbalunos

db.alunos.drop()

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

## Operadores Lógicos

### `$and`
Permite buscar documentos que atendam a ambas as condições especificadas.
```
db.alunos.find(
  {
    $and:[
      { idade: {$gt:22} },
      { idade: {$lt:26} }
    ]
  },
  {
  nome:true,
  idade:true,
  _id:false
  }
)
```

### `$or` e `$and` combinados
```
db.alunos.find(
  {
    $or:[
      {
        $and: [
          { idade: { $gte: 21 } },
          { idade: { $lte: 23 } }
        ]
      },
      { idade: {$gt:28} }
      ]
  },
  {
    nome:true,
    idade:true,
    _id:false
  }
)
```

### `$nor`
Une as cláusulas da consulta com um NOR lógico e retorna todos os
documentos que não correspondem a ambas as cláusulas. 
```
db.alunos.find(
  {
    $nor:[
      { idade: {$lte:22} },
      { idade: {$gte:26} }
    ]
  },
  {
    nome:true,
    idade:true,
    _id:false
  }
)
```

### `$not`
Inverte o efeito da expressão.
```
db.alunos.find(
  {
    idade: { $not:{$gte:23} }
  },
  {
    nome:true,
    idade:true,
    _id:false
  }
)
```

### `$$exists`
Seleciona os documentos que possuem o campo especificado. 
```
db.alunos.find(
  {
    idade:{ $exists: true }
  },
  {
    nome:true,
    idade:true,
    _id:false
  }
)
```

### `$type`
Seleciona o documento se o campo possui o tipo especificado. 
```
db.alunos.find(
  {
    idade:{ $type: "number" }
  },
  {
    nome:true,
    idade:true,
    _id:false
  }
)
```

## Atualizar documentos na coleção

### `updateOne`
Atualize a idade para 30 do 1º documento que possui idade maior que 25
```
db.alunos.updateOne(
  {
    idade:{ $gt: 25 }
  },
  {
    $set: { idade:30 }
  }
)
```
O operador `$set` é usado para atualizar o campo idade para 30.

### `updateMany`
Subtraia 10 na idade de todos os documentos que possuem idade menor que 25
```
db.alunos.updateMany(
  {
    idade:{ $lt: 25 }
  },
  {
    $inc: { idade:-10 }
  }
)
```
O operador `$inc` é usado para atualizar o campo idade usando como base o seu valor atual, ou seja, a nova idade será 10 anos menor que a idade atual.

### `replaceOne`
Substitua o documento que possui o nome João pelo documento fornecido
```
db.alunos.replaceOne(
  {
    nome: "João"
  },
  {
    nome: "José",
    idade: 44,
    genero: "M"
  }
)
```

### `$rename`
Renomeie o campo idade para age dos documentos que satisfazem a query
```
db.alunos.updateMany(
  {
    idade:{ $lt: 25 }
  },
  {
    $rename: { "idade": "age" }
  }
)
```

### `$set`
O operador `$set` pode ser utilizado também para criar um campo se ele não existir.  
Adicione o campo peso em todos os documentos da coleção
```
db.alunos.updateMany(
  {},
  {
    $set:{peso:70}
  }
)
```

### `$unset`
Remova o campo idade dos documentos que possuem idade acima de 25
```
db.alunos.updateMany(
  {
    idade:{ $gt: 25 }
  },
  {
    $unset: { "idade": "" }
  }
)
```
O valor associado ao campo que desejamos remover deve ser uma string vazia "".  
O motivo de usar uma string vazia "" no `$unset` é uma convenção do MongoDB.

## Excluir documentos da coleção 

### `deleteOne`
Remova o 1º documento que possui idade acima de 25
```
db.alunos.deleteOne(
  {
    idade:{ $gt: 25 }
  }
)
```

### `deleteMany`
Remova todos os documentos que possuem idade abaixo de 25
```
db.alunos.deleteMany(
  {
    idade:{ $lt: 25 }
  }
)
```
