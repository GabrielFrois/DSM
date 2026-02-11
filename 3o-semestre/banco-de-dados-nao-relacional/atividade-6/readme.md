# Aula 6

## 1. Filtrar todas as leituras de Fortaleza acima de 30°C
```javascript
db.dados_meteorologicos.find({
  cidade: "Fortaleza",
  temperatura: { $gt: 30 }
})
```

## 2. Listar apenas nome e localização das estações
```javascript
db.dados_meteorologicos.find({}, { cidade: 1, _id: 0 })
```

## 3. Contar quantas leituras têm sensor "umidade"
```javascript
db.dados_meteorologicos.countDocuments({ umidade: { $exists: true } })
```

## 4. Agrupar leituras por cidade e exibir média de temperatura
```javacript
db.dados_meteorologicos.aggregate([
  {
    $group: {
      _id: "$cidade",
      media_temperatura: { $avg: "$temperatura" }
    }
  }
])
```

## 5. Ordenar as cidades pela maior temperatura média
```javacript
db.dados_meteorologicos.aggregate([
  {
    $group: {
      _id: "$cidade",
      media_temperatura: { $avg: "$temperatura" }
    }
  },
  {
    $sort: {
      media_temperatura: -1
    }
  }
])
```