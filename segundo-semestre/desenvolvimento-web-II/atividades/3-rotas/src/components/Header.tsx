import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.header`
  background-color: #222;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  margin-left: auto; /* Empurra os links para a direita */
`;

export const Header = () => (
  <Container>
    <Nav>
      <Link to="/palpite">Palpite</Link>
      <Link to="/historico">Histórico</Link>
    </Nav>
  </Container>
);
