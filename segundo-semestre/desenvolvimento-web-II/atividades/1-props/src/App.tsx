import React from "react";
import styled from "styled-components";
import Exercise1 from "./components/Exercise1";
import Exercise2 from "./components/Exercise2";

const App: React.FC = () => {
  return (
    <Container>
      <Exercise1 />
      <Exercise2 />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #1e1e1e;
  height: 100vh;
  width: 100vw;
  padding: 20px;
`;


export default App;
