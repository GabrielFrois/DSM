# Resumos

## UML

### O que é
UML (Unified Modeling Language) é uma linguagem padronizada usada para visualizar, especificar, construir e documentar os artefatos de um sistema de software. Ou seja, é uma forma de desenhar como o sistema funciona, como os elementos se relacionam e como os dados fluem.

### Para que serve
- Comunicar ideias entre membros da equipe.
- Documentar o sistema antes, durante e depois do desenvolvimento.
- Facilitar manutenção e entendimento do código.
- Ajudar na análise e no design orientado a objetos.

### Tipos de Diagramas UML

**1. Diagramas Estruturais:** mostram a estrutura estática do sistema

| Diagrama	| O que mostra |
|-----------|--------------|
| Classe	| Classes, atributos, métodos e relacionamentos entre elas |
| Objeto	| Instâncias reais das classes |
|Pacote	| Organização de classes em módulos ou pacotes |
| Componente	| Componentes de software e suas dependências |
| Implantação	| Infraestrutura (servidores, dispositivos, conexões) |

**2. Diagramas Comportamentais:** mostram interações e comportamentos

|Diagrama	| O que mostra|
|---------|-------------|
| Caso de Uso	| Funcionalidades do sistema e quem pode usá-las (atores) |
| Sequência	| Ordem das mensagens trocadas entre objetos |
| Colaboração	| Interação entre objetos com foco em estrutura |
| Estado	| Estados possíveis de um objeto e como ele muda |
| Atividade	| Fluxo de atividades (tipo fluxograma) |
| Tempo	| Eventos organizados ao longo do tempo |

### Exemplos Rápidos

**Diagrama de Caso de Uso**
- Mostra o que o sistema faz.
- Usa atores (usuários ou outros sistemas) e casos de uso (funcionalidades).

**Exemplo:**
```yaml
Ator: Cliente
Casos de uso: Fazer Login, Comprar Produto, Ver Carrinho
```

**Diagrama de Classe**
- Mostra como o sistema está estruturado.
- Inclui classes, seus atributos, métodos e relacionamentos (associação, herança, etc).

**Exemplo:**
```plaintext
Classe: Produto
- nome: string
- preco: float
+ aplicarDesconto()
```

**Diagrama de Sequência**
- Mostra a ordem das interações entre objetos para realizar uma funcionalidade.

**Exemplo:**
```plaintext
Cliente -> Sistema: solicitarCompra()
Sistema -> Estoque: verificarDisponibilidade()
```

### Ferramentas para Criar Diagramas UML
- Draw.io (gratuito e online)
- Lucidchart
- StarUML
- Visual Paradigm
- PlantUML (baseado em código, ótimo para integração com VSCode)

### Exemplo em um sistema simples de biblioteca 

**1. Diagrama de Casos de Uso**
Esse diagrama mostra o que o sistema faz e quem interage com ele.  

**Atores:** Usuário, Bibliotecário  
**Casos de uso:** Buscar Livro, Emprestar Livro, Devolver Livro, Cadastrar Livro

```less
        +---------------------------+
        |     Sistema Biblioteca    |
        +---------------------------+
        |                           |
        |  [Buscar Livro]           |
        |  [Emprestar Livro]        |
        |  [Devolver Livro]         |
        |  [Cadastrar Livro]        |
        +---------------------------+
           ^           ^       ^
           |           |       |
        Usuário   Bibliotecário
```

**2. Diagrama de Classes**
Esse mostra as estruturas do sistema: classes, atributos e métodos.  

```lua
+--------------------+
|      Livro         |
+--------------------+
| - titulo: string   |
| - autor: string    |
| - disponivel: bool |
+--------------------+
| +emprestar()       |
| +devolver()        |
+--------------------+

+----------------------+
|     Usuario          |
+----------------------+
| - nome: string       |
| - matricula: string  |
+----------------------+
| +buscarLivro()       |
+----------------------+

+------------------------+
|    Bibliotecario       |
+------------------------+
| - idFuncionario: int   |
+------------------------+
| +cadastrarLivro()      |
+------------------------+
```

Relacionamentos:
- Usuario e Bibliotecario são pessoas que usam o sistema.
- Bibliotecario pode cadastrar livros.
- Usuario pode buscar, emprestar e devolver.

**3. Diagrama de Sequência**
Exemplo de sequência para emprestar um livro:

```rust
Usuario -> Sistema: solicitarEmprestimo(livro)
Sistema -> Livro: verificarDisponibilidade()
Livro --> Sistema: disponível
Sistema -> Livro: emprestar()
Livro --> Sistema: confirmacaoEmprestimo
Sistema -> Usuario: emprestimoConcluido
```

**4. Diagrama de Atividades**
Mostra o fluxo de ações para emprestar um livro.

```less
[Início]
   |
[Buscar Livro]
   |
[Livro Disponível?] -- Não --> [Mensagem: Livro indisponível]
   |
  Sim
   |
[Confirmar Empréstimo]
   |
[Atualizar Disponibilidade do Livro]
   |
[Fim]
```

**5. Diagrama de Estados (para um livro)**
Mostra os estados possíveis do objeto Livro.

```csharp
[Disponível]
   |
   | emprestado()
   v
[Emprestado]
   |
   | devolvido()
   v
[Disponível]
```

## SWEBOK

SWEBOK significa *Software Engineering Body of Knowledge*, ou seja, o Corpo de Conhecimento da Engenharia de Software.  
Ele é como uma “enciclopédia oficial” da Engenharia de Software, criada para organizar, padronizar e descrever tudo o que um engenheiro de software precisa saber para atuar profissionalmente.  

Criado pelo IEEE (*Institute of Electrical and Electronics Engineers*), o SWEBOK é reconhecido internacionalmente como referência.  

### Para que serve
- Definir os principais conhecimentos e práticas da área.
- Padronizar o ensino e a atuação em engenharia de software.
- Servir de base para certificações profissionais, como a CSDP (Certified Software Development Professional).
- Ajudar no planejamento de currículos acadêmicos.

### As 15 Áreas de Conhecimento do SWEBOK
O SWEBOK divide a Engenharia de Software em 15 áreas de conhecimento (Knowledge Areas – KAs). Aqui está um resumo das principais:

|	| Área de Conhecimento	| O que trata |
|-|-----------------------|-------------|
| 1	| Requisitos de Software	| Coleta, análise, documentação e validação dos requisitos | 
| 2	| Projeto de Software (Design)	| Arquitetura, interfaces, componentes e padrões de projeto |
| 3	| Construção de Software	| Codificação, técnicas de programação e boas práticas |
| 4	| Teste de Software	| Estratégias, tipos de testes e automação |
| 5	| Manutenção de Software	| Correção de erros, melhorias e adaptação pós-entrega |
| 6	| Gerência de Configuração	| Controle de versões e mudanças no software |
| 7	| Gerência de Engenharia de Software	| Planejamento, acompanhamento e controle de projetos |
| 8	| Processo de Software	| Modelos de desenvolvimento (ágil, cascata, RUP...) |
| 9	| Ferramentas e Métodos de Engenharia	| CASE tools, modelagens, métodos formais |
| 10	| Qualidade de Software	| Garantia e métricas de qualidade |
| 11	| Engenharia de Software e Economia	| Custos, estimativas, ROI e viabilidade econômica |
| 12	| Aspectos Éticos e Profissionais	| Ética, responsabilidade e trabalho em equipe | 
| 13	| Fundamentos de Engenharia de Software	| Princípios teóricos, computação e matemática |
| 14	| Ambiente de Engenharia de Software	| Ferramentas, infraestrutura, integração contínua |
| 15	| Engenharia de Sistemas	| Integração entre hardware, software e outros componentes |

### Como o SWEBOK é usado na prática?
- **Projetos:** Ajuda a estruturar as etapas (ex: começar com requisitos, seguir com design e testes).
- **Ensino:** Cursos e disciplinas são planejados com base nessas áreas.
- **Profissão:** Usado como referência para entrevistas, avaliações de competência e certificações.

### SWEBOK na prática em programação
Aqui estão as principais áreas do SWEBOK aplicadas diretamente à rotina de quem programa:

**1. Requisitos de Software**
Antes de codar, você precisa entender o que deve ser feito.

**Na prática:**
- Você conversa com o cliente/professor ou lê uma especificação.
- Converte isso em requisitos funcionais (ex: "o sistema deve permitir login") e não funcionais (ex: "deve responder em menos de 2 segundos").
- **Ferramentas:** entrevistas, histórias de usuário, casos de uso.

**2. Projeto de Software (Design)**
Aqui você decide como será estruturado o seu código.

**Na prática:**
- Definir classes, módulos, funções e relacionamentos.
- Escolher padrões de projeto como MVC, Singleton, etc.
- Criar diagramas (como UML) para visualizar a estrutura.
- **Exemplo:** Separar camadas de frontend, backend e banco.

**3. Construção de Software**
É onde a programação acontece de fato.

**Na prática:**
- Escrever código-fonte.
- Usar boas práticas: nomes claros, DRY (Don’t Repeat Yourself), KISS (Keep It Simple, Stupid).
- Fazer commits frequentes e usar ferramentas como Git.
- **Ferramentas:** VSCode, Git, GitHub, terminal, bibliotecas.

**4. Teste de Software**
Garantir que o seu código faz o que deveria fazer.

**Na prática:**
- Criar testes unitários (por exemplo, com Jest ou JUnit).
- Testar manualmente interfaces.
- Corrigir bugs detectados nos testes.
- **Tipos de teste:** unitário, integração, sistema, aceitação.

**5. Manutenção de Software**
Modificar o código após a entrega ou primeira versão.

**Na prática:**
- Corrigir bugs relatados por usuários.
- Adicionar novos recursos.
- Refatorar para melhorar legibilidade e performance.
- **Exemplo:** você fez um projeto de faculdade, apresentou, e depois precisa ajustar algo para reentregar ou evoluir.

**6. Gerência de Configuração**
Controlar versões e mudanças no código.

**Na prática:**
- Usar Git para versionar seu projeto.
- Criar branches para novas funcionalidades.
- Fazer merge e resolver conflitos.
- **Ferramentas:** Git, GitHub, GitLab.

**7. Gerência de Projetos de Software**
Organizar tarefas, prazos e entregas.

**Na prática:**
- Criar um cronograma de desenvolvimento.
- Usar boards (como Trello, Jira) para organizar tarefas.
- Trabalhar em equipe e dividir responsabilidades.

**8. Qualidade de Software**
Garantir que o código seja bom, limpo e confiável.

**Na prática:**
- Usar linters (como ESLint) e formatadores (Prettier).
- Seguir padrões de codificação.
- Escrever testes e documentar código.

###Resumindo com um Exemplo Real
**Projeto:** "Calculadora de partidas ranqueadas"

| Etapa do Projeto	| Área do SWEBOK |
|-------------------|----------------|
| Levantar regras do sistema	| Requisitos de Software |
| Decidir estrutura (componentes)	| Projeto de Software (Design) |
| Programar as funções	| Construção de Software |
| Testar se os cálculos funcionam	| Teste de Software |
| Subir para GitHub e versionar	| Gerência de Configuração |
| Melhorar código após feedback	| Manutenção de Software |
| Organizar o progresso	| Gerência de Engenharia de Software |

## Testes de Software

São processos para verificar e validar se o sistema está funcionando como deveria. Ou seja, é garantir que o software:
- Faz o que foi pedido (verificação)
- Faz corretamente, sem falhas (validação)

### Objetivos dos Testes
- Encontrar erros e bugs.
- Garantir que novas funcionalidades não quebrem as anteriores.
- Validar se o software atende aos requisitos funcionais e não funcionais.
- Aumentar a confiabilidade e qualidade do sistema.

### Tipos de Teste (por escopo)
**1. Teste Unitário**
- Testa funções ou métodos isolados.
- Foco é validar pequenos blocos de código.
- **Exemplo:** testar se uma função calcularVitorias() retorna o valor certo.

**Ferramentas:**
- JavaScript/TypeScript: Jest, Vitest
- Python: Pytest, unittest
- Java: JUnit

**2. Teste de Integração**
- Testa a comunicação entre módulos ou componentes.
- **Exemplo:** testar se a função que pega dados do backend se integra corretamente com a função que mostra na tela.

**3. Teste de Sistema**
- Testa o sistema como um todo, de ponta a ponta (end-to-end).
- **Exemplo:** abrir o app, logar, fazer uma ação e ver o resultado esperado.
- **Ferramentas:** Cypress, Selenium, Playwright

**4. Teste de Aceitação**
- Verifica se o sistema atende às expectativas do cliente ou usuário final.
- Normalmente feito com base em histórias de usuário ou critérios de aceitação.

**Outras Categorias Comuns**

| Tipo	| Descrição |
|-------|-----------|
| Teste de Regressão	| Verifica se mudanças no código quebraram algo que já funcionava |
| Teste de Carga	| Mede desempenho sob grande volume de dados |
| Teste de Estresse	| Testa limites extremos do sistema |
| Teste de Usabilidade	| Avalia a experiência do usuário com a interface |
| Teste de Segurança	| Avalia vulnerabilidades e proteção contra ataques |

### Como fazer Testes na prática
**Função a ser testada:**
```js
function somar(a, b) {
  return a + b;
}
```

**Teste com Jest:**
```js
test('soma de 2 + 3 deve ser 5', () => {
  expect(somar(2, 3)).toBe(5);
});
```

### Ferramentas populares por linguagem

|Linguagem	| Testes Unitários	| End-to-End / Integração | 
|-----------|-------------------|-------------------------|
| JavaScript	| Jest, Vitest, Mocha	| Cypress, Playwright |
| Python	| unittest, pytest	| Robot Framework, Selenium |
| Java	| JUnit	| Selenium |
| C#	| MSTest, NUnit	| Playwright |

### Ciclo de Teste (Simplificado)
- Escrever caso de teste (entrada + resultado esperado)
- Executar teste
- Comparar resultado real com o esperado
- Relatar e corrigir erro (se houver)
- Repetir os testes (incluindo regressão)

### Boas práticas
- Automatize sempre que possível.
- Nomeie bem os testes (deveRetornarErroSeSenhaForInvalida()).
- Teste situações normais e extremas.
- Integre com o CI/CD (como GitHub Actions).
- Cubra funcionalidades críticas com prioridade.

---

## Aula 5 – Casos de Teste e Ciclo de Vida dos Testes

### Conceitos Fundamentais
- **Teste:** atividade prática de verificar se o software atende aos requisitos.
- **Caso de Teste:** documento que detalha entradas, ações e resultados esperados para testar uma funcionalidade.
- **Plano de Teste:** define a estratégia de testes (escopo, objetivos, equipe, cronograma, critérios de entrada/saída).

### Ciclo de Vida dos Testes
1. Análise de Requisitos
2. Planejamento de Testes
3. Design dos Casos de Teste
4. Configuração do Ambiente de Testes
5. Execução dos Testes
6. Registro e Reporte de Defeitos
7. Reexecução e Retestes
8. Encerramento e Relatório Final

### Boas Práticas na Escrita de Casos de Teste
- Clareza, objetividade e estrutura padronizada.
- Casos devem ser reprodutíveis com pré-condições claras e entradas específicas.
- Devem cobrir cenários positivos (uso correto) e negativos (erros e exceções).

### Documentação e Versionamento
- Uso de ferramentas como TestLink ou planilhas padronizadas.
- Identificadores únicos, histórico de edições e vinculação a requisitos.
- Versionamento como qualquer outro artefato de software.

## Aula 6 – Manutenção de Software e Interface com Usuário

### Gerenciamento de Versões
- **Corretiva:** pequenas correções no código.
- **Agregação de Recursos:** inclusão de novas funcionalidades.
- Exemplo com versões 1.1, 1.2 (correções) e 2.0, 3.0 (novos recursos).

### Reengenharia e Engenharia Reversa
- **Reengenharia:** reconstrução do software com base em estratégia.
- **Engenharia Reversa:** recuperação de arquitetura e design de sistemas antigos.

### Reestruturação
- **De documentos:** documentação essencial ou conforme necessidade.
- **De código:** limpeza e revisão para garantir legibilidade e testabilidade.

### Interface com o Usuário (UI)
- Deve considerar capacidades físicas e mentais dos usuários.
- **Princípios de UI:** familiaridade, consistência, mínima surpresa, facilidade de recuperação, orientação e diversidade de usuários.

### Estilos de Interação
| Estilo	| Vantagens	| Desvantagens |
|---------|-----------|--------------|
| Manipulação direta	| Intuitivo	| Difícil de implementar |
| Seleção de menu	| Evita erros	| Lento para usuários experientes |
| Formulário	| Fácil de aprender	| Ocupa muito espaço |
| Linguagem de comando	| Flexível	| Difícil de aprender |
| Linguagem natural	| Acessível	| Sistemas pouco confiáveis |

### Cores e Mensagens
Uso criterioso de cores e mensagens de erro ajustadas ao contexto, habilidade e cultura do usuário.

### Avaliação da Interface
- Métodos: questionários, observação, logs e coleta interna.
- Avaliação com base em: facilidade de aprendizado, robustez, recuperação e adaptação.

## Aula 7 – Boas Práticas em Engenharia de Software

### O que são Boas Práticas?
- Conjunto de diretrizes para garantir qualidade, organização, manutenibilidade e eficiência no desenvolvimento de sistemas.
- Baseadas em padrões internacionais e experiências da indústria.

### Objetivos das Boas Práticas
- Reduzir erros e retrabalho.
- Melhorar comunicação e produtividade.
- Garantir segurança e escalabilidade.

### Exemplos de Boas Práticas
- Planejamento claro e levantamento de requisitos.
- Controle de versão (ex: Git).
- Código limpo e comentado.
- Modularização para reuso.
- Testes automatizados (unitários, integração).
- CI/CD (integração e entrega contínua).
- Documentação atualizada.
- Revisão de código entre desenvolvedores.
- Gerenciamento ágil (Scrum, Kanban).
- Security by Design – segurança desde o início.

### Importância
- Empresas com boas práticas entregam sistemas mais robustos.
- Desenvolvedores que aplicam essas práticas demonstram maturidade e profissionalismo.
