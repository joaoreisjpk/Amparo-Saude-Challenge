import {
  createContext,
  useContext,
  useState,
  SetStateAction,
  Dispatch,
  useEffect,
} from 'react';
import { formikValueProps } from '../interfaces';

export interface ResultProps extends formikValueProps {
  discountedPrice: number;
  defaultPrice: number;
}

interface IContext {
  result: ResultProps[];
  setResult: Dispatch<SetStateAction<ResultProps[]>>;
}

interface TradesProviderProps {
  children: JSX.Element;
}

export const ResultsContext = createContext({} as IContext);

export function ResultsProvider({
  children,
}: TradesProviderProps): JSX.Element {
  const [result, setResult] = useState<ResultProps[]>([] as ResultProps[]);

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
