import { useContext } from "react";
import { LotteryContext } from "../contexts/LotteryContext";
import { Ball } from "../components/Ball";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid ${({ theme }) => theme.borderColor};
  padding: 2rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Numbers = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

export function Megasena() {
  const { megasena } = useContext(LotteryContext);

  if (!megasena) return <p>Carregando...</p>;

  return (
    <Container>
      <h1>MEGA-SENA</h1>
      <Numbers>
        {megasena.dezenas.map((dezena, index) => (
          <Ball key={index} number={dezena} />
        ))}
      </Numbers>
      <p>{megasena.dataPorExtenso}</p>
    </Container>
  );
}
