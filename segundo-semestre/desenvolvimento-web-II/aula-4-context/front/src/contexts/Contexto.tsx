import { createContext, useState } from "react";

interface ContextoProps {
    contagem: number;
    inc: () => void; 
}

interface ChildrenProps {
    children: React.ReactNode;
}

export const Contexto = createContext({} as ContextoProps);

export function Provedor({children}:ChildrenProps){
    const [contagem, setContagem] = useState(0);

    function inc(){
        setContagem(contagem + 1);
    }

    return <Contexto.Provider value={{contagem,inc}}>
        {children}
    </Contexto.Provider>
}