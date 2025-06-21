# Resumo das Aulas

## Aula 1 - React TypeScript

### 1. React
React é uma biblioteca JavaScript para a construção de interfaces de usuário (UI), criada pelo Facebook.  
Seu foco principal é tornar a construção de interfaces mais modular, reutilizável e eficiente.

**Conceitos-chave:**
- Componentes: Blocos reutilizáveis de UI.
- JSX: Uma extensão da linguagem JavaScript que permite escrever HTML dentro do código JS/TS.
- Virtual DOM: Uma representação virtual do DOM real que permite atualizações eficientes.
- Unidirectional Data Flow (Fluxo de dados unidirecional): Os dados fluem de cima para baixo entre os componentes.

**Exemplo:**
```tsx
function Hello() {
  return <h1>Olá, mundo!</h1>;
}
```

### 2. Vite
Vite é uma ferramenta de build para projetos web modernos.  
Criada para substituir o Webpack em muitos casos, é conhecida por ser extremamente rápida, tanto na inicialização quanto na recarga em tempo real (HMR - Hot Module Replacement).

**Benefícios:**
- Inicialização instantânea.
- Compilação on-demand.
- Suporte nativo a ES Modules.
- Suporte direto a TypeScript, React, Vue, etc.

**Instalação rápida:**
```bash
npm create vite@latest
# ou
yarn create vite
```

### 3. Projeto React + TypeScript usando Vite
**Estrutura básica do projeto criado:**
``` bash
my-app/
├── public/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── index.html
├── tsconfig.json
├── vite.config.ts
└── package.json
```

**Passos para criar:**
```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
```

**`App.tsx` básico:**
```tsx
import React from 'react';

function App() {
  return (
    <div>
      <h1>Bem-vindo ao React + TypeScript + Vite</h1>
    </div>
  );
}

export default App;
```

### 4. Componente React
Um componente é uma função ou classe que retorna `JSX`. Ele pode aceitar `props` (propriedades) para se tornar reutilizável e dinâmico.

**Exemplo com `Props` e `TypeScript`:**
```tsx
import React from 'react';

type SaudacaoProps = {
  nome: string;
};

const Saudacao: React.FC<SaudacaoProps> = ({ nome }) => {
  return <h2>Olá, {nome}!</h2>;
};

export default Saudacao;
```

**Uso no `App.tsx`:**
```tsx
import Saudacao from './Saudacao';

function App() {
  return (
    <div>
      <Saudacao nome="Gabriel" />
    </div>
  );
}
```

### 5. React.Fragment
O `React.Fragment` permite agrupar múltiplos elementos sem adicionar elementos extras no DOM, como uma <div>.

**Por que usar?**  
Para retornar vários elementos adjacentes sem precisar de uma <div> desnecessária.  

**Sintaxe completa:**  
```tsx
import React from 'react';

function ListaDeItens() {
  return (
    <React.Fragment>
      <li>Item 1</li>
      <li>Item 2</li>
    </React.Fragment>
  );
}
```

**Sintaxe curta:**
```tsx
function ListaDeItens() {
  return (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
    </>
  );
}
```

## Aula 2 - State

### 1. State em React
O `state` (ou "estado") em `React` representa dados mutáveis que definem o comportamento dinâmico de um componente.  
Sempre que o estado muda, o `React` re-renderiza o componente para refletir essas mudanças na interface do usuário.  

**Como declarar um `state`?**
Em componentes funcionais, usamos o **hook** `useState`.

**Exemplo básico:**
```tsx
import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Valor atual: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
```

**Explicação:**
- `useState(0)`: inicializa o estado com o valor 0.
- `contador`: valor atual do estado.
- `setContador`: função usada para atualizar o estado.
- Toda vez que `setContador` é chamado, o React re-renderiza o componente com o novo valor.

**Tipagem em TypeScript:**
O React consegue inferir o tipo automaticamente, mas você pode ser explícito:

```tsx
const [nome, setNome] = useState<string>('');
```

**Várias variáveis de estado:**
Você pode ter quantos `useState` quiser.

```tsx
const [nome, setNome] = useState('Gabriel');
const [idade, setIdade] = useState(25);
```

### 2. Função de atualização do `state`
A função de atualização (ex: `setContador`) é usada para modificar o valor atual do estado.  
O React não permite modificar o valor diretamente; você deve usar essa função.  

**Exemplo com função direta:**
```tsx
setContador(contador + 1);
```

**Exemplo com função `callback`:**
```tsx
setContador((valorAnterior) => valorAnterior + 1);
```

**Quando usar o formato com função?**
Quando a atualização depende do valor atual do estado, especialmente em casos onde múltiplas atualizações acontecem ao mesmo tempo.  

**Exemplo com risco de erro (forma incorreta):**
```tsx
// Pode causar problema se chamado várias vezes seguidas
setContador(contador + 1);
setContador(contador + 1); // Ainda vai somar só +1 no final
```

**Forma correta:**
```tsx
// Garante que cada atualização será baseada no valor mais recente
setContador(prev => prev + 1);
setContador(prev => prev + 1); // Soma corretamente +2
```

**Exemplo completo: Formulário com múltiplos estados**
```tsx
import React, { useState } from 'react';

function Formulario() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState<number>(0);

  const handleSubmit = () => {
    alert(`Nome: ${nome}, Idade: ${idade}`);
  };

  return (
    <div>
      <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" />
      <input type="number" value={idade} onChange={e => setIdade(Number(e.target.value))} placeholder="Idade" />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
}
```

## Aula 3 - Props

### 1. Vantagens da Composição de Componentes
Composição em React é a prática de combinar componentes menores e reutilizáveis para construir interfaces complexas.  
Isso promove a modularização, facilita a manutenção e reutilização de código.

**Vantagens:**
| Vantagem	| Descrição |
|-----------|-----------|
| Reutilização	| Um mesmo componente pode ser usado várias vezes em diferentes partes da aplicação. |
| Organização	| Divide a interface em partes pequenas, facilitando leitura e manutenção. |
| Separação de responsabilidades	| Cada componente tem uma única função clara. | 
| Testabilidade	| Componentes pequenos são mais fáceis de testar isoladamente. |

**Exemplo:**
```tsx
function Titulo() {
  return <h1>Minha Aplicação</h1>;
}

function Rodape() {
  return <footer>© 2025</footer>;
}

function Layout() {
  return (
    <div>
      <Titulo />
      <p>Conteúdo principal aqui.</p>
      <Rodape />
    </div>
  );
}
```
Cada parte (título, rodapé, conteúdo) é um componente separado, que juntos compõem a interface.

### 2. Props
`props` são valores passados para um componente pelo seu componente pai. A palavra "props" vem de "properties".
- Props são imutáveis dentro do componente.
- Permitem criar componentes dinâmicos e personalizáveis.

**Exemplo simples:**
```tsx
type SaudacaoProps = {
  nome: string;
};

function Saudacao({ nome }: SaudacaoProps) {
  return <h2>Olá, {nome}!</h2>;
}
```

**Uso:**
```tsx
<Saudacao nome="Gabriel" />
```

**Reutilização com Props:**
```tsx
function Botao(props: { texto: string }) {
  return <button>{props.texto}</button>;
}
```

**Uso:**
```tsx
<Botao texto="Salvar" />
<Botao texto="Cancelar" />
```

### 3. Children como Props
A `prop` especial `children` representa o conteúdo passado entre a abertura e fechamento de um componente.  

**Exemplo:**
```tsx
function Cartao({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px' }}>
      {children}
    </div>
  );
}
```

**Uso:**
```tsx
<Cartao>
  <h2>Título</h2>
  <p>Este é um conteúdo dentro do cartão.</p>
</Cartao>
```

**Vantagens de usar `children`:**
- Permite maior flexibilidade e composição.
- O componente não precisa saber exatamente o que vai ser exibido dentro dele.

**Exemplo prático completo:**
```tsx
type AlertaProps = {
  tipo: 'sucesso' | 'erro';
  children: React.ReactNode;
};

function Alerta({ tipo, children }: AlertaProps) {
  const cor = tipo === 'sucesso' ? 'green' : 'red';
  return (
    <div style={{ border: `2px solid ${cor}`, padding: '10px' }}>
      {children}
    </div>
  );
}
```

**Uso:**
```tsx
<Alerta tipo="sucesso">
  <strong>Sucesso!</strong> Seu cadastro foi concluído.
</Alerta>
```
## Aula 4 - Context

### 1. React Context
O React Context é uma ferramenta para compartilhar dados globais (como tema, idioma, autenticação, carrinho, etc.) entre componentes sem a necessidade de prop drilling (passar props manualmente de componente pai para filho, neto, bisneto...).  

**Quando usar Context?**
Use o Context quando:
- Muitos componentes precisam acessar os mesmos dados.
- Você quer evitar passar props manualmente em muitos níveis.

**Criando um Contexto**
- 1. Criar o contexto:
```tsx
import { createContext } from 'react';

type TemaContextType = {
  tema: 'claro' | 'escuro';
  alternarTema: () => void;
};

export const TemaContext = createContext<TemaContextType | null>(null);
```
- 2. Criar o provedor:
```tsx
import React, { useState } from 'react';
import { TemaContext } from './TemaContext';

export const TemaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tema, setTema] = useState<'claro' | 'escuro'>('claro');

  const alternarTema = () => {
    setTema(prev => (prev === 'claro' ? 'escuro' : 'claro'));
  };

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
};
```
- 3. Envolver sua aplicação:
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TemaProvider } from './context/TemaProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TemaProvider>
      <App />
    </TemaProvider>
  </React.StrictMode>
);
```
- 4. Usar o contexto (modo tradicional):
```tsx
import React, { useContext } from 'react';
import { TemaContext } from './context/TemaContext';

function BotaoTema() {
  const contexto = useContext(TemaContext);

  if (!contexto) return null; // segurança

  return (
    <button onClick={contexto.alternarTema}>
      Tema atual: {contexto.tema}
    </button>
  );
}
```

### 2. Hook Customizado (Custom Hook)
Um hook customizado encapsula lógica repetida em uma função reutilizável.  
Quando usamos Context, é comum criar um hook personalizado para facilitar o uso do contexto.  

**Exemplo:** Hook para acessar o contexto
```tsx
import { useContext } from 'react';
import { TemaContext } from './TemaContext';

export function useTema() {
  const contexto = useContext(TemaContext);
  if (!contexto) {
    throw new Error('useTema deve ser usado dentro de TemaProvider');
  }
  return contexto;
}
```

**Uso do hook:**
```tsx
import { useTema } from './context/useTema';

function BotaoTema() {
  const { tema, alternarTema } = useTema();

  return (
    <button onClick={alternarTema}>
      Tema atual: {tema}
    </button>
  );
}
```

**Benefícios do Hook Customizado:**
- Código mais limpo.
- Evita repetição.
- Facilita validações (ex: se está dentro do Provider).

## Aula 5 - Ciclo de Vida de um Componente

O ciclo de vida de um componente representa as etapas pelas quais um componente React passa, desde a sua criação, atualização e remoção da interface (DOM virtual).  
Essas etapas permitem que o desenvolvedor execute ações específicas em momentos específicos, como buscar dados, limpar timers, manipular eventos, etc.  

**Três fases principais:**
| Fase	| O que acontece? |
|------|------------------|
| Montagem	| O componente é criado e inserido no DOM. |
| Atualização	| O componente é re-renderizado com novas props ou state. |
| Desmontagem	| O componente é removido do DOM. |

**Componente Funcional + Hooks**
Em componentes funcionais modernos (React 16.8+), usamos o hook useEffect para trabalhar com o ciclo de vida.  

**Montagem (equivalente ao componentDidMount)**
```tsx
import React, { useEffect } from 'react';

function ExemploMontagem() {
  useEffect(() => {
    console.log('Componente montado');

    // Simular carregamento de dados
    fetch('/api/dados')
      .then(res => res.json())
      .then(data => console.log(data));
  }, []); // <-- array vazio: executa só na montagem

  return <div>Olá!</div>;
}
```
 
**Atualização (equivalente ao componentDidUpdate)**
```tsx
import React, { useEffect, useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('Contador atualizado:', contador);
  }, [contador]); // executa sempre que `contador` mudar

  return (
    <div>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
```

**Desmontagem (equivalente ao componentWillUnmount)**
Usado para limpar efeitos colaterais, como timers, assinaturas, listeners etc.
```tsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Executando...');
  }, 1000);

  return () => {
    clearInterval(timer);
    console.log('Componente desmontado');
  };
}, []);
```

**Resumo Visual do `useEffect`**
```tsx
useEffect(() => {
  // Montagem ou atualização (dependendo das deps)

  return () => {
    // Executa antes da desmontagem
  };
}, [dependencias]);
```

| Dependências (`[]`)	| Executa quando? |
|---------------------|-----------------|
| [] (vazio)	| Apenas uma vez, na montagem. |
| [algumaVariavel]	| A cada mudança da variável. |
| (sem segundo parâmetro)	| A cada renderização, montagem e atualização.|

**Exemplo Completo com Todas as Fases**
```tsx
import React, { useEffect, useState } from 'react';

function CicloDeVidaDemo() {
  const [exibir, setExibir] = useState(true);

  return (
    <div>
      <button onClick={() => setExibir(!exibir)}>
        {exibir ? 'Desmontar componente' : 'Montar componente'}
      </button>
      {exibir && <ComponenteInterno />}
    </div>
  );
}

function ComponenteInterno() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('🔵 Montado');

    return () => {
      console.log('🔴 Desmontado');
    };
  }, []);

  useEffect(() => {
    console.log('🟡 Atualizado:', contador);
  }, [contador]);

  return (
    <div>
      <h3>Contador: {contador}</h3>
      <button onClick={() => setContador(contador + 1)}>+</button>
    </div>
  );
}

export default CicloDeVidaDemo;
```

## Aula 6 - 
