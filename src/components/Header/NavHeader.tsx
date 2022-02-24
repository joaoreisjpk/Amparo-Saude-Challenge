import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';

export default function NavHeader() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1600px',
        }}
      >
        <div>
          <Link href='/'>
            <a
              href='#'
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '2rem',
              }}
            >
              <div>
                <Image src='/logo.png' alt='' width='60px' height='60px' />
              </div>
              <div style={{ marginLeft: '10px' }}>
                <Image src='/logoname.png' alt='' width='120px' height='45px' />
              </div>
            </a>
          </Link>
        </div>
        <div style={{ margin: '1rem' }}>
          <Link href='/'>
            <a href=''>
              <Button
                sx={{ color: 'black', padding: '.4rem .8rem' }}
                size='small'
                style={{ textTransform: 'none', fontSize: '.9rem' }}
              >
                Quem é a Amparo?
              </Button>
            </a>
          </Link>
          <Link href='/calculadora'>
            <a href=''>
              <Button
                disableElevation
                disableFocusRipple
                disableRipple
                sx={{
                  background: '#bc384b',
                  margin: '0 .5rem',
                  padding: '.4rem .8rem',
                }}
                variant='contained'
                size='small'
                style={{ textTransform: 'none', fontWeight: '600' }}
              >
                Calcule seu Desconto
              </Button>
            </a>
          </Link>
          <Link href='/price-table'>
            <a href=''>
              <Button
                disableElevation
                disableFocusRipple
                disableRipple
                sx={{
                  background: '#0081a6',
                  margin: '0 2rem 0 .5rem',
                  padding: '.4rem .8rem',
                }}
                style={{ textTransform: 'none', fontWeight: '600' }}
                variant='contained'
                size='small'
              >
                Consulte taxas locais
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
