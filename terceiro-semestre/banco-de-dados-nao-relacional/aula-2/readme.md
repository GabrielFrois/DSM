# Aula 2

## Listar banco de dados:
```
show dbs
```

## Selecionar um banco de dados:
```
use <nome_banco>
```

## Criar coleção: 
```
db.createCollection('<nome>’)
```

## Inserir dados:
```
db.dados_meteorologicos.insertOne({cidade: "Lisboa", temperatura: 25, umidade: 70, data: "2025-02-10"})
```

## Visualizar dados:
```
db.dados_meteorologicos.find()
db.dados_meteorologicos.find({cidade: "Lisboa"})
```

## Atualizar:
```
db.dados_meteorologicos.updateOne({cidade: "Lisboa"}, {$set:{temperatura:30}})
```

## Deletar:
```
db.dados_meteorologicos.deleteOne({cidade: "Lisboa"})
```

## Embedding:
```
db.clientes.insertOne({
  "nome": "José",
  "compras": [
    {"produto": "Notebook", "valor": 3500},
    {"produto": "Mouse", "valor": 150}
  ]
});
```

## Referencing:
```
db.usuarios.insertOne({"_id": 1, "nome": "Maria"});
db.compras.insertOne({"usuario_id": 1, "produto": "Teclado", "valor": 300});
```
