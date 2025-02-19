import { useState } from "react";

export default function App() {
  const [nome, setNome]  = useState("Gabriel");
  const [idade, setIdade]  = useState(23);
  const [peso, setPeso]  = useState(70);

  function handleNome(e){
    setNome(e.target.value);
  }

  function handleIdade(e){
    setIdade(e.target.value);
  }

  function handlePeso(e){
    setPeso(e.target.value);
  }

  function handleSave(){
    console.log("aqui");
  }

  return <div>
    <input value={nome} onChange={handleNome} />
    <input type="number" value={idade} onChange={handleIdade} />
    <input type="number" step="0.1" value={peso} onChange={handlePeso} />
    <div>Nome: {nome} Idade: {idade} Peso: {peso}</div>
    <div>
      <button onClick={handleSave}>Salvar</button>
    </div>
  </div>;
}