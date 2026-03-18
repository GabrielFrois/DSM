import { useState } from 'react'
import { useTheme } from './context/ThemeContext'

function App(){
  const {tema, alternarTema} = useTheme();

  const estilo = {
    backgroundColor: tema === 'claro' ? '#fff' : '#333',
    color: tema === 'claro' ? '#000' : '#fff',
    height: '100vh',
    padding: '2rem',
  };

  return(
    <div style={estilo}>
      <h1>Tema atual: {tema}</h1>
      <button onClick={alternarTema}>Alternar Tema</button>
    </div>
  );
}

export default App;