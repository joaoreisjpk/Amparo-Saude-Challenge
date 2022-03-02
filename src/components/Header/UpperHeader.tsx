import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box } from '@mui/material';

export default function UpperHeader() {
  return (
    <Box bgcolor='#eee' mb='10px' display='flex' justifyContent='center'>
      <Box
        display='flex'
        justifyContent='space-between'
        width='100%'
        maxWidth='1600px'
      >
        <Box display='flex'>
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
        </Box>
        <Box display='flex'>
          <Box
            m='1rem'
            fontSize='.8rem'
            color='#777'
            display='flex'
            alignItems='center'
          >
            <MailOutlineIcon sx={{ height: 16 }} />
            meajude@amparotelefonica.com
          </Box>
          <Box
            margin='1rem'
            fontSize='.8rem'
            color='#777'
            display='flex'
            alignItems='center'
          >
            <PhoneIcon sx={{ height: 15 }} />
            4020-1766
          </Box>
          <Box
            m='1rem'
            fontSize='.8rem'
            color='#777'
            display='flex'
            alignItems='center'
          >
            <WhatsAppIcon sx={{ height: 15 }} />
            (11) 4020-1766
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
