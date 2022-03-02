import { Card, CardContent, Stack, Typography } from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Box } from '@mui/system';

interface CardItemProps {
  num: string;
  color: string;
}

export default function CardItem({ num, color }: CardItemProps) {
  return (
    <Card elevation={24} style={{ borderRadius: '10px' }}>
      <CardContent>
        <Stack direction='row'>
          <PhoneInTalkIcon
            sx={{ marginRight: '.5rem', color }}
            fontSize='large'
          />
          <Typography fontWeight={600} color={'#0081a6'} mb={1} variant='h6'>
            FaleMais {num}
          </Typography>
        </Stack>
        <Typography color={'#555'}>
          Ligações menores que{' '}
          <Box component='span' color={color} fontWeight={600}>
            {num}
          </Box>{' '}
          minutos saem de graça! Sendo que toda a quantidade que extrapole esse
          número são acrescidos 10% do valor base.
        </Typography>
      </CardContent>
    </Card>
  );
}
