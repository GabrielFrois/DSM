# Resumo das Aulas

## Aula 1 - Introdução a Typescript

### 1. Projeto TypeScript no VS Code
- Instale o TypeScript: `npm install -D typescript`
- Crie `tsconfig.json`: `npx tsc --init`
- Escreva arquivos `.ts` dentro da pasta `src/`
- Use o terminal embutido do VS Code para compilar e executar

### 2. Declaração de variável no TypeScript
```typescript
let nome: string = "João";
const idade: number = 25;
var ativo: boolean = true;
```
TypeScript exige que você declare o tipo das variáveis quando necessário.

### 3. Tipos de dados do TypeScript
- string, number, boolean
- any, unknown
- void, null, undefined
- array – string[] ou Array<string>
- tuple – [string, number]
- enum, object, never

### 4. União de tipos no TypeScript
Permite aceitar múltiplos tipos:
```typescript
let valor: string | number;
valor = "abc";
valor = 123;
```

### 5. Função no TypeScript
```typescript
function saudacao(nome: string): string {
  return `Olá, ${nome}!`;
}
```
Você define os tipos dos parâmetros e o tipo de retorno.

### 6. Export e import
Permite modularizar o código:

- em `soma.ts`:
```typescript
export function soma(a: number, b: number): number {
  return a + b;
}
```

- em `index.ts`:
```typescript
import { soma } from "./soma";
console.log(soma(3, 4));
```

## Aula 2 - Classes e Objetos

### 1. Estrutura de uma Classe no TypeScript
Uma classe define a estrutura de um objeto. Ela pode conter:
- Atributos (ou propriedades)
- Métodos (funções internas)
- Modificadores de acesso (public, private, protected)

**Exemplo:**
```typescript
class Pessoa {
  nome: string;
  idade: number;

  // Método
  apresentar(): string {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}
```

### 2. Construtor
O construtor é um método especial chamado automaticamente ao criar um objeto com `new`. Ele serve para inicializar os atributos da classe.

**Exemplo:**
```typescript
class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar(): string {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

// Criando objeto
const p1 = new Pessoa("João", 30);
console.log(p1.apresentar());
```

### 3. Diferença entre Tipos Primitivos e Objetos

| Característica     | Tipo Primitivo           | Objeto                 |
|--------------------|--------------------------|------------------------|
| Representa         | Valor simples            | Instância de classe    |
| Exemplo            | `string`, `number`, `boolean` | Pessoa, Carro, etc. |
| Comparação         | Por valor (`===`)        | Por referência         |
| Mutabilidade       | Imutável                 | Mutável                |
| Criado com `new`?  | Não                      | Sim                    |

**Exemplo:**
```typescript
let nome: string = "Maria"; // tipo primitivo
let idade: number = 25;

let pessoa = new Pessoa("Maria", 25); // objeto
```

### 4. Representação de uma Classe no Diagrama UML
UML (Unified Modeling Language) é uma forma visual de representar classes e seus relacionamentos.  

Estrutura UML de uma classe:
```lua
+------------------------+
|         Pessoa         |
+------------------------+
| - nome: string         |
| - idade: number        |
+------------------------+
| + apresentar(): string |
+------------------------+
```

**Símbolos UML**:
- `+` público (public)
- `-` privado (private)
- `#` protegido (protected)
- NomeClasse no topo, atributos no meio, métodos embaixo

**UML no Código**:
```typescript
class Pessoa {
  private nome: string;
  private idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public apresentar(): string {
    return `Olá, sou ${this.nome}.`;
  }
}
```

## Aula 3 - Herança

### 1. Herança
Herança permite que uma classe (chamada subclasse ou classe derivada) herde atributos e métodos de outra (a superclasse).  
Isso promove reuso de código e especialização de comportamento.

**Exemplo:**
```typescript
class Animal {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  emitirSom(): string {
    return `${this.nome} faz um som.`;
  }
}

class Cachorro extends Animal {
  latir(): string {
    return `${this.nome} está latindo: Au au!`;
  }
}

const dog = new Cachorro("Rex");
console.log(dog.emitirSom()); // Herdado
console.log(dog.latir());     // Método da subclasse
```

### 2. Sobrescrita (Override)
Sobrescrita ocorre quando a subclasse redefine um método da superclasse, alterando seu comportamento.

**Exemplo:**
```typescript
class Animal {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  emitirSom(): string {
    return `${this.nome} faz um som genérico.`;
  }
}

class Gato extends Animal {
  // Sobrescrevendo o método emitirSom
  emitirSom(): string {
    return `${this.nome} mia: Miau!`;
  }
}

const gato = new Gato("Mimi");
console.log(gato.emitirSom()); // Mimi mia: Miau!
```

### 3. Sobrecarga (Overload)
Sobrecarga permite declarar múltiplas assinaturas de um mesmo método, com diferentes quantidades ou tipos de parâmetros.  
O comportamento é implementado em um único corpo da função.

**Atenção:** No TypeScript, a sobrecarga funciona com assinaturas múltiplas e uma única implementação.  

**Exemplo:**
```typescript
class Calculadora {
  somar(a: number, b: number): number;
  somar(a: string, b: string): string;

  somar(a: any, b: any): any {
    return a + b;
  }
}

const calc = new Calculadora();
console.log(calc.somar(2, 3));       // 5 (number)
console.log(calc.somar("A", "B"));   // "AB" (string)
```

### 4. Polimorfismo
Polimorfismo significa “muitas formas”. Em POO, é a capacidade de um mesmo método ter comportamentos diferentes dependendo do objeto que o executa.

**Exemplo com polimorfismo via sobrescrita:**
```typescript
class Animal {
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }

  emitirSom(): string {
    return "Som indefinido.";
  }
}

class Vaca extends Animal {
  emitirSom(): string {
    return "Muuu!";
  }
}

class Cavalo extends Animal {
  emitirSom(): string {
    return "Hiiii!";
  }
}

const animais: Animal[] = [
  new Vaca("Malhada"),
  new Cavalo("Relâmpago"),
];

animais.forEach((a) => {
  console.log(`${a.nome}: ${a.emitirSom()}`);
});
```
**Explicação:**
Mesmo que o array animais seja do tipo Animal[], ao chamar emitirSom(), cada objeto responde com seu comportamento específico — isso é polimorfismo em ação.

## Aula 4 - Modificadores de Visibilidade e Estático

### 1. Modificador `static`
O modificador `static` define membros que pertencem à classe e não aos objetos (instâncias).

**Exemplo:**
```typescript
class Util {
  static PI: number = 3.14159;

  static dobro(x: number): number {
    return x * 2;
  }
}

console.log(Util.PI);         // 3.14159
console.log(Util.dobro(10));  // 20
```
**Explicação:** 
- Não precisa de `new` para acessar `static`.
- `static` é útil para utilitários ou constantes globais da classe.

### 2. Modificador `readonly`
O modificador `readonly` indica que uma propriedade não pode ser alterada após ser inicializada (no construtor ou na declaração).

**Exemplo:**
```typescript
class Produto {
  readonly codigo: number;
  nome: string;

  constructor(codigo: number, nome: string) {
    this.codigo = codigo;
    this.nome = nome;
  }
}

const p = new Produto(101, "Teclado");
// p.codigo = 999; ❌ Erro: propriedade somente leitura
console.log(p.codigo); // 101
```

### 3. Modificadores de Visibilidade
| Modificador	| Visibilidade	| Acesso permitido em... |
|--------------------|--------------------------|------------------------|
| `public`	| Padrão (sem restrição)	| Em qualquer lugar |
| `private`	| Somente dentro da própria classe	| Não acessível fora da classe |
| `protected`	| Dentro da classe e subclasses	| Mas não fora da herança |

**Exemplo:**
```typescript
class Pessoa {
  public nome: string;
  private senha: string;
  protected idade: number;

  constructor(nome: string, senha: string, idade: number) {
    this.nome = nome;
    this.senha = senha;
    this.idade = idade;
  }

  mostrarSenha(): string {
    return `Senha: ${this.senha}`;
  }
}

class Funcionario extends Pessoa {
  mostrarIdade(): string {
    return `Idade: ${this.idade}`; // permitido por ser protected
  }
}

const p = new Pessoa("Ana", "abc123", 25);
// console.log(p.senha);  Erro: senha é private
```

### 4. Getters e Setters
Permitem encapsular o acesso a atributos, especialmente os `private` ou `protected`. Os métodos `get` e `set` são definidos com palavras-chave especiais.

**Exemplo:**
```typescript
class Conta {
  private _saldo: number = 0;

  get saldo(): number {
    return this._saldo;
  }

  set saldo(valor: number) {
    if (valor >= 0) {
      this._saldo = valor;
    }
  }
}

const c = new Conta();
c.saldo = 1000;              // chama o setter
console.log(c.saldo);        // chama o getter → 1000
```

### 5. Propriedades de Parâmetro
Atalho para declarar e inicializar atributos direto no construtor, usando `public`, `private`, `readonly`, etc.

**Exemplo:**
```typescript
class Cliente {
  constructor(
    public nome: string,
    private readonly cpf: string
  ) {}

  mostrarCpf(): string {
    return this.cpf;
  }
}

const cli = new Cliente("Carlos", "123.456.789-00");
console.log(cli.nome);        // Carlos
// console.log(cli.cpf);  Erro: cpf é private
```

**Vantagem:**
- Código mais enxuto
- Não precisa repetir `this.nome = nome` no construtor

## Aula 5 - Interface, Classe Abstrata e Classe Genérica

### 1. Classe Abstrata
Uma classe abstrata é uma estrutura base, que não pode ser instanciada diretamente.  
Serve como modelo para outras classes e pode conter:
- Atributos e métodos implementados
- Métodos abstratos (sem corpo, que devem ser implementados nas subclasses)

**Exemplo:**
```typescript
abstract class Animal {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  abstract emitirSom(): void;

  mover(): void {
    console.log(`${this.nome} está se movendo.`);
  }
}

class Cachorro extends Animal {
  emitirSom(): void {
    console.log("Au au!");
  }
}

const dog = new Cachorro("Rex");
dog.emitirSom(); // Au au!
dog.mover();     // Rex está se movendo.
// const a = new Animal("X");  Erro: não pode instanciar classe abstrata
```

### 2. Interface
Uma interface define um contrato de forma, ou seja, como um objeto ou classe deve se comportar.  
Não possui implementação, apenas definição.  

**Exemplo:**
```typescript
interface Pessoa {
  nome: string;
  idade: number;
  apresentar(): string;
}

class Aluno implements Pessoa {
  constructor(public nome: string, public idade: number) {}

  apresentar(): string {
    return `Sou ${this.nome}, tenho ${this.idade} anos.`;
  }
}

const aluno = new Aluno("João", 20);
console.log(aluno.apresentar());
```

**Regras:**
- Pode ser usada por classes (`implements`) ou objetos literais.
- Suporta herança múltipla entre interfaces.

### 3. Type
O type é usado para criar um alias de tipo (tipo nomeado). Pode representar:
- Objetos
- União de tipos
- Tuplas
- Interseções

**Exemplo com objeto:**
```typescript
type Produto = {
  nome: string;
  preco: number;
};

const p: Produto = {
  nome: "Teclado",
  preco: 150
};
```

**Exemplo com união:**
```typescript
type ID = string | number;

let id1: ID = "ABC123";
let id2: ID = 456;
```

**Diferença entre `interface` e `type`:**
| Aspecto	| `interface`	| `type` |
|--------------------|--------------------------|------------------------|
| Extensível	| Sim (pode ser estendida)	| Sim (via interseção `&`) |
| Reabertura	| Sim (pode ser reaberta)	| Não |
| União e Interseção	| Não diretamente	| Sim (`type A = B`) |

### 4. Tipos Genéricos (Generics)
Genéricos permitem criar classes, funções ou interfaces que funcionam com tipos variados, definidos na hora do uso. São como variáveis de tipo.

**Exemplo de função genérica:**
```typescript
function identidade<T>(valor: T): T {
  return valor;
}

console.log(identidade<string>("Olá")); // "Olá"
console.log(identidade<number>(42));    // 42
```

**Exemplo de classe genérica:**
```typescript
class Caixa<T> {
  conteudo: T;

  constructor(valor: T) {
    this.conteudo = valor;
  }

  mostrar(): void {
    console.log(`Conteúdo: ${this.conteudo}`);
  }
}

const caixa1 = new Caixa<number>(100);
const caixa2 = new Caixa<string>("mensagem");

caixa1.mostrar(); // Conteúdo: 100
caixa2.mostrar(); // Conteúdo: mensagem
```

**Exemplo com interface genérica:**
```typescript
interface Resultado<T> {
  sucesso: boolean;
  dados: T;
}

const r: Resultado<string> = {
  sucesso: true,
  dados: "Operação realizada"
};
```

## Aula 6 - Exceções

### 1. Bloco try/catch
Serve para capturar e tratar erros que ocorrem dentro de `try`.

**Exemplo:**
```typescript
function dividir(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida.");
  }
  return a / b;
}

try {
  const resultado = dividir(10, 0);
  console.log("Resultado:", resultado);
} catch (erro: any) {
  console.log("Erro capturado:", erro.message);
}
```

### 2. Palavra-chave `throw`
Usada para lançar uma exceção. Pode lançar:
- `Error` padrão (`new Error("mensagem")`)
- Um objeto personalizado
- Uma string (menos recomendado)

**Exemplo com erro personalizado:**
```typescript
throw new Error("Algo deu errado!");
```

### 3. Palavra-chave `finally`
O bloco `finally` sempre é executado, com ou sem erro, ideal para liberar recursos ou finalizar ações.

**Exemplo:**
```typescript
try {
  console.log("Executando operação...");
  throw new Error("Falha simulada");
} catch (e) {
  console.log("Erro capturado");
} finally {
  console.log("Finalizando (sempre executa)");
}
```

### 4. Criando Erros Personalizados
Você pode criar classes de erro personalizadas estendendo a classe `Error`.

**Exemplo:**
```typescript
class SaldoInsuficienteError extends Error {
  constructor() {
    super("Saldo insuficiente para a operação.");
    this.name = "SaldoInsuficienteError";
  }
}

function sacar(valor: number, saldo: number): number {
  if (valor > saldo) {
    throw new SaldoInsuficienteError();
  }
  return saldo - valor;
}

try {
  console.log(sacar(1000, 500));
} catch (e: any) {
  if (e instanceof SaldoInsuficienteError) {
    console.log("Erro de saldo:", e.message);
  } else {
    console.log("Erro desconhecido.");
  }
}
```

### 5. Boas práticas no tratamento de exceções
- Tratar exceções previsíveis, como:
  - Divisão por zero
  - Dados inválidos de entrada
  - Requisições malformadas
- Usar classes de erro específicas, quando possível
- Evitar capturar exceções genéricas sem verificação
- Não usar `throw` com tipos primitivos (`throw "erro"`)

### 6. Exceções em funções assíncronas (async/await)
Você pode usar `try/catch` com `await` normalmente.

**Exemplo:**
```typescript
async function buscarDados() {
  try {
    const resposta = await fetch("https://api.exemplo.com/dados");
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
  }
}
```

## Aula 7 - Conexão com SGBD

### I. Conexão com o SGBD PostgreSQL

**Instalação:**
```bash
npm install pg
npm install -D @types/pg  # Tipos para TypeScript
```
 
**Exemplo básico de conexão:**
```typescript
// src/db/postgres.ts
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'meubanco',
  password: 'senha123',
  port: 5432,
});

export default pool;
```

**Consulta simples:**
```typescript
// src/index.ts
import pool from './db/postgres';

async function listarUsuarios() {
  const res = await pool.query('SELECT * FROM usuarios');
  console.log(res.rows);
}

listarUsuarios();
```

**Dicas:**
- Use `async/await` para chamadas assíncronas.
- `pool` gerencia múltiplas conexões simultâneas.
- Ideal para projetos maiores e produção.

### 2. Conexão com o BD SQLite
Com better-sqlite3 (mais simples para aulas):

**Instalação:**
```bash
npm install better-sqlite3
npm install -D @types/better-sqlite3
```

**Exemplo de conexão:**
```typescript
// src/db/sqlite.ts
import Database from 'better-sqlite3';

const db = new Database('banco.sqlite');

// Criação de tabela se não existir
db.prepare(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT
  )
`).run();

export default db;
```

**Inserção e consulta:**
```typescript
// src/index.ts
import db from './db/sqlite';

db.prepare('INSERT INTO usuarios (nome) VALUES (?)').run('Maria');

const usuarios = db.prepare('SELECT * FROM usuarios').all();
console.log(usuarios);
```

**Alternativa com sqlite3 (assíncrona):**
```bash
npm install sqlite3
npm install -D @types/sqlite3
```

```typescript
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('banco.sqlite');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, nome TEXT)");

  db.run("INSERT INTO usuarios (nome) VALUES (?)", ["João"]);

  db.all("SELECT * FROM usuarios", (err, rows) => {
    if (err) throw err;
    console.log(rows);
  });
});
```

**Comparativo Final**
| Aspecto	| PostgreSQL (`pg`)	| SQLite (`better-sqlite3`) |
|--------------------|--------------------------|------------------------|
| Tipo de Banco	| Cliente-servidor |	Arquivo local |
| Recomendado para	| Produção, sistemas grandes	| Aplicações locais, testes |
| Execução	| Assíncrona (`async/await`)	| Síncrona (mais simples) |
| Instalação	| PostgreSQL instalado	| Apenas o pacote npm |

**Boas práticas:**
- Separe a lógica de conexão da lógica de consulta
- Use `try/catch` para capturar erros
- Mantenha as credenciais em variáveis de ambiente (`.env`)
