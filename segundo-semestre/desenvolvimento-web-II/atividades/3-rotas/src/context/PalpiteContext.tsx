import { createContext, useState, ReactNode } from 'react';

type PalpiteContextType = {
  palpiteAtual: number[];
  historico: number[][];
  gerarPalpite: () => void;
};

export const PalpiteContext = createContext({} as PalpiteContextType);

export const PalpiteProvider = ({ children }: { children: ReactNode }) => {
  const [palpiteAtual, setPalpiteAtual] = useState<number[]>([]);
  const [historico, setHistorico] = useState<number[][]>([]);

  const gerarPalpite = () => {
    const numeros = new Set<number>();
    while (numeros.size < 6) {
      numeros.add(Math.floor(Math.random() * 60) + 1);
    }
    const novo = Array.from(numeros).sort((a, b) => a - b);
    setPalpiteAtual(novo);
    setHistorico(prev => [...prev, novo]);
  };

  return (
    <PalpiteContext.Provider value={{ palpiteAtual, historico, gerarPalpite }}>
      {children}
    </PalpiteContext.Provider>
  );
};