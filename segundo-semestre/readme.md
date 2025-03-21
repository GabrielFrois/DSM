# Comandos Importantes

## Criando um Projeto React

### Comandos:
- Para verificar se o Node.js está instalado: `npm list -g`  
- Para atualizar a versão instalada do NPM: `npm i npm -g`  
- Para criar um novo projeto React com TS e a ferramenta de build Vite: `npm create vite@latest front -- --template react-ts`

### Entendendo o comando:
- `npm create vite@latest`: inicia o processo de criação de um novo projeto utilizando a versão mais recente do Vite
- `front`: define o nome da pasta que será criada o projeto. Podemos substituir "front" por outro nome
- `--`: a partir da versão 7 do npm, é necessário adicionar um duplo hífen antes de especificar os templates
- `--template react-ts`: especifica que será usado o template de projeto React com TS

Com o projeto criado, entre na pasta front (usando o comando `cd front`) e instale as dependências usando o comando `npm i` ou `npm install`.  

## Criando um Projeto TypeScript

### Comandos:  
- Para criar package.json: `npm init -y`
- Para instalar pacotes ts-node e typescript: `npm i -D ts-node typescript`
- Para criar o tsconfig.json: `tsc --init`
