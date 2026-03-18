import { createContext, useState, ReactNode, useContext } from 'react';

type Theme = 'claro' | 'escuro';

interface ThemeContextType {
    tema: Theme;
    alternarTema: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode}) => {
    const [tema, setTema] = useState<Theme>('claro');

    const alternarTema = () => {
        setTema((prev) => (prev === 'claro' ? 'escuro' : 'claro'));
    };

    return (
        <ThemeContext.Provider value={{tema, alternarTema}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
    }
    return context;
}