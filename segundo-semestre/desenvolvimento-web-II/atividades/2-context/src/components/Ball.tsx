import styled from 'styled-components';

const BallContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #4f46e5;
  color: white;
  font-size: 22px;
  font-weight: bold;
  margin: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;

export default function Ball({ letter }: { letter: string }) {
    return <BallContainer>{letter}</BallContainer>;
}