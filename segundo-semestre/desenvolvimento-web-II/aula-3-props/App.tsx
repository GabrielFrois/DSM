import { useState } from "react";

interface Person {
  nome: string;
  idade: string;
}

export default function App() {
  const [nome, setNome] = useState<string>("");
  const [idade, setIdade] = useState<string>("");
  const [lista, setLista] = useState<Person[]>([]);

  function handleSave() {
    setLista([...lista, {nome,idade}]);
  }

  return (
    <div>
      <div>
        <label htmlFor="name">Nome</label>
        <input id="name" value={nome} onChange={(e) => setNome(e.target.value)} />
      </div>
      <div>
        <label htmlFor="age">Idade</label>
        <input id="age" value={idade} onChange={(e) => setIdade(e.target.value)} />
      </div>
      <button onClick={handleSave}>Salvar</button>

      {lista.map((item, indice) => (
        <div key={indice}>{item.nome} - {item.idade} </div>
      ))}
    </div>
  );
}
 