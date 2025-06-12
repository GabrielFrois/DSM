import { useContext } from 'react';
import styled from 'styled-components';
import { PalpiteContext } from '../context/PalpiteContext';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

const Card = styled.div`
  background-color: #1a1a1a;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid #555;
  text-align: center;
`;

const Linha = styled.div`
  margin: 10px 0;
`;

const Numero = styled.span`
  display: inline-block;
  margin: 5px;
  width: 35px;
  height: 35px;
  background-color: #2ecc71;
  border-radius: 50%;
  font-weight: bold;
  line-height: 35px;
`;

export const Historico = () => {
  const { historico } = useContext(PalpiteContext);

  return (
    <Container>
      <Card>
        <h2>Palpites</h2>
        {historico.map((palpite, idx) => (
          <Linha key={idx}>
            {palpite.map((num, i) => (
              <Numero key={i}>{num}</Numero>
            ))}
          </Linha>
        ))}
      </Card>
    </Container>
  );
};