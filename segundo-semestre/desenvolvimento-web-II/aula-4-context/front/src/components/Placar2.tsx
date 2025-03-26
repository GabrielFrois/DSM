interface Props {
    count: number;
    setCount: (value:number) => void;
}

export default function Botao(props:Props) {
  return (
    <>
      <button onClick={() => props.setCount(props.count + 1)}>
        Incrementar
      </button>
    </>
  );
}