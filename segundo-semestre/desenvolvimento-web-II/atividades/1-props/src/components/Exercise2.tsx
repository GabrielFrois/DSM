import React, { useState } from "react";
import styled from "styled-components";
import Ball from "./Ball";

const Exercise2: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = Number(event.target.value);
    if (!isNaN(newNumber)) {
      setNumbers((prevNumbers) => {
        const updatedNumbers = [...prevNumbers, newNumber];
        return updatedNumbers.length > 12 ? updatedNumbers.slice(1) : updatedNumbers;
      });
    }
    event.target.value = ""; // Limpa o input após digitar
  };

  const removeNumber = (index: number) => {
    setNumbers((prevNumbers) => prevNumbers.filter((_, i) => i !== index));
  };

  return (
    <Card>
      <Title>Exercício 2</Title>
      <Input type="number" onKeyDown={(e) => e.key === "Enter" && handleInputChange(e as any)} placeholder="Digite um número"/>
      <BallContainer>
        {numbers.map((number, index) => (
          <Ball key={index} number={number} color="red" onClick={() => removeNumber(index)} />
        ))}
      </BallContainer>
    </Card>
  );
};

const Card = styled.div`
  background: #444;
  padding: 20px;
  border-radius: 8px;
  margin: 10px;
  width: 300px;
  text-align: center;
`;

const Title = styled.h2`
  color: red;
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

export default Exercise2;
