import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ResultsProvider } from '../hooks/useResults';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ResultsProvider>
      <Component {...pageProps} />
    </ResultsProvider>
  );
}

export default MyApp;
