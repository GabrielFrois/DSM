# UML

A UML (Unified Modeling Language) é a linguagem padrão e mais completa para modelagem de sistemas, atualmente na versão **2.5**, com um total de **14 diagramas**. É considerada uma linguagem universal para modelagem de software, sendo essencial para qualquer desenvolvedor.

## Tipos de Diagramas na UML

Os diagramas são classificados em três categorias principais:

### 1. Diagramas Estruturais
Representam a estrutura do sistema:
- **Diagrama de classes**  
- **Diagrama de objetos**  
- **Diagrama de componentes**  
- **Diagrama de instalação**  
- **Diagrama de pacotes**  
- **Diagrama de estrutura**  
- **Diagrama de perfil**  

### 2. Diagramas Comportamentais
Representam o comportamento do sistema:
- **Diagrama de casos de uso**  
- **Diagrama de máquina de estados**  
- **Diagrama de atividades**  

### 3. Diagramas de Interação
Demonstram como os elementos do sistema interagem:
- **Diagrama de sequência**  
- **Diagrama de interatividade**  
- **Diagrama de comunicação ou colaboração**  
- **Diagrama de tempo**  

---

## Diagrama de Casos de Uso
- Representa o sistema do ponto de vista do usuário.  
- Mostra as ações realizadas pelo sistema, e não pelo usuário.  
- Possui três principais elementos:  
  - **Ator:** Interage com o sistema.  
  - **Caso de uso:** Representa uma funcionalidade do sistema.  
  - **Associação:** Ligação entre ator e caso de uso.  

### Relacionamentos entre Casos de Uso
- **Include:** Um caso de uso sempre chama outro.  
- **Extends:** Um caso de uso pode chamar outro, dependendo da situação.  

---

## Herança
- Um ator pode herdar características de outro, permitindo maior organização no diagrama de casos de uso.

---

## Ferramentas para Modelagem UML
- **Ferramenta CASE:** Software para criação de diagramas UML, essencial para desenvolvimento de software.  
- **JUDE / ASTAH:** Software para modelagem UML desenvolvido em Java, garantindo sua portabilidade.  

**Fonte principal:** [UML.org](https://www.uml.org)

---

## Diagrama de Classes
- **É o principal diagrama da UML.**  
- Representa o sistema do ponto de vista interno ("de dentro para fora").  
- Assim como o diagrama de casos de uso, é uma **representação estática** do sistema.  
- **Composto por:**  
  - **Classes**  
  - **Associações entre classes**  

### Estrutura da Classe
- Uma classe é formada por **métodos e atributos**.
- Pode ser:
  - **Completa:** Possui métodos e atributos definidos.
  - **Parcial:** Contém apenas métodos ou apenas atributos.

### Generalização e Especialização
- Seguem o mesmo princípio da **herança** vista no diagrama de casos de uso.
- Representadas por um **triângulo** no diagrama.

### Tipos de Associação
- Dependem das regras de domínio do negócio.
- São fundamentais para definir corretamente o diagrama de classes.
- Principais tipos:
  - **Agregação**  
  - **Composição**  

#### Agregação
- O **objeto-parte** pode existir independentemente do **objeto-todo**.
- Exemplo: **Time** (objeto-todo) e **Atleta** (objeto-parte).  
- Representado por um **losango não preenchido** na extremidade da classe-todo.

#### Composição
- O **objeto-parte** **NÃO** pode existir sem o **objeto-todo**.
- Exemplo: **Pedido** (objeto-todo) e **ItemPedido** (objeto-parte).  
- Representado por um **losango preenchido** na extremidade da classe-todo.

### Multiplicidade
- Indica o tipo de relacionamento entre as classes envolvidas.

### Atributos
- São as **características** da classe.
- Cada atributo deve ter um **tipo de dado específico**.
- Uma classe pode conter **N atributos**.

### Métodos
- São as **ações** que a classe pode realizar.
- **Devolvem um valor tangível** através de parâmetros pré-definidos.
- Se um método não retorna valor, usa-se **VOID**.

### Estereótipos
- **Boundary:** Representa a interface com o usuário.  
- **Control:** Representa a implementação do código do sistema.  

---

## Diagrama de Sequência
- **Representação dinâmica** do sistema em execução.
- Mostra **passo a passo** as ações e seus possíveis retornos.
- Facilita a compreensão do **funcionamento lógico do sistema**.

### Regras de Modelagem
- Deve ser criado para cada **caso de uso** diretamente ligado a um ator.
- Cada situação do caso de uso deve ser representada separadamente.
- Necessário que os diagramas de **casos de uso e classes** já estejam prontos antes da criação do diagrama de sequência.
- Definir **interfaces** facilita a modelagem.

### Comunicação no Diagrama de Sequência
#### Comunicação Síncrona
- O **emissor e receptor** permanecem sincronizados durante a transmissão.  
- Exemplo: **Chat, videoconferência, chamadas telefônicas**.

#### Comunicação Assíncrona
- O receptor pode **responder em outro momento**.  
- Exemplo: **E-mail, fóruns e listas de discussão**.
