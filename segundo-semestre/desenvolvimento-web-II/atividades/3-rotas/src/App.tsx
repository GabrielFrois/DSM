import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Palpite } from './pages/Palpite';
import { Historico } from './pages/Historico';
import { Header } from './components/Header';
import { PalpiteProvider } from './context/PalpiteContext';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <PalpiteProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <main> {/* Contêiner que centraliza o conteúdo */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/palpite" element={<Palpite />} />
            <Route path="/historico" element={<Historico />} />
          </Routes>
        </main>
      </BrowserRouter>
    </PalpiteProvider>
  );
}

export default App;
