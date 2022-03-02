import Image from 'next/image';
import { Link } from '../UI/NextLink';
import { Box } from '@mui/system';
import MUIButton from '../UI/MUIButton';

export default function NavHeader() {
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      width='100%'
      maxWidth='1600px'
    >
      <Link
        href='/'
        style={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: '3rem',
        }}
      >
        <Image src='/logo.png' alt='' width='60px' height='60px' />
        <Box ml='10px'>
          <Image src='/logoname.png' alt='' width='120px' height='50px' />
        </Box>
      </Link>
      <Box m={'1rem'}>
        <Link href='/'>
          <MUIButton
            sx={{
              color: '#555',
              padding: '.4rem 0rem',
              borderTop: '3px solid white',
              borderRadius: 0,
              fontWeight: 500,
              fontSize: '.9rem',
              '&:hover': {
                color: '#44b365',
                borderTop: '3px solid #44b365',
              },
            }}
            size='small'
          >
            Quem é a Amparo?
          </MUIButton>
        </Link>
        <Link href='/calculadora'>
          <MUIButton bgColor='#bc384b' variant='contained' size='small'>
            Calcule seu Desconto
          </MUIButton>
        </Link>
        <Link href='/price-table'>
          <MUIButton
            bgColor='#0081a6'
            variant='contained'
            size='small'
            sx={{ marginRight: '1.5rem' }}
          >
            Consulte taxas locais
          </MUIButton>
        </Link>
      </Box>
    </Box>
  );
}
