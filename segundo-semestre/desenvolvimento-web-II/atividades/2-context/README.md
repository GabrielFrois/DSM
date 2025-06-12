# Atividade 2 - React Context

## Descrição da atividade: 
Desenvolver um aplicativo React com TypeScript com um campo para o usuário fornecer um nome e as letras serem exibidas separadamente, como mostrado abaixo:

![Imagem da aplicação](src/assets/context.png)

## Objetivos:
- Compreender e utilizar componentes React;
- Utilizar React Context para gerenciamento de dados;
- Passar dados entre componentes por meio de contexto e props.

## Requisitos funcionais:
1. A aplicação deverá ser formada pelos componentes: O componente `Exercise1` deve:
  - `Ball`: recebe por props uma string e exibe a letra;
  - `Display`: exibe o texto “Sem entrada” ou as letras do nome em cada bola;
  - `Input`: campo de entrada do usuário.
2. A comunicação entre os componentes `Input` e `Display` deverá ser por React Context;

## Requisitos não funcionais:
1. Cada letra deve ser exibida em um componente `Ball`;
2. Os estilos devem ser implementados utilizando CSS-in-JS.
