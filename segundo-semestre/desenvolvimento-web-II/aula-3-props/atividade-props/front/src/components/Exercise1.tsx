import React, { useState } from "react";
import styled from "styled-components";
import Ball from "./Ball";

const Exercise1: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const [numbers, setNumbers] = useState<number[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setQuantity(Math.max(0, Math.min(value, 12))); // Mantém entre 0 e 12
  };

  const generateNumbers = () => {
    if (quantity > 0) {
      const generatedNumbers = Array.from({ length: quantity }, () =>
        Math.floor(Math.random() * 100)
      );
      setNumbers(generatedNumbers.sort((a, b) => a - b));
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      generateNumbers();
    }
  };

  return (
    <Card>
      <Title>Exercício 1</Title>
      <Input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Digite um número"
        min="0"
        max="12"
      />
      <BallContainer>
        {numbers.map((number, index) => (
          <Ball key={index} number={number} color="#5A5AFF" />
        ))}
      </BallContainer>
    </Card>
  );
};

const Card = styled.div`
  background: #555;
  padding: 20px;
  border-radius: 8px;
  margin: 10px;
  width: 300px;
  text-align: center;
`;

const Title = styled.h2`
  color: #5A5AFF;
`;

const Input = styled.input`
  width: 80%;
  padding: 8px;
  margin: 10px 0;
  border-radius: 5px;
  text-align: center;
`;

const BallContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Exercise1;
