# Aula 1 - Introdução ao Banco de Dados Não Relacional e MongoDB

## Pontos principais a destacar:
- **Estrutura flexível:** Diferente do modelo fixo de tabelas.
- **Escalabilidade horizontal:** Ideal para aplicações com grande volume de dados.
- **Performance em consultas específicas.**

## O que é o MongoDB?
- O MongoDB é um banco de dados orientado a documentos, onde cada registro é armazenado em formato JSON (ou BSON, que é uma versão binária de JSON).

## Diferença entre bancos relacionais (SQL) e não relacionais (NoSQL)
- **Relacionais:** usam tabelas com linhas e colunas (Ex.: MySQL, PostgreSQL).
- **Não relacionais:** armazenam dados de formas diferentes, como documentos (JSON), grafos ou colunas largas.

## Por que usar NoSQL?
- Escalabilidade horizontal
- Melhor desempenho para grandes volumes de dados
- Flexibilidade no esquema de dados

## Casos de uso comuns:
- Redes sociais
- Análise em tempo real
- Internet das Coisas (IoT)

## Características principais:
- Possui uma poderosa linguagem de consulta baseada em JSON.
- Armazena dados em formato BSON (uma versão binária do JSON).
- Armazena dados em documentos com estrutura flexível.
- Não possui esquema rígido (schema-free).
- Boa performance para dados sem esquema rígido.
- Suporta consultas ricas, agregações e replicação

## Vantagens:
- Fácil escalabilidade
- Escalável horizontalmente.
- Integração direta com aplicações web modernas

## Principais Componentes:
- **Coleções:** Equivalentes às tabelas em bancos relacionais.
- **Documentos:** Registros individuais que armazenam dados.

## Comandos Básicos:
- `show dbs`: Listar bancos de dados.
- `use <nome_banco>`: Selecionar um banco de dados.
- `db.createCollection('<nome>’)`: Criar uma coleção

## Demonstração rápida:
- Criar um banco de dados fictício:
```
use clima
```
- Criar uma coleção:
```
db.createCollection("dados_meteorologicos")
```

## Exemplo Prático

### Relacional (SQL):
| ID | Nome | Temperatura | Cidade |
|----|------|-------------|--------|
| 1 | João | 30°C | Lisboa |
| 2 | Maria | 25°C | Porto |

### Não Relacional (NoSQL - MongoDB):
```json
{"nome": "João", "temperatura": 30, "cidade": "Lisboa"}
{"nome": "Maria", "cidade": "Porto", "umidade": 60}
```

## Exemplo
 **Imagine um sistema para registrar dados meteorológicos:**
 ```json
{
  "cidade": "Lisboa",
  "temperatura": 28,
  "umidade": 60,
  "data": "2025-02-10"
}
```

## Vantagens:
- **Flexibilidade:** Não precisa de uma estrutura fixa
- **Escalabilidade:** Lida bem com grandes volumes de dados
```
show dbs                       # Lista bases de dados
use meteorologia               # Seleciona ou cria a base meteorologia
db.createCollection("clima")   # Cria uma coleção chamada "clima"
```
