# Aula 1 – Variáveis e Uso de Funções

## Algoritmos e Lógica de Programação

### Objetivo:
1. Linguagem de programação
2. Ambiente de desenvolvimento integrado (IDE)
3. Projeto JavaScript
4. Principais tipos de dados
5. Estrutura de uma função
6. Variável
7. Comentários

---

## I. Linguagem de Programação
Qualquer programa, aplicativo ou página da web é criado com uma linguagem de programação. As principais linguagens incluem:

- **JavaScript**: A linguagem mais utilizada para aplicações web e mobile.
- **Python**: Fácil de aprender, amplamente utilizada em ciência de dados e inteligência artificial.
- **Java**: Robusta e usada em grandes aplicações para web e desktop.

Os programas são escritos em linguagens de alto nível e precisam ser convertidos para linguagem de máquina por meio de compilação ou interpretação.

Os navegadores possuem consoles para execução de JavaScript, acessíveis pelo atalho `<F12>`.

---

## II. Ambiente de Desenvolvimento Integrado (IDE)

Uma **IDE** facilita a programação ao apontar erros e chamar o interpretador. Exemplos:

- **Replit** (https://replit.com): IDE online que suporta JavaScript via Node.js.
- **VS Code** (https://code.visualstudio.com): IDE mais utilizada por desenvolvedores web.
- **Node.js** (https://nodejs.org/en): Necessário para rodar JavaScript no VS Code.

Tutoriais:
- [Instalar Node.js](https://www.youtube.com/watch?v=-cLzUD0TQY0)
- [Instalar VS Code](https://www.youtube.com/watch?v=_R6YslWRUFk)

---

## III. Projeto JavaScript

Passos para criar um projeto:
1. Criar uma pasta chamada `exemplo`.
2. Abrir o terminal na pasta e digitar `code .` para abrir no VS Code.
3. Criar um arquivo `index.js`.
4. Criar um arquivo `package.json` com `npm init -y`.
5. Criar a pasta `src` e mover `index.js` para dentro dela.
6. Adicionar o comando `node ./src` no `package.json` para facilitar a execução.

---

## IV. Principais Tipos de Dados

- **String**: Representa textos. Exemplo: `'chuva'`, `"domingo"`.
- **Number**: Representa números inteiros e decimais. Exemplo: `12.23`.
- **Boolean**: Representa verdadeiro ou falso (`true` ou `false`).

Os tipos de dados otimizam o uso da memória do computador.

---

## V. Estrutura de uma Função

Uma função executa um conjunto de instruções. Exemplos:

- `console.log("olá")` – Exibe "olá" no console.
- `prompt("Entre com o nome:")` – Solicita entrada do usuário.
- `parseInt("2")` – Converte "2" para número inteiro.
- `parseFloat("1.5")` – Converte "1.5" para número real.

As funções podem receber parâmetros que influenciam seu comportamento.

---

## VI. Variável

Uma variável é um espaço na memória. Exemplo:

```javascript
let dia = "domingo"; // string
let idade = 21; // number
let peso = 58.9; // number
let doador = true; // boolean
```

O nome da variável representa seu espaço na memória, e seu valor pode ser lido ou modificado.

---

## VII. Comentários

Os comentários documentam o código e são ignorados pelo interpretador:

- **Comentário de linha única**:
  ```javascript
  // Este é um comentário de linha única
  ```
- **Comentário de múltiplas linhas**:
  ```javascript
  /*
     Este é um comentário de
     múltiplas linhas
  */
  ```

Os comentários ajudam outros programadores a entender o código.
