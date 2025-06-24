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

## Aula 6 - React Routes

### 1. Routes (react-router-dom
O `react-router-dom` é a biblioteca oficial para gerenciar rotas em aplicações React. Ele permite criar navegação entre páginas sem recarregar a página inteira (SPA – Single Page Application).

**Instalação:**
```bash
npm install react-router-dom
```

**Estrutura básica com rotas:**
```tsx
// main.tsx ou index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

**Definindo rotas no App:**
```tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
  );
}
```

**Links de navegação:**
```tsx
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <Link to="/">Início</Link> | <Link to="/sobre">Sobre</Link>
    </nav>
  );
}
```

### 2. Rotas com Restrição de Acesso (Protegidas)
São rotas que exigem autenticação ou autorização para acesso. Exemplo: painel do usuário, área administrativa, etc.  

**Exemplo de rota protegida com verificação de login:**
```tsx
// AuthContext.tsx (contexto de autenticação)
import { createContext, useContext } from 'react';

type AuthContextType = { logado: boolean };
const AuthContext = createContext<AuthContextType>({ logado: false });

export const useAuth = () => useContext(AuthContext);
```

**Componente PrivateRoute:**
```tsx
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

type Props = {
  children: JSX.Element;
};

export function PrivateRoute({ children }: Props) {
  const { logado } = useAuth();

  if (!logado) {
    return <Navigate to="/login" />;
  }

  return children;
}
```

**Uso em Routes:**
```tsx
import Painel from './pages/Painel';
import Login from './pages/Login';
import { PrivateRoute } from './PrivateRoute';

<Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/painel" element={
    <PrivateRoute>
      <Painel />
    </PrivateRoute>
  } />
</Routes>
```

### 3. Hook useNavigate
`useNavigate` é um hook do react-router-dom que permite navegar entre rotas programaticamente, como após login, logout, envio de formulário etc.

**Exemplo de uso:**
```tsx
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const fazerLogin = () => {
    // simula login
    const autenticado = true;

    if (autenticado) {
      navigate('/painel');
    }
  };

  return <button onClick={fazerLogin}>Entrar</button>;
}
```
**Outras funcionalidades do navigate:**
```tsx
navigate('/sobre'); // navega para /sobre
navigate(-1);       // volta uma página no histórico
navigate('/home', { replace: true }); // substitui a página atual
```

## Aula 7 - HTTP Request

### 1. Requisição HTTP
Uma requisição HTTP é o processo pelo qual um cliente (ex: navegador ou app React) se comunica com um servidor para enviar ou receber dados.  

**Tipos comuns de requisição:**
| Método	| Descrição |
|---------|-----------|
| `GET`	| Busca informações (ex: lista de itens) |
| `POST`	| Envia informações para o servidor |
| `PUT`	| Atualiza dados existentes |
| `DELETE` |	Remove dados |

**Exemplo prático:** Requisição `GET` para buscar dados  
Backend fictício (JSON de usuários):
```json
[
  { "id": 1, "nome": "Gabriel" },
  { "id": 2, "nome": "Maria" }
]
```

**Usando fetch com React e TypeScript**
```tsx
import React, { useEffect, useState } from 'react';

type Usuario = {
  id: number;
  nome: string;
};

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    fetch('https://api.exemplo.com/usuarios')
      .then(res => res.json())
      .then(data => setUsuarios(data))
      .catch(err => console.error('Erro ao carregar:', err));
  }, []);

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {usuarios.map(user => (
          <li key={user.id}>{user.nome}</li>
        ))}
      </ul>
    </div>
  );
}
```

**Usando `axios` (opcional – mais fácil de usar)**
- 1. Instalação:
```bash
npm install axios
```
- 2. Código com axios:
```tsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';

type Usuario = {
  id: number;
  nome: string;
};

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    axios.get<Usuario[]>('https://api.exemplo.com/usuarios')
      .then(response => setUsuarios(response.data))
      .catch(error => console.error('Erro:', error));
  }, []);

  return (
    <div>
      <h2>Usuários</h2>
      <ul>
        {usuarios.map(user => (
          <li key={user.id}>{user.nome}</li>
        ))}
      </ul>
    </div>
  );
}
```

**Como lidar com `POST` (envio de dados)**
```tsx
function adicionarUsuario() {
  axios.post('https://api.exemplo.com/usuarios', {
    nome: 'Novo Usuário'
  }).then(res => {
    console.log('Usuário adicionado:', res.data);
  });
}
```

**Boas práticas:**
- Tratar erros com `.catch` ou `try/catch` (em async/await).
- Mostrar mensagens de carregamento.
- Nunca guardar senhas ou dados sensíveis no frontend.
- Validar os dados recebidos da API.

**Exemplo com async/await:**
```tsx
useEffect(() => {
  const carregarDados = async () => {
    try {
      const res = await fetch('https://api.exemplo.com/usuarios');
      const data = await res.json();
      setUsuarios(data);
    } catch (erro) {
      console.error('Erro ao buscar:', erro);
    }
  };

  carregarDados();
}, []);
```

## Aula 8 - Styled-Components

### 1. Styled-Components
`styled-components` é uma biblioteca de CSS-in-JS que permite escrever estilos diretamente no JavaScript/TypeScript usando template literals.  

**Instalação**
```bash
npm install styled-components
npm install --save-dev @types/styled-components
```

**Exemplo básico**
```tsx
import styled from 'styled-components';

const Titulo = styled.h1`
  color: darkblue;
  font-size: 2rem;
`;

function App() {
  return <Titulo>Olá, mundo!</Titulo>;
}
```

**Vantagens:**
- Escopo de CSS limitado ao componente.
- Estilo dinâmico com props.
- Temas fáceis de aplicar.
- Mais legível e modular que arquivos .css separados.

### 2. Estilos Globais com Styled-Components
É possível definir um reset global de CSS ou temas padrão aplicados a toda a aplicação.  

**Exemplo com `createGlobalStyle`**
```tsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Aplicação com estilo global</h1>
    </>
  );
}
```

### 3. Estilização de Componentes Existentes
Você pode estilizar componentes HTML e componentes React já existentes.  

**Estilizando HTML:**
```tsx
const Botao = styled.button`
  background-color: #008cff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
`;
```

**Estilizando um componente React:**
```tsx
import React from 'react';

const Texto = ({ children }: { children: React.ReactNode }) => (
  <p>{children}</p>
);

const TextoEstilizado = styled(Texto)`
  font-style: italic;
  color: #555;
`;
```

### 4. Estilização com Propriedades (props)

**Objetivo:**  
Mudar estilos dinamicamente com base em propriedades do componente.  

**Exemplo:**
```tsx
type BotaoProps = {
  destaque?: boolean;
};

const Botao = styled.button<BotaoProps>`
  background-color: ${({ destaque }) => (destaque ? 'red' : 'gray')};
  color: white;
  padding: 10px;
`;

function App() {
  return (
    <>
      <Botao destaque>Importante</Botao>
      <Botao>Normal</Botao>
    </>
  );
}
```

### 5. Temas com Styled-Components
Um tema define um conjunto de cores, fontes e estilos reutilizáveis para manter consistência visual.  

- 1. Criar o tema:
```tsx
export const temaClaro = {
  corPrimaria: '#3498db',
  corFundo: '#f4f4f4',
};

export const temaEscuro = {
  corPrimaria: '#e74c3c',
  corFundo: '#1a1a1a',
};
```

- 2. Envolver com `ThemeProvider`:
```tsx
import { ThemeProvider } from 'styled-components';
import { temaClaro } from './tema';
import App from './App';

<ThemeProvider theme={temaClaro}>
  <App />
</ThemeProvider>
```

- 3. Usar no `styled-component`:
```tsx
const Container = styled.div`
  background-color: ${({ theme }) => theme.corFundo};
  color: ${({ theme }) => theme.corPrimaria};
  padding: 20px;
`;
```

## Aula 9 - Servidor

### 1. Estrutura de uma aplicação do lado servidor
Uma aplicação backend moderna com Node.js e Express + TypeScript geralmente tem a seguinte estrutura:  
```
meu-servidor/
├── src/
│   ├── routes/
│   │   └── usuarios.routes.ts
│   ├── controllers/
│   │   └── usuarios.controller.ts
│   ├── index.ts         <- ponto de entrada do servidor
├── public/              <- arquivos estáticos (HTML, imagens, etc)
├── tsconfig.json        <- configuração do TypeScript
├── package.json         <- dependências e scripts
└── nodemon.json         <- config para desenvolvimento com auto-reload
```

### 2. Node.js e Express

**Node.js:** 
- Ambiente de execução JavaScript no lado do servidor.
- Permite criar APIs, manipular arquivos, acessar bancos de dados etc.

**Express:**
- Framework para Node.js que facilita a criação de servidores HTTP.
- Fornece métodos simples como get, post, put, delete.

### 3. Criar servidor Node.js com Express usando TypeScript

- **1. Inicializar o projeto:**
```bash
npm init -y
```

- **2. Instalar dependências:**
```bash
npm install express
npm install --save-dev typescript ts-node-dev @types/express
```

- **3. Criar tsconfig.json:**
```bash
npx tsc --init
```

**Edite as opções principais:**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}
```

### 4. Arquivo principal do servidor: `src/index.ts`
```ts
import express from 'express';
const app = express();
const PORT = 3000;

// Middleware para JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor está funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

**Execute com:**
```bash
npx ts-node-dev src/index.ts
```

### 5. Definição de Rotas

**Exemplo com rota `GET` e `POST`:**
```ts
app.get('/usuarios', (req, res) => {
  res.json([{ id: 1, nome: 'Gabriel' }]);
});

app.post('/usuarios', (req, res) => {
  const usuario = req.body;
  console.log('Novo usuário:', usuario);
  res.status(201).json({ mensagem: 'Usuário criado!' });
});
```

### 6. Envio de dados para o servidor

**Exemplo de envio com `POST`:**
- No frontend:
```tsx
fetch('http://localhost:3000/usuarios', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nome: 'João' })
});
```

- No backend (`req.body`) contém o objeto `{ nome: 'João' }`.

### 7. Servir arquivos estáticos
```ts
import path from 'path';

// Servir arquivos da pasta "public"
app.use(express.static(path.join(__dirname, '..', 'public')));
```
Agora qualquer arquivo HTML, CSS ou imagem dentro da pasta `public/` será acessível diretamente, por exemplo:
```
http://localhost:3000/index.html
```

### 8. Hierarquia de Rotas

Organize rotas em arquivos separados para manter o projeto limpo:  

- `src/routes/usuarios.routes.ts`
```ts
import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.json([{ id: 1, nome: 'Gabriel' }]);
});

export default router;
```

**Usar no index.ts:**
```ts
import usuariosRoutes from './routes/usuarios.routes';

app.use('/usuarios', usuariosRoutes);
```

Agora:
- `GET /usuarios` → lista usuários.
- Pode adicionar `/usuarios/:id`, `/usuarios/cadastrar`, etc.

## Aula 10 - Autenticação e autorização no servidor

### 1. Introdução

**Conceitos importantes:**
- Autenticação: Verifica quem é o usuário (ex: login com email/senha).
- Autorização: Verifica o que o usuário pode fazer (ex: só admins podem editar).

**Fluxo comum de autenticação:**
- Usuário envia e-mail e senha.
- Servidor verifica os dados no banco (com senha criptografada).
- Se estiver certo, gera e envia um token JWT ao cliente.
- Em cada requisição protegida, o cliente envia o token no cabeçalho.
- O servidor valida o token com um middleware antes de continuar.

### 2. Autenticação usando algoritmos de hash
Senhas nunca devem ser salvas em texto puro. Utilizamos algoritmos de hash como bcrypt para proteger as senhas.  

**Instalação do bcrypt:**
```bash
npm install bcrypt
npm install --save-dev @types/bcrypt
```

**Cadastro com hash:**
```ts
import bcrypt from 'bcrypt';

const senhaTexto = 'minhaSenha123';
const hash = await bcrypt.hash(senhaTexto, 10); // 10 = saltRounds

// Salve o hash no banco
```

**Verificação no login:**
```ts
const senhaDigitada = 'minhaSenha123';
const senhaSalva = usuarioNoBanco.senha; // hash

const valido = await bcrypt.compare(senhaDigitada, senhaSalva);
if (valido) {
  // autenticado
} else {
  // erro de login
}
```

### 3. Autenticação com Tokens (JWT)
JWT (JSON Web Token) é um token seguro enviado ao cliente após o login. Ele pode ser usado para autorizar requisições futuras sem precisar guardar estado no servidor (stateless).

**Instalar JWT:**
```bash
npm install jsonwebtoken
npm install --save-dev @types/jsonwebtoken
```

**Gerar token no login:**
```ts
import jwt from 'jsonwebtoken';

const payload = { id: usuario.id, nome: usuario.nome };
const token = jwt.sign(payload, 'segredo123', { expiresIn: '2h' });

res.json({ token });
```

**Enviar token do frontend:**
```tsx
fetch('/rota-protegida', {
  headers: {
    Authorization: `Bearer ${token}`
  }
});
```

**Verificar token no backend:**
```ts
const token = req.headers.authorization?.split(' ')[1];

try {
  const decoded = jwt.verify(token, 'segredo123');
  req.user = decoded; // opcional: salvar no request
  next();
} catch (err) {
  res.status(401).json({ erro: 'Token inválido' });
}
```

### 4. Middleware
Função intermediária no Express que executa antes da rota ser acessada.  
Ideal para verificar tokens, autorizações, logs, etc.  

**Exemplo:** middleware de autenticação
```ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function autenticarToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ erro: 'Token ausente' });
  }

  try {
    const decoded = jwt.verify(token, 'segredo123');
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ erro: 'Token inválido' });
  }
}
```

**Usando o middleware:**
```ts
import { autenticarToken } from './middlewares/autenticarToken';

app.get('/painel', autenticarToken, (req, res) => {
  res.json({ msg: 'Bem-vindo ao painel protegido!' });
});
```

## Aula 11 - Conexão com o SGBD

### 1. Conexão com o SGBD PostgreSQL
PostgreSQL é um SGBD relacional robusto, open source e escalável. Suporta tipos complexos, integridade referencial e SQL padrão.

- **1. Instalar o driver**
  Para conectar com PostgreSQL, usamos o pacote pg:
```bash
npm install pg
```

- **2. Criar arquivo de conexão**
  `src/database/postgres.ts`
```ts
import { Pool } from 'pg';

export const pool = new Pool({
  user: 'usuario',
  host: 'localhost',
  database: 'meubanco',
  password: 'senha',
  port: 5432,
});
```

- **3. Usar em uma rota:**
```ts
import express from 'express';
import { pool } from './database/postgres';

const app = express();
app.use(express.json());

app.get('/usuarios', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM usuarios');
    res.json(resultado.rows);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar usuários' });
  }
});
```

- **Dica:** usar variáveis de ambiente (`.env`) com dotenv
```ts
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ...
});
```

### 2. Conexão com o Banco SQLite
SQLite é um banco de dados leve e baseado em arquivos. Ideal para projetos pequenos ou testes locais.

- **1. Instalar dependências**
```bash
npm install sqlite3
npm install better-sqlite3
```

Ou com TypeScript e promises (recomendado):
```bash
npm install sqlite sqlite3
npm install --save-dev @types/sqlite3
```

- **2. Criar conexão com SQLite**
  `src/database/sqlite.ts`
```ts
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Cria e retorna uma conexão com o banco
export async function conectarSQLite() {
  return open({
    filename: './meubanco.sqlite',
    driver: sqlite3.Database
  });
}
```

- **3. Usar em rota:**
```ts
import express from 'express';
import { conectarSQLite } from './database/sqlite';

const app = express();
app.use(express.json());

app.get('/produtos', async (req, res) => {
  const db = await conectarSQLite();
  const produtos = await db.all('SELECT * FROM produtos');
  res.json(produtos);
});
```
  Criar tabela (exemplo inicial):
```ts
const db = await conectarSQLite();
await db.exec(`
  CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY,
    nome TEXT,
    preco REAL
  )
`);
```

**Comparativo**
|Recurso	| PostgreSQL	| SQLite |
|---------|-------------|--------|
|Tipo	| SGBD robusto e servidor	| Banco local baseado em arquivo |
|Uso ideal	| Produção, aplicações maiores	| Projetos pequenos, protótipos |
|Conexão	`pg.Pool`	| `sqlite` + `open()` |
|Suporte a múltiplos usuários| Sim	| Não (uso em produção requer cuidado) |
|Instalação |	Requer PostgreSQL instalado	| Nenhum servidor extra necessário |
