import type { NextPage } from 'next';
import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';

import Header from '../components/Header';
import PlanCards from './_planCards';

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/mainbkg.png")',
        backgroundSize: 'calc(100vh - 5rem)',
        backgroundPosition: 'right',
        backgroundPositionY: '5rem',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <Head>
        <title> Home - Amparo Telefônica</title>
        <meta
          name='description'
          content='Você está na Amparo Telefônica, uma empresa com diversos planos que facilitam e dimuem seu custo em ligações. Quer receber um serviço que se encaixe na sua rotina? Venha pra Amparo!'
        />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Box
        sx={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}
        ml='max(-20rem, -20vw)'
      >
        <Stack sx={{ width: '700px', gap: '1rem' }}>
          <Typography variant='h4' color='gray' fontWeight={600}>
            Ligações de um jeito simples e{' '}
            <span style={{ color: '#44b161' }}>eficiente.</span>
          </Typography>
          <Typography color='#555'>
            Você está na Amparo Telefônica, uma empresa com diversos planos que
            facilitam e dimuem seu custo em ligações. Venha receber um serviço
            que se encaixe na sua rotina.
          </Typography>
          <PlanCards />
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
