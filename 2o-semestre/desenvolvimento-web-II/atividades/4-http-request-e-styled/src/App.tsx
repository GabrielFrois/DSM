import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes";
import { GlobalStyle } from "./styles/global";
import { LotteryProvider } from "./contexts/LotteryContext";
import { Megasena } from "./pages/Megasena";
import { FaMoon, FaSun } from "react-icons/fa";
import styled from "styled-components";

const ThemeToggle = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.color};
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <LotteryProvider>
        <GlobalStyle />
        <Megasena />
        <ThemeToggle onClick={toggleTheme}>
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </ThemeToggle>
      </LotteryProvider>
    </ThemeProvider>
  );
}

export default App;

