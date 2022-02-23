import Image from 'next/image';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <section>
      <div
        style={{
          backgroundColor: '#eee',
          marginBottom: '10px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex' }}>
          <a
            href='https://www.facebook.com/amparocentrodesaude'
            target='_blank'
            rel='noreferrer'
            style={{ margin: '.8rem 1rem .8rem 2rem', color: 'gray' }}
          >
            <FacebookOutlinedIcon fontSize='small' />
          </a>
          <a
            href='https://www.instagram.com/amparo.saude/'
            style={{ margin: '.8rem 1rem', color: 'gray' }}
            target='_blank'
            rel='noreferrer'
          >
            <InstagramIcon fontSize='small' />
          </a>
          <a
            href='https://www.linkedin.com/company/amparo-saude'
            style={{ margin: '.8rem 1rem', color: 'gray' }}
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInIcon fontSize='small' />
          </a>
          <a
            href='https://www.youtube.com/channel/UCy-L1-jovO1930WXdPLCkpw'
            style={{ margin: '.8rem 1rem', color: 'gray' }}
            target='_blank'
            rel='noreferrer'
          >
            <YouTubeIcon fontSize='small' />
          </a>
        </div>
        <div style={{ display: 'flex' }}>
          <div
            style={{
              margin: '1rem',
              fontSize: '.8rem',
              color: '#777',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <MailOutlineIcon sx={{ height: 16 }} />
            meajude@amparotelefonica.com
          </div>
          <div
            style={{
              margin: '1rem',
              fontSize: '.8rem',
              color: '#777',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <PhoneIcon sx={{ height: 15 }} />
            4020-1766
          </div>
          <div
            style={{
              margin: '1rem',
              fontSize: '.8rem',
              color: '#777',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <WhatsAppIcon sx={{ height: 15 }} />
            (11) 4020-1766
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
              <Button sx={{ color: 'black' }} size='small'>
                Quem é a amparo
              </Button>
            </a>
          </Link>
          <Link href='/calculadora'>
            <a href=''>
              <Button
                disableElevation
                disableFocusRipple
                disableRipple
                sx={{ background: '#bc384b', margin: '0 2rem 0 1rem' }}
                variant='contained'
                size='small'
              >
                Calcule seu Desconto
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
