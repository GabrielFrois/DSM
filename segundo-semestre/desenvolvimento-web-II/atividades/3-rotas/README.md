# Atividade 3 - Rotas

## Descrição da atividade:
Desenvolver um aplicativo utilizando React com TypeScript para gerar sugestões automáticas de apostas para a Mega-Sena.

## Objetivos:
- Compreender e utilizar componentes React;
- Implementar React Context para o gerenciamento de dados;
- Passar dados entre componentes por meio de contexto e props;
- Criar rotas entre componentes utilizando o React Router;
- Utilizar o hook useEffect para lidar com efeitos colaterais.

## Requisitos funcionais:
1. A aplicação deverá ser composta por três páginas:
  - Página de abertura: ao clicar no botão “Clique para começar” ou no link “Palpite”, o usuário deve ser redirecionado para a rota /palpite. Ao clicar no link “Histórico”, o usuário deve ser redirecionado para a rota /historico.
  - Página de sugestão: exibe automaticamente uma sugestão de aposta ao carregar a página. Deve haver também um botão “Nova sugestão” que gera uma nova aposta;
  - Página de histórico de sugestões: exibe todas as sugestões geradas até o momento;
2. A comunicação entre os componentes deve ser feita usando React Context;

## Requisitos não funcionais:
- Os estilos da aplicação devem ser implementados utilizando a técnica de CSS-in-JS.
