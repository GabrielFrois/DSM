// Arquivo App.tsx
import { useState } from "react";
import Placar from "./components/Placar";
import Botao from "./components/Botao";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Botao count={count} setCount={setCount} />
      <Placar quant={count} />
    </>
  );
}