import React from "react";
import styled from "styled-components";

interface BallProps {
  number: number;
  color: string;
  onClick?: () => void;
}

const Ball: React.FC<BallProps> = ({ number, color, onClick }) => {
  return (
    <StyledBall color={color} onClick={onClick}>
      {number}
    </StyledBall>
  );
};

const StyledBall = styled.div<{ color: string }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: ${(props) => props.color};
  cursor: pointer;
  margin: 5px;
`;

export default Ball;
