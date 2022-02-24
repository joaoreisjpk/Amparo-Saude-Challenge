import {
  createContext,
  useContext,
  useState,
  SetStateAction,
  Dispatch,
  useEffect,
} from 'react';
import { resultProps } from '../interfaces';

interface IContext {
  result: resultProps[];
  setResult: Dispatch<SetStateAction<resultProps[]>>;
}

interface TradesProviderProps {
  children: JSX.Element;
}

export const ResultsContext = createContext({} as IContext);

export function ResultsProvider({
  children,
}: TradesProviderProps): JSX.Element {
  const [result, setResult] = useState<resultProps[]>([] as resultProps[]);

  useEffect(() => {
    const getStorage = localStorage.getItem('results') || '[]';
    setResult(JSON.parse(getStorage));
  }, []);

  useEffect(() => {
    localStorage.setItem('results', JSON.stringify(result));
  }, [result]);

  return (
    <ResultsContext.Provider value={{ result, setResult }}>
      {children}
    </ResultsContext.Provider>
  );
}

export function useResults(): IContext {
  const context = useContext(ResultsContext);
  return context;
}
