import styled from "styled-components";

interface BallProps {
  number: string;
}

const StyledBall = styled.div`
  background-color: #209869;
  color: #fff;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
`;

export function Ball({ number }: BallProps) {
  return <StyledBall>{number}</StyledBall>;
}
