import './App.css';
import { LetterProvider } from './contexts/LetterCtx';
import Input from './components/Input';
import Display from './components/Display';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vh;
  background-color: black;
  padding: 20px;
`;

const ContentBox = styled.div`
  background: #2c2c2c;
  padding: 40px;
  border: 1px solid gray;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1);
  width: 300px;
  min-height: 200px;
`;

function App() {
  return (
    <LetterProvider>
      <AppContainer>
        <ContentBox>
          <Input />
          <Display />
        </ContentBox>
      </AppContainer>
    </LetterProvider>
  );
}

export default App;