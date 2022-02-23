import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Header from '../../components/Header';
import { pricesData } from '../../interfaces';

export default function Prices({ data }: pricesData): JSX.Element {
  return (
    <div>
      <Head>
        <title> Prices - Amparo Telefônica</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <table>
        <tr>
          <th>Origem</th>
          <th>Destino</th>
          <th>R$ Por Minuto</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.origem}</td>
            <td>{item.destino}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/prices');
  const data = await response.json();

  return {
    props: {
      data,
    },
    revalidate: 15 * 60 * 60,
  };
};
