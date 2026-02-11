# Revisão Interação Humano-Computador

## Affordance: A Relação Intuitiva entre o Usuário e o Objeto
O conceito de Affordance, introduzido pelo psicólogo James Gibson, refere-se às propriedades de um objeto que sugerem como ele pode ser utilizado. 
Em essência, é a percepção que um usuário tem sobre as ações que pode realizar com um determinado objeto ou interface. 
Uma boa affordance torna o uso de um sistema mais intuitivo, diminuindo a necessidade de aprendizado.  
  
No contexto de IHC, a affordance é crucial para o design de interfaces digitais. 
Quando bem aplicada, os usuários sabem instintivamente como interagir com os elementos na tela.

### Tipos de Affordance em Interfaces Digitais:
- **Explícita:** A função do elemento é óbvia, muitas vezes acompanhada por um texto ou ícone claro.
Por exemplo, um botão com o rótulo "Clique aqui" não deixa dúvidas sobre sua função.
- **Padrão (ou Convencional):** Baseia-se em convenções e experiências passadas do usuário.
Um exemplo clássico é um texto azul sublinhado, que a maioria dos usuários reconhece como um link clicável.
- **Oculta (ou Escondida):** A affordance só se revela após uma ação específica do usuário,
como passar o mouse sobre um elemento para que um menu suspenso apareça.
É útil para manter a interface mais limpa, mas pode prejudicar a descoberta de funcionalidades.
- **Metafórica:** Utiliza elementos do mundo real para representar funções no ambiente digital.
O ícone de uma lixeira para a ação de excluir é um exemplo perfeito, pois os usuários associam a lixeira física ao descarte de itens.
- **Falsa Affordance:** Ocorre quando um elemento de design sugere uma funcionalidade que ele não possui.
Por exemplo, um texto sublinhado que não é um link pode frustrar e confundir o usuário.

---

## Engenharia de Usabilidade: Projetando para a Facilidade de Uso
A Engenharia de Usabilidade é uma abordagem sistemática e centrada no usuário para o desenvolvimento de sistemas interativos. 
Seu principal objetivo é garantir que produtos sejam fáceis de aprender, eficientes de usar, agradáveis e que previnam erros. 
Não se trata apenas de estética, mas de funcionalidade e da experiência geral do usuário.

### Princípios Fundamentais da Engenharia de Usabilidade:
- **Foco no Usuário:** Todas as decisões de design e desenvolvimento devem ser tomadas com o usuário final em mente.
Isso envolve entender suas necessidades, objetivos e limitações.
- **Testes com Usuários:** A avaliação da usabilidade deve ser feita com usuários reais,
observando suas interações com o sistema para identificar problemas e áreas de melhoria.
- **Design Iterativo:** O processo de design é cíclico.
A interface é projetada, testada, avaliada e refinada em múltiplos ciclos (iterações) com base no feedback dos usuários.

### O Processo de Engenharia de Usabilidade geralmente inclui:
- **Análise de Requisitos:** Entender quem são os usuários, suas tarefas e o contexto de uso.
- **Design e Prototipação:** Criar modelos da interface, que podem variar de protótipos de baixa fidelidade (rascunhos em papel)
a protótipos de alta fidelidade (versões interativas).
- **Avaliação:** Testar os protótipos com usuários para coletar feedback.
Métodos comuns incluem testes de usabilidade, análise heurística e questionários.
- **Implementação e Lançamento:** Desenvolver e lançar o produto.
- **Monitoramento:** Coletar dados de uso do produto no mundo real para identificar a necessidade de futuras melhorias.

---

## As 10 Regras de Usabilidade de Nielsen (Heurísticas de Nielsen)
Desenvolvidas por Jakob Nielsen, estas dez heurísticas são um conjunto de princípios gerais para o design de interfaces. 
Elas não são regras específicas, mas sim diretrizes que ajudam a identificar e corrigir problemas de usabilidade.

### 1. Visibilidade do Status do Sistema:
O sistema deve sempre manter o usuário informado sobre o que está acontecendo, através de feedback apropriado e em tempo hábil.  
**Exemplo:** Uma barra de progresso ao fazer um download ou upload de um arquivo.

### 2. Correspondência entre o Sistema e o Mundo Real:
A interface deve "falar a língua" do usuário, utilizando palavras, frases e conceitos familiares, em vez de jargões técnicos. 
As informações devem aparecer em uma ordem lógica e natural.  
**Exemplo:** Usar o ícone de um carrinho de compras em um site de e-commerce.

### 3. Controle e Liberdade do Usuário:
Os usuários frequentemente cometem erros. 
Eles precisam de uma "saída de emergência" claramente marcada para sair de uma situação indesejada sem ter que passar por um processo longo. 
Funções como "desfazer" e "refazer" são essenciais.  
**Exemplo:** A opção de cancelar o envio de um e-mail alguns segundos após clicar em "enviar".

### 4. Consistência e Padrões:
Os usuários não devem ter que se perguntar se palavras, situações ou ações diferentes significam a mesma coisa. Siga as convenções da plataforma.  
**Exemplo:** Manter o menu de navegação no mesmo lugar em todas as páginas de um site.

### 5. Prevenção de Erros:
Um design cuidadoso que previne a ocorrência de erros é melhor do que boas mensagens de erro. 
Elimine condições propensas a erros ou verifique-as e apresente aos usuários uma opção de confirmação antes de se comprometerem com a ação.  
**Exemplo:** Um aviso de confirmação antes de excluir permanentemente um arquivo ("Você tem certeza?").

### 6. Reconhecimento em Vez de Memorização:
Minimize a carga de memória do usuário, tornando objetos, ações e opções visíveis. 
O usuário não deveria ter que se lembrar de informações de uma parte do diálogo para outra. 
As instruções de uso do sistema devem ser visíveis ou facilmente recuperáveis sempre que apropriado.  
**Exemplo:** Mostrar os itens visualizados recentemente em um site de compras.

### 7. Flexibilidade e Eficiência de Uso:
A interface deve ser eficiente tanto para usuários iniciantes quanto para experientes. 
Permita que os usuários personalizem ações frequentes. Atalhos podem acelerar a interação para o usuário experiente.  
**Exemplo:** Atalhos de teclado (Ctrl+C, Ctrl+V) em um editor de texto.

### 8. Estética e Design Minimalista:
As interfaces não devem conter informações irrelevantes ou raramente necessárias. 
Cada unidade extra de informação em um diálogo compete com as unidades relevantes de informação e diminui sua visibilidade relativa.  
**Exemplo:** A página inicial do Google, com foco quase exclusivo na barra de pesquisa.

### 9. Ajude os Usuários a Reconhecer, Diagnosticar e se Recuperar de Erros:
As mensagens de erro devem ser expressas em linguagem clara (sem códigos), indicar precisamente o problema e sugerir construtivamente uma solução.  
**Exemplo:** Em um formulário, ao invés de "Erro 402", mostrar a mensagem "O número do cartão de crédito é inválido".

### 10. Ajuda e Documentação:
Mesmo que seja melhor que o sistema possa ser usado sem documentação, pode ser necessário fornecer ajuda e documentação. 
Qualquer informação desse tipo deve ser fácil de pesquisar, focada na tarefa do usuário, 
listar passos concretos a serem executados e não ser muito extensa.  
**Exemplo:** Uma seção de "Perguntas Frequentes" (FAQ) ou um tour guiado na primeira vez que o usuário abre um aplicativo.

---

## O que é User Experience (UX)?
UX, ou Experiência do Usuário, refere-se à experiência geral que uma pessoa tem ao usar qualquer produto ou serviço, seja ele digital ou físico. Ela existe desde que as pessoas começaram a usar objetos para realizar tarefas.

- **Experiência Digital:** No contexto de produtos digitais como sites e aplicativos , uma experiência é considerada positiva quando o usuário consegue realizar sua tarefa (seja funcional, como pagar uma conta, ou emocional, como usar uma rede social) sem frustração ou demora.
- **Subjetividade:** As experiências são subjetivas e influenciadas por "fatores humanos" (como habilidade, visão, humor) e "fatores externos" (como o horário ou o ambiente).
- **Design da Experiência:** Apesar de subjetivas, essas experiências são projetadas. O UX Design não se trata apenas de encontrar a melhor solução, mas de definir corretamente o problema (o porquê), para quem ele será resolvido (o quem) e o caminho para resolvê-lo (o como).

## O que é User Interface (UI)?
UI, ou Interface do Usuário, foca especificamente na aparência visual e na interação de um produto digital.

- **Componentes:** Refere-se a todos os elementos visíveis e interativos que o usuário utiliza para interagir com o produto, como layouts, ícones, botões, menus e tipografia.
- **Objetivo:** O objetivo do UI Design é criar uma interface que seja visualmente atraente, coesa, intuitiva e fácil de usar, permitindo que o usuário interaja de forma eficiente.
- **Impacto:** Um bom UI é fundamental para a primeira impressão do produto, ajudando a aumentar a satisfação do usuário e a fidelidade. Uma interface ruim pode levar à frustração e ao abandono.

## A Diferença entre UX e UI
Embora frequentemente usados de forma intercambiável, UX e UI são áreas distintas.

- **UI Design** foca na **aparência visual e interação.**
- **UX Design** foca na **experiência do usuário como um todo**. O UX abrange toda a jornada do usuário, desde o primeiro contato até o uso contínuo, entendendo suas necessidades, emoções e comportamentos através de pesquisas e testes.

Em resumo, o UI design (a aparência) é uma parte importante do UX design (a experiência completa). Ambas as áreas são essenciais e trabalham juntas para criar produtos digitais eficientes, agradáveis e bem-sucedidos.

## Princípios de Design
O documento lista os princípios fundamentais para cada disciplina:

### Princípios de UI Design: 
- **Consistência:** Elementos de design semelhantes em todo o produto.
- **Simplicidade:** Design limpo e sem elementos desnecessários.
- **Legibilidade:** Fontes e cores apropriadas para fácil leitura.
- **Navegabilidade:** Navegação intuitiva.
- **Feedback:** Informar ao usuário o que está acontecendo.
- **Hierarquia Visual:** Organização clara dos elementos na tela.
- **Acessibilidade:** Ser acessível a todos os usuários.
- **Eficiência:** Permitir que tarefas sejam realizadas sem obstáculos.
- **Estética:** Aparência agradável que reflete a marca.

### Princípios de UX Design: 
- **Foco no usuário:** Projetar em torno das necessidades do usuário.
- **Facilidade de uso:** Fluxos intuitivos e interface compreensível.
- **Acessibilidade:** Acessível a todos os usuários.
- **Consistência:** Design coeso e fluxos semelhantes.
- **Personalização:** Permitir que usuários adaptem o produto.
- **Feedback:** Informar o usuário sobre suas ações.
- **Performance:** Rápido e sem interrupções.
- **Aprendizado:** Fácil de aprender, com suporte disponível.
- **Estética:** Aparência agradável.

## Habilidades, Ferramentas e Mercado

- **Habilidades Essenciais:** Para atuar em UX/UI, são necessárias habilidades como: Pesquisa do usuário, Design Thinking, Arquitetura da informação, Design de interface, Prototipagem, Testes de Usabilidade, Pensamento analítico, Comunicação, Empatia e Trabalho em equipe.
- **Ferramentas Comuns:** As ferramentas mais utilizadas incluem Figma, Sketch, Adobe XD, InVision, Axure, Balsamiq (para wireframes), Usertesting (para testes), Google Analytics e Hotjar (para análise), e Trello (para gestão).
- **Demanda de Mercado:** A demanda por designers de UX/UI qualificados está crescendo junto com a demanda por produtos digitais. Empresas como Google, Facebook, Amazon, Apple, Microsoft, Airbnb, Uber e Netflix contratam esses profissionais.
