#Conexão com PostgreSQL e SQLite

## Configuração do Projeto PostgreSQL

### 1. Preparação do Projeto

1. Crie uma pasta chamada `postgresql` (ou outro nome sem caracteres especiais).
2. Abra a pasta no **VS Code**.
3. No terminal do VS Code, execute:

```bash
npm init -y
npm i express
npm i -D @types/express
npm i dotenv
npm i pg
npm i -D @types/pg
npm i -D ts-node ts-node-dev typescript
tsc --init
```

4. Crie um arquivo `.gitignore` na raiz do projeto e adicione:

```
node_modules
```

5. Crie um arquivo `.env` com o seguinte conteúdo:

```
PORT=3001
```

---

### 2. Estrutura de Pastas e Arquivos

Organize o projeto da seguinte forma:

```
postgresql/
├── src/
│   ├── config/
│   │   └── database.ts
│   ├── routes/
│   │   └── index.ts
│   ├── server.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
```

---

### 3. Configuração do Banco de Dados (PostgreSQL)

- Acesse o **pgAdmin**.
- Crie um novo banco de dados (ex: `aula_conexao`).
- No VS Code, configure a conexão no arquivo `src/config/database.ts`.

Exemplo de código para conexão:

```typescript
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

export const db = new Pool({
  user: "seu_usuario",
  host: "localhost",
  database: "aula_conexao",
  password: "sua_senha",
  port: 5432,
});
```

---

### 4. Servidor Express

Exemplo de um servidor básico em `src/server.ts`:

```typescript
import express from "express";
import dotenv from "dotenv";
import { router } from "./routes";

dotenv.config();

const app = express();
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```

---

### 5. Rotas

Crie o arquivo `src/routes/index.ts`:

```typescript
import { Router } from "express";
import { db } from "../config/database";

export const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT NOW()");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Erro ao conectar ao banco de dados." });
  }
});
```

---

### 6. Scripts no package.json

No seu `package.json`, adicione:

```json
"scripts": {
  "dev": "ts-node-dev src/server.ts"
}
```

Para iniciar o servidor em modo de desenvolvimento:

```bash
npm run dev
```

---

# Observações Finais

- Garanta que o PostgreSQL esteja rodando localmente antes de iniciar o servidor.
- As credenciais no `database.ts` devem ser ajustadas conforme seu ambiente local.
