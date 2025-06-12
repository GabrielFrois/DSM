import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza horizontalmente */
    justify-content: flex-start; /* Mantém o conteúdo na parte superior */
    min-height: 100vh; /* Garante que a altura mínima da tela seja 100% */
    background-color: #f4f4f4;
  }

  main {
    width: 100%; /* Garante que o conteúdo ocupe a largura completa */
    max-width: 1200px; /* Limita a largura para não ficar muito esticado em telas grandes */
    padding: 20px;
    display: flex;
    justify-content: center; /* Centraliza horizontalmente o conteúdo */
    flex-direction: column;
    align-items: center; /* Centraliza verticalmente */
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #121212;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
  }

  a {
    color: white;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
