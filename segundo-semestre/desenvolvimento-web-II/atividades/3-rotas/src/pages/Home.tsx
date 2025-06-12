import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

const Card = styled.div`
  border: 1px solid #555;
  padding: 40px;
  border-radius: 10px;
  background: #1a1a1a;
`;

const Button = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: blue;
  color: white;
  font-weight: bold;
  border-radius: 5px;
`;

export const Home = () => (
  <Container>
    <Card>
      <h1 style={{ marginBottom: '20px' }}>Bem-vindo!</h1>
      <Button to="/palpite">Clique para começar</Button>
    </Card>
  </Container>
);