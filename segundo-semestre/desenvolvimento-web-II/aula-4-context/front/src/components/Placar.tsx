interface Props {
    quant: number;
}

export default function Placar(props:Props){
    return <h3>Quantidade: {props.quant}</h3>
}