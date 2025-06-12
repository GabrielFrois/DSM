import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { PalpiteContext } from '../context/PalpiteContext';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

const Card = styled.div`
  background-color: #1a1a1a;
  padding: 40px;
  border: 1px solid #555;
  border-radius: 10px;
  text-align: center;
`;

const Numero = styled.span`
  display: inline-block;
  margin: 5px;
  padding: 10px;
  width: 40px;
  height: 40px;
  background-color: #2ecc71;
  border-radius: 50%;
  font-weight: bold;
`;

const Botao = styled.button`
  margin-top: 20px;
  background-color: blue;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
`;

export const Palpite = () => {
  const { palpiteAtual, gerarPalpite } = useContext(PalpiteContext);

  useEffect(() => {
    gerarPalpite();
  }, []);

  return (
    <Container>
      <Card>
        <h2>Palpite para a Mega-sena</h2>
        <div>
          {palpiteAtual.map((num, index) => (
            <Numero key={index}>{num}</Numero>
          ))}
        </div>
        <Botao onClick={gerarPalpite}>Nova sugestão</Botao>
      </Card>
    </Container>
  );
};