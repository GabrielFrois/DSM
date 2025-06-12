import { useContext } from "react";
import { LetterCtx } from "../contexts/LetterCtx";
import styled from "styled-components";

const InputField = styled.input`
  padding: 10px;
  font-size: 18px;
  border-radius: 10px;
  outline: none;
  width: 250px;
  background: white;
  color: black;
  margin-bottom: 15px;
`;

export default function Input() {
    const { input, setInput } = useContext(LetterCtx);
    return <InputField value={input} onChange={(e) => setInput(e.target.value)} />;
}