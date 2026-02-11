# Revisão de Gestão Ágil de Projetos de Software

## A Equipe Scrum e Seus Papéis
O sucesso de um projeto ágil depende fundamentalmente de uma equipe bem estruturada, auto-organizável, multidisciplinar e focada na meta. 
A comunicação e a colaboração são essenciais.

## Papéis Fundamentais:
### 1. Scrum Team (ST): É o time de desenvolvimento. Suas características principais são:
- **Auto-organização e Responsabilidade:** A equipe é responsável por resolver seus próprios conflitos e até mesmo por lidar com membros improdutivos.
- **Foco e Comunicação:** Deve manter o foco na meta da Sprint, comunicar-se constantemente e ajudar os membros com dificuldades.
- **Mentalidade Ágil:** A equipe precisa estar aberta a mudanças, saber pedir ajuda quando necessário e manter a confiança mútua.
Os valores ágeis como comprometimento, foco, coragem, respeito e abertura devem guiar o time.

### 2. Product Owner (PO): É o representante do cliente dentro da equipe. Suas principais responsabilidades são:
- **Maximizar o Valor do Produto:** O PO é o responsável pelo sucesso do produto, devendo conhecer profundamente as dores do cliente e o mercado.
- **Gerenciar o Backlog:** É o dono do Product Backlog, responsável por priorizar as tarefas que geram mais valor para o negócio.
- **Visão e Planejamento:** Define a visão do produto, planeja as entregas e o MVP (Minimum Viable Product ou Produto Mínimo Viável).

### 3. Scrum Master (SM): Atua como um facilitador e líder-servidor para a equipe. Suas funções incluem:
- **Remover Impedimentos:** É sua principal função remover barreiras que atrapalham o progresso do time de desenvolvimento.
- **Garantir a Agilidade:** Assegura que a equipe (PO e ST) mantenha a mentalidade ágil e que as cerimônias, como as reuniões diárias, sejam eficientes.
- **Não é um Gerente:** O SM combate a mentalidade de "comando e controle" e não gerencia a equipe, mas a orienta.

### 4. Soft Skills (PACER):
Para que a equipe funcione de forma eficaz, todos os membros devem desenvolver habilidades interpessoais, resumidas no acrônimo PACER:
- **Proatividade:** Ter iniciativa, focar nas tarefas mais valiosas e antecipar problemas.
- **Autonomia (Autogestão):** Assumir responsabilidades, fazer as perguntas certas e ter precisão nas estimativas.
- **Colaboração:** Agir como um organismo único, priorizando a comunicação e tomando decisões em consenso.
- **Entrega de Resultados:** Fazer entregas completas, sem erros e com qualidade, garantindo que o sucesso do projeto não seja ameaçado.

---

## Artefatos de Requisitos e Planejamento
Os artefatos são as ferramentas utilizadas para definir o trabalho e garantir que todos tenham uma compreensão clara do que precisa ser feito.

### 1. User Stories (Histórias de Usuário):
- **Definição:** São sentenças curtas que descrevem uma funcionalidade sob a perspectiva do cliente, agregando valor ao negócio.
- **Formato:** "Como <tipo de usuário>, quero <funcionalidade desejada> para <motivo/valor para o negócio>".
É importante usar tipos de usuários específicos (ex: gerente, caixa) e evitar o genérico "usuário".
- **Critérios INVEST:** Uma boa User Story deve ser Independente, Negociável, Valiosa, Estimável, Pequena (Small) e Testável.

### 2. Critérios de Aceitação:
- **Função:** São as condições que uma User Story deve satisfazer para ser considerada "concluída".
Eles detalham a funcionalidade, delimitam o escopo e guiam os testes.

### 3. Product Backlog:
- **Definição:** Uma lista única e priorizada de todas as User Stories do projeto.
- **Priorização:** As histórias com maior valor de negócio (ROI) devem estar no topo.
Não devem existir duas histórias com o mesmo ranking, pois elas são trabalhadas em ordem.

### 4. Sprint Backlog:
- **Definição:** É a lista de User Stories selecionadas do Product Backlog para serem desenvolvidas durante uma Sprint específica.
A quantidade de histórias é definida pela capacidade da equipe em uma Sprint.

---

## Definições de "Pronto" e Alocação de Tarefas
Para garantir um fluxo de trabalho contínuo e de qualidade, a equipe estabelece acordos claros sobre o estado das tarefas.

### 1. Definition of Ready (DoR - Definição de "Pronto para Iniciar"):
- **Conceito:** É um acordo, ou checklist, entre a equipe e o PO que define os critérios para um item do backlog estar pronto para ser iniciado em uma Sprint.
- **Artefatos Comuns:** Uma User Story com DoR garantido geralmente inclui Critérios de Aceitação, Wireframes ou Mockups, e Modelos de Dados.
O objetivo é garantir que a equipe tenha insumos suficientes para começar o desenvolvimento sem impedimentos.

### 2. Definition of Done (DoD - Definição de "Concluído"):
- **Conceito:** É o comprometimento da equipe sobre os critérios que devem ser satisfeitos para que uma User Story seja considerada entregue.
- **Exemplos de Critérios:** Código versionado no Git, testes de unidade com cobertura mínima, e remoção de código comentado.

### 3. Alocação de Tarefas:
- A alocação ocorre no início da Sprint, apenas após o DoR ser garantido.
- **Critérios:** Leva-se em conta as habilidades técnicas (frontend, backend), a familiaridade com a tarefa,
a carga de trabalho atual e o interesse de desenvolvimento profissional de cada membro.
- **Regra Importante:** Nunca se deve atribuir duas tarefas em paralelo para o mesmo membro da equipe.

---

## Boas Práticas Técnicas com Git e GitHub
A gestão de código e a documentação são cruciais para a colaboração e a manutenção do projeto.

### 1. Documentação no GitHub (Arquivo README):
- Um bom README é fundamental para que outras pessoas entendam o projeto.
- **Estrutura Essencial:** Deve conter Título do Projeto, Descrição do Desafio, Backlog do Produto, Tecnologias utilizadas, Estrutura do Projeto, como executá-lo e informações da Equipe.

### 2. Padrão de Mensagens de Commits:
- A padronização ajuda a entender o histórico de alterações e facilita a automação.
- **Formato Sugerido:** <tipo>(<id_demanda>): <descrição da entrega>.
- **Tipos Comuns:** feat (nova funcionalidade), fix (correção de bug), docs (mudanças na documentação), refactor (refatoração de código).

### 3. Estratégia de Branch (Ramificação):
- Branches permitem que a equipe trabalhe em diferentes versões do código simultaneamente sem desestabilizar a versão principal.
- **GitHub Flow:** Uma estratégia simples onde a branch main é sempre a versão estável,
e cada nova funcionalidade (feature) ou correção (bugfix) é desenvolvida em uma branch separada.

### 4. Boas Práticas de Uso do Git:
- **Nunca faça commit direto na main:** Sempre use branches para evitar perda de código e conflitos.
- **Faça commits pequenos e diretos:** Realize pequenas modificações com mensagens claras e no imperativo (ex: "Adiciona sombra ao botão").
- **Use Pull Requests (PRs):** Ao criar um PR, descreva o que foi implementado e os cenários de teste.
Idealmente, não aprove seu próprio PR; aguarde a revisão de outro membro da equipe (code review).
- **Utilize o .gitignore:** Crie este arquivo para ignorar arquivos que não devem ser versionados, como logs, binários e senhas.
