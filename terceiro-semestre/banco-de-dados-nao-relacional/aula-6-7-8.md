# Aulas 6, 7 e 8

## Aula 6 - Consultas Avançadas e Agregações no MongoDB

### O Aggregation Framework
A agregação no MongoDB permite transformar e analisar documentos e funciona através de um *pipeline* (sequência de estágios), onde cada estágio processa os dados e os passa para o próximo. É considerado o equivalente ao `GROUP BY` e `HAVING` do SQL.

**Estrutura básica:**
```js
db.colecao.aggregate([
  { estágio 1 },
  { estágio 2 },
  ...
])
```

### Principais Estágios do Pipeline

- **$match**: Filtra os documentos, similar ao `WHERE` no SQL.  
  ```js
  { $match: { localizacao: "São Paulo" } }
  ```
  Equivalente SQL: `WHERE localizacao = 'São Paulo'`

- **$group**: Agrupa documentos e aplica funções de agregação (`$avg`, `$sum`, etc.).  
  ```js
  { $group: { _id: "$cidade", mediaTemp: { $avg: "$temperatura" } } }
  ```
  Equivalente SQL: `SELECT cidade, AVG(temperatura) FROM leituras GROUP BY cidade`

- **$sort**: Ordena os documentos (`1` crescente, `-1` decrescente).  
  ```js
  { $sort: { temperatura: -1 } }
  ```
  Equivalente SQL: `ORDER BY temperatura DESC`

- **$project**: Seleciona apenas os campos desejados.  
  ```js
  { $project: { _id: 0, nome: 1, localizacao: 1 } }
  ```
  Equivalente SQL: `SELECT nome, localizacao FROM estacoes`

- **$limit**: Limita o número de documentos retornados.  
  ```js
  { $limit: 3 }
  ```
  Equivalente SQL: `LIMIT 3`

- **$skip**: Ignora um número de documentos iniciais (usado para paginação).  
  ```js
  { $skip: 2 }
  ```
  Equivalente SQL: `OFFSET 2`

**Exemplo de pipeline completo:**  
Filtrar leituras de São Paulo (`$match`), agrupar por sensor e calcular a média (`$group`), ordenar pela média (`$sort`) e limitar a 3 resultados (`$limit`).

### Filtros Complexos e Operadores Adicionais

**Operadores Lógicos:**
- `$and`: Todas as condições devem ser verdadeiras. Ex: leituras de Fortaleza **E** temperatura > 32
- `$or`: Pelo menos uma condição deve ser verdadeira. Ex: leituras de Salvador **OU** Recife
- `$not`: Nega uma condição. Ex: temperatura que **NÃO** seja maior que 30
- `$nor`: Nenhuma das condições deve ser verdadeira. Ex: leituras que **NÃO** sejam de São Paulo **NEM** de Curitiba

**Outros Operadores:**
- `$gt`: Maior que. Ex: `temperatura: { $gt: 30 }`
- `$exists`: Verifica se um campo existe. Ex: `manutencao: { $exists: true }`
- `$type`: Verifica o tipo de dado de um campo. Ex: `localizacao: { $type: "string" }`

### CRUD Avançado (Operadores de Atualização)

- `$set`: Adiciona ou altera um campo. Ex: `{ $set: { manutencao: "pendente" } }`
- `$inc`: Incrementa um valor numérico. Ex: `{ $inc: { medições: 5 } }`
- `$unset`: Remove um campo. Ex: `{ $unset: { sensores: "" } }`
- `$rename`: Renomeia um campo. Ex: `{ $rename: { "cidade": "localizacao" } }`
- `replaceOne`: Substitui o documento inteiro por um novo

### Boas Práticas e Otimização

- Sempre usar `$match` no início do pipeline
- Usar `$project` para selecionar apenas os campos necessários
- Criar índices em campos usados frequentemente em filtros
- Preferir agregações no banco em vez de processar na aplicação
- Evitar usar `$skip` sem `$limit`

## Aula 7 - Integração com Aplicações Externas e APIs (MongoDB + Node.js)

### Conceitos Fundamentais

- **API (Application Programming Interface):** Interface que permite comunicação entre sistemas
- **API REST:** Padrão de arquitetura usando métodos HTTP: `GET`, `POST`, `PUT`, `DELETE`

### Configuração do Ambiente e Estrutura

1. Instalar Node.js (versão LTS)
2. Criar diretório do projeto (ex: `api-meteorologica`)
3. Inicializar projeto: `npm init -y`
4. Instalar dependências: `npm install express mongoose nodemon cors`
5. Estrutura típica:
```
/server.js
/package.json
/routes
/models
/controllers
```

### Implementação da API (CRUD)

1. **Conexão (server.js)**  
```js
mongoose.connect("mongodb://127.0.0.1:27017/estacao_meteorologica");
app.use(express.json());
```

2. **Modelo/Schema (models/Leitura.js)**  
```js
const leituraSchema = new mongoose.Schema({
  cidade: String,
  sensor: String,
  valor: Number,
  data: Date
});
module.exports = mongoose.model("Leitura", leituraSchema);
```

3. **Rotas (routes/leituras.js)**
- Listar: `GET /leituras`
- Inserir: `POST /leituras`
- Atualizar: `PUT /leituras/:id`
- Excluir: `DELETE /leituras/:id`

4. **Conexão das Rotas (server.js)**  
```js
const leituraRoutes = require('./routes/leituras');
app.use("/leituras", leituraRoutes);
```

### Tópicos Adicionais

- **Consumo de API Externa:** Usando `axios` para buscar dados de APIs
- **Boas Práticas:** Validar dados, tratamento de erros, usar `async/await`, separar responsabilidades, `nodemon` e `dotenv`
- **Autenticação:** JWT para proteção de rotas

## Aula 8 - Monitoramento, Backup e Segurança no MongoDB

### 1. Segurança no MongoDB

- **Autenticação:**
```yaml
security:
  authorization: enabled
```
- Criação de usuário:
```js
db.createUser({
  user: "usuario",
  pwd: "senha",
  roles: [...]
});
```
- Conexão Node.js: `mongodb://admin:123456@localhost:27017/?authSource=admin`
- **Boas práticas:** Não usar `admin`, usar `.env`

- **Autorização (Roles):** Criar usuários com permissões mínimas
- **Criptografia:** Em repouso e em trânsito, hash de senha com `crypto`

### 2. Backup e Restauração

- **mongodump / mongorestore**
```bash
mongodump --db estacao_meteorologica --out C:ackups
mongorestore --db estacao_meteorologica C:ackups\...
```

- **JSON legível**
```bash
mongoexport --db ... --out leituras.json
mongoimport --db ... --file leituras.json
```

- **Backups Automáticos:** Agendar com `node-cron` e `child_process`

### 3. Monitoramento

- **mongostat:** Estatísticas em tempo real
- **Logs do MongoDB:** Ex.: `/var/log/mongodb/mongod.log`
- **Mongoose:** Eventos `connected`, `disconnected` e `error`

### Erros Comuns e Boas Práticas

- **Erros a evitar:** Usar `admin`, deixar porta aberta, não testar backups, ignorar logs
- **Boas práticas:** Backups diários, cópias na nuvem, testar restauração periodicamente
