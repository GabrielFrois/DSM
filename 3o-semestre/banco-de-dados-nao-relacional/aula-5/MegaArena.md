# MegaArena eSports

## Enunciado Geral
A MegaArena é uma plataforma de eSports que organiza torneios online e presenciais. 
Os jogadores podem se cadastrar, inscrever-se em torneios e registrar partidas disputadas. Você foi contratado como analista de banco de dados e deve modelar e implementar um sistema de gerenciamento da MegaArena no MongoDB.  
Sua tarefa é propor uma modelagem adequada (embedding x referencing), criar as coleções necessárias e realizar operações que validem a modelagem.

---

## Questão 1 – Criação do Banco
Crie o banco de dados megaArena com as coleções jogadores, torneios e partidas.
```javaScript
use megaarena

db.createCollection("jogadores")
db.createCollection("torneios")
db.createCollection("partidas")
```

---

## Questão 2 – Embedding
Modele uma versão alternativa onde os jogadores inscritos em um torneio fiquem incorporados diretamente dentro do documento torneio.
```javaScript
db.torneios.insertOne({
    "nome_torneio": "Campeonato Regional de Valorant",
    "data_inicio": ISODate("2025-10-20T18:00:00Z"),
    "premiacao": {
        "total": 5000.00,
        "moeda": "BRL"
    },
    "jogadores_inscritos": [
        {
            "jogador_id": ObjectId("67f89c63b4b8a3e9b4b12a01"), 
            "nickname": "FalleN",
            "nome_completo": "Gabriel Toledo",
            "equipe": "Imperial Esports"
        },
        {
            "jogador_id": ObjectId("67f89c63b4b8a3e9b4b12a02"),
            "nickname": "coldzera",
            "nome_completo": "Marcelo David",
            "equipe": "00 Nation"
        },
        {
            "jogador_id": ObjectId("67f89c63b4b8a3e9b4b12a03"),
            "nickname": "s1mple",
            "nome_completo": "Oleksandr Kostyliev",
            "equipe": "Natus Vincere"
        },
        {
            "jogador_id": ObjectId("67f89c63b4b8a3e9b4b12a04"),
            "nickname": "NovatoBR", 
            "nome_completo": "José Henrique",
            "equipe": "Equipe 07"
        }
    ],
    "status": "Inscrições Abertas"
})
```

---

## Questão 3 – Referencing
Modele uma versão alternativa onde cada torneio guarda apenas os IDs dos jogadores inscritos, mantendo-os em coleção separada.
```javaScript
db.jogadores.insertMany([
  {
    "_id": ObjectId("67f89c63b4b8a3e9b4b12a01"),
    "nickname": "FalleN",
    "nome_completo": "Gabriel Toledo",
    "equipe": "Imperial Esports",
    "pais": "Brasil"
  },
  {
    "_id": ObjectId("67f89c63b4b8a3e9b4b12a02"),
    "nickname": "coldzera",
    "nome_completo": "Marcelo David",
    "equipe": "00 Nation",
    "pais": "Brasil"
  },
  {
    "_id": ObjectId("67f89c63b4b8a3e9b4b12a03"),
    "nickname": "s1mple",
    "nome_completo": "Oleksandr Kostyliev",
    "equipe": "Natus Vincere",
    "pais": "Ucrânia"
  },
  {
    "_id": ObjectId("67f89c63b4b8a3e9b4b12a04"),
    "nickname": "NovatoBR", 
    "nome_completo": "José Henrique",
    "equipe": "Equipe 07",
    "pais": "Brasil"
    }
]);

db.torneios.insertOne({
    "nome_torneio": "ESL Pro League",
    "data_inicio": ISODate("2026-03-15T20:00:00Z"),
    "premiacao": {
        "total": 750000.00,
        "moeda": "USD"
    },
    "jogadores_ids": [
        ObjectId("67f89c63b4b8a3e9b4b12a01"),
        ObjectId("67f89c63b4b8a3e9b4b12a02"),
        ObjectId("67f89c63b4b8a3e9b4b12a03"),
        ObjectId("67f89c63b4b8a3e9b4b12a04")
    ],
    "status": "Agendado"
})
```

---

## Questão 4 – Justificativa de Modelagem
Explique em qual situação é melhor usar embedding e em qual é melhor usar referencing no cenário da MegaArena.  
**Resposta:**  
- Use Embedding quando a prioridade é a performance de leitura. É ideal para a página de um torneio, que precisa carregar seus detalhes e a lista de jogadores de uma só vez, com uma única consulta, sendo mais rápido para o usuário.
- Use Referencing quando a prioridade é a consistência dos dados. É ideal para gerenciar o perfil de um jogador, garantindo que suas informações sejam uma "fonte única da verdade". Qualquer atualização é feita em um único lugar, refletindo em todo o sistema.

---

## Questão 5 – Consulta
Liste todos os torneios cujo prêmio seja maior ou igual a 4000.
```javaScript
db.torneios.find(
    { "premiacao.total": { $gte: 4000 } }
).pretty()
```

---

## Questão 6 – Consulta Avançada com `$and`
Liste os jogadores do Brasil com idade maior que 21 anos.
```javaScript
db.jogadores.updateOne({ "nickname": "FalleN" }, { $set: { "pais": "Brasil", "idade": 34 } });
db.jogadores.updateOne({ "nickname": "coldzera" }, { $set: { "pais": "Brasil", "idade": 30 } });
db.jogadores.updateOne({ "nickname": "NovatoBR" }, { $set: { "pais": "Brasil", "idade": 19 } });

db.jogadores.find({
    "pais": "Brasil",
    "idade": { $gt: 21 }
}).pretty()
```

---

## Questão 7 – Operador `$exists`
Liste todos os jogadores que já possuem o campo nickname.
```javaScript
db.jogadores.find(
    { "nickname": { $exists: true } }
).pretty()
```

---

## Questão 8 – Atualização com `$set`
Atualize o torneio “Copa CS:GO” adicionando o campo status: "ativo".
```javaScript
db.torneios.insertOne({ "nome_torneio": "Copa CS:GO", "premiacao": { "total": 10000, "moeda": "BRL" }});

db.torneios.updateOne(
    { "nome_torneio": "Copa CS:GO" },
    { $set: { "status": "ativo" } }
)
```

---

## Questão 9 – Exclusão
Remova o jogador com nome Pedro.
```javaScript
db.jogadores.insertOne({ "nickname": "Pedrinho", "nome_completo": "Pedro" });

db.jogadores.deleteOne(
    { "nome_completo": "Pedro" }
)
```

---

## Questão 10 – Paginação
Liste os torneios ordenados pela premiação (decrescente), exibindo apenas o segundo torneio mais bem pago.
```javaScript
db.torneios.find()
    .sort({ "premiacao.total": -1 })
    .skip(1)
    .limit(1)
    .pretty()
```
