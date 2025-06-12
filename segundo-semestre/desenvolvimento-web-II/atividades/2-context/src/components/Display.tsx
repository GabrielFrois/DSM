import { useContext } from "react";
import { LetterCtx } from "../contexts/LetterCtx";
import Ball from "./Ball";
import styled from "styled-components";

const DisplayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border: 1px solid gray;
  border-radius: 10px;
  justify-content: center;
  min-height: 60px;
  width: 100%;
`;

export default function Display() {
    const { input } = useContext(LetterCtx);
    return (
        <DisplayContainer>
            {input ? input.split('').map((char, index) => <Ball key={index} letter={char} />) : "Sem entrada"}
        </DisplayContainer>
    );
}