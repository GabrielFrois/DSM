# Atividade 1 - Props
## Descrição da atividade:
Desenvolver um aplicativo React com TypeScript contendo dois componentes. O primeiro componente solicitará ao usuário a quantidade de números aleatórios a serem gerados. O segundo componente receberá os números fornecidos pelo usuário e os exibirá na tela.  

![Texto Alternativo](https://raw.githubusercontent.com/GabrielFrois/DSM/main/segundo-semestre/desenvolvimento-web-II/atividades/1-props/assets/props.png)


## Objetivos:
- Compreender e utilizar componentes React;
- Utilizar o state no React para gerenciamento de dados;
- Passar dados entre componentes por meio de props.

## Requisitos funcionais:
1. O componente `Exercise1` deve: 
  - Receber do usuário a quantidade de números a serem sorteados e exibidos na tela;
  - Gerar números aleatórios no intervalo de 0 a 99;
  - Exibir os números gerados em ordem crescente;
  - Permitir, no máximo, 12 números, mesmo que o usuário forneça um valor maior.
2. O componente `Exercise2` deve:
  - Receber valores inseridos pelo usuário e exibi-los na tela;
  - Exibir no máximo 12 números, removendo automaticamente o primeiro número ao adicionar um novo quando o limite for atingido;
  - Permitir que um número seja removido ao clicar com o botão direito sobre ele.

## Requisitos não funcionais:
1. Os componentes `Exercise1` e Exercise2 devem ser chamados dentro do componente `App`;
2. Cada número deve ser exibido dentro de um componente chamado `Ball`;
3. Os estilos devem ser implementados utilizando CSS-in-JS.
