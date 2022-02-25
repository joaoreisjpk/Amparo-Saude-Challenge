import { createContext, useContext, useState, useEffect } from 'react';
import { resultProps } from '../interfaces';

interface IContext {
  result: resultProps[] | undefined;
  setResult: (newResult: resultProps) => Promise<void>;
  remove: (id: string) => Promise<void>;
}

interface TradesProviderProps {
  children: JSX.Element;
}

export const ResultsContext = createContext({} as IContext);

const URL = process.env.URL || 'https://amparo-telefonica.vercel.app/';
console.log(URL, process.env.URL);

export function ResultsProvider({
  children,
}: TradesProviderProps): JSX.Element {
  const [result, setResults] = useState<resultProps[]>();

  useEffect(() => {
    async function getResults() {
      const results = await fetch(URL + 'results');

      setResults(await results.json());
    }

    getResults();
  }, []);

  const setResult = async (newResult: resultProps) => {
    const resolve = await fetch(URL + 'results', {
      method: 'POST',
      body: JSON.stringify(newResult),
    });

    const response = await resolve.json();
    console.log(response);
    setResults(response);
  };

  const remove = async (id: string) => {
    const resolve = await fetch(URL + 'results', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
    });

    const response = await resolve.json();
    setResults(response);
  };

  return (
    <ResultsContext.Provider value={{ result, setResult, remove }}>
      {children}
    </ResultsContext.Provider>
  );
}

export function useResults(): IContext {
  const context = useContext(ResultsContext);
  return context;
}
