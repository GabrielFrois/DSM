# Revisão para P2 - Mongoose, Tipagem, Coesão, Validações e MVC

## 1. Schema Mongoose

O **Mongoose** é uma biblioteca que facilita a interação com o banco de dados **MongoDB**, permitindo modelar os dados da sua aplicação.  
Um *Schema* define a estrutura dos documentos dentro de uma coleção.

---

### UserSchema (Schema do Usuário)

Define a estrutura para os documentos de usuários:

```js
const UserSchema = new mongoose.Schema({
  email: {
    type: String, // O campo deve ser uma string
    maxLength: [50, "O tamanho máximo do campo é 50 caracteres"], // Máximo de 50 caracteres
    required: true // Campo obrigatório
  },
  password: {
    type: String, // O campo deve ser uma string
    minlength: 6, // Mínimo de 6 caracteres
    maxlength: 10, // Máximo de 10 caracteres
    select: false, // Não será retornado em buscas por padrão
    required: true // Campo obrigatório
  }
});
```

**Dica:** O uso de `select: false` ajuda na segurança, evitando que senhas sejam exibidas acidentalmente em consultas.

---

### SpentSchema (Schema de Gasto)

Define a estrutura dos documentos de gastos:

```js
const SpentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, // Tipo padrão de ID do MongoDB
    ref: 'User', // Cria uma referência à coleção 'User'
    required: true // Gasto deve estar associado a um usuário
  },
  description: {
    type: String,
    maxlength: 30, // Máximo de 30 caracteres
    required: true // Campo obrigatório
  },
  value: {
    type: Number,
    required: true // Campo obrigatório
  }
});
```

---

## 2. Anotação de Tipos

A **anotação de tipos** é o processo de declarar explicitamente o tipo de dado que uma variável pode armazenar.  
Comum em linguagens como **TypeScript**, ela ajuda a prevenir erros.

| Tipo | Descrição | Exemplo |
|------|------------|---------|
| `string` | Sequência de caracteres | `let nome: string = "Ana";` |
| `number` | Números inteiros ou reais | `let idade: number = 25;` |
| `boolean` | Valores lógicos (true/false) | `let doador: boolean = true;` |
| `null` | Valor nulo | `let fone: null = null;` |
| `undefined` | Valor não definido | `let cel: undefined = undefined;` |
| `bigint` | Números inteiros muito grandes | `let distancia: bigint = 20n;` |
| `any` | Aceita qualquer tipo de dado | `let qualquer: any = 10;` |

---

## 3. Coesão e Acoplamento

### Coesão

**Definição:** Mede o quanto os elementos dentro de um módulo (classe, método, etc.) pertencem uns aos outros.  
Está relacionada ao **Princípio da Responsabilidade Única** (*Single Responsibility Principle*).

- **Objetivo:** Cada classe deve ter apenas uma responsabilidade.
- **Exemplo:**  
  Um método chamado `imprimeSoma()` deve apenas **imprimir** a soma, e não **calcular**.  
  O cálculo deveria ser feito por outro método.
- **Benefício:** Código mais fácil de manter e evoluir.

### Acoplamento

**Definição:** Mede o nível de dependência entre diferentes classes ou módulos.

- **Problema:** Classes fortemente acopladas tornam o sistema difícil de modificar.
- **Consequência:** Alterar uma classe pode exigir mudanças em várias outras.
- **Objetivo:** Buscar **baixo acoplamento**, tornando as classes mais independentes.

---

## 4. Validações no Mongoose

Validações são **regras** que o Mongoose verifica antes de salvar ou atualizar um documento.  
Se os dados não atenderem às regras, o Mongoose gera um **erro** e impede a operação.

### Exemplos de validações comuns:

| Validação | Descrição | Exemplo |
|------------|------------|----------|
| `required: true` | Campo obrigatório | — |
| `maxLength: 50` | Máximo de 50 caracteres | — |
| `minlength: 6` | Mínimo de 6 caracteres | — |
| `min` / `max` | Valores mínimos/máximos para números | `{ min: 0, max: 100 }` |
| `enum` | Lista de valores permitidos | `enum: ['pendente', 'pago', 'cancelado']` |
| `match` | Expressão Regular (Regex) | `match: /\S+@\S+\.\S+/` (valida e-mail) |

Essas validações garantem a **integridade dos dados** no banco.

---

## 5. Funções

Uma **função** é um bloco de código reutilizável projetado para executar uma tarefa específica.

### Estrutura de uma função:

1. **Definição:** Cria-se a função com um nome e instruções.
2. **Parâmetros:** Valores que a função pode receber.
3. **Execução:** A função só roda quando é chamada.
4. **Retorno:** Pode devolver um resultado com `return`.

### Exemplo em TypeScript:

```ts
function somar(a: number, b: number): number {
  return a + b;
}

let resultado = somar(5, 3);
console.log(resultado); // 8
```

---

## 6. Padrão MVC

O **MVC** (*Model-View-Controller*) é um padrão de arquitetura que separa a aplicação em três camadas:

### Model (Modelo)

- **Função:** Gerencia os dados e a lógica de negócio.
- **Responsabilidade:** Conectar-se ao banco (ex: via Schemas Mongoose) e aplicar regras como “um usuário não pode ter dois e-mails iguais”.

### View (Visão)

- **Função:** Camada de interface com o usuário (UI).
- **Responsabilidade:** Exibir os dados e receber interações (botões, formulários etc.).  
  Não lida com regras de negócio.

### Controller (Controlador)

- **Função:** Atua como intermediário entre Model e View.
- **Responsabilidade:** Processar requisições, chamar métodos do Model e enviar respostas para a View.

**Exemplo:**  
O usuário clica em “Salvar Gasto” → a View envia ao Controller → o Controller pede ao Model para salvar → o Model responde → o Controller retorna uma mensagem (“Gasto salvo com sucesso!”).

---

📘 **Resumo:**  
Esses conceitos formam a base para o desenvolvimento de aplicações Node.js modernas, seguras e bem estruturadas.
