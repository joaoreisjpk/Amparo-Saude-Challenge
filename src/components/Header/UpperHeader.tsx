import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function UpperHeader() {
  return (
    <div
      style={{
        backgroundColor: '#eee',
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1600px',
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
      </section>
    </div>
  );
}
