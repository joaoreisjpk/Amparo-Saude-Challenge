import { Card, CardContent, Stack, Typography } from '@mui/material';
import CardItem from './_cardItem';

export default function PlanCards() {
  return (
    <Stack direction='row' spacing={3} mt={5}>
      <CardItem num='30' color='#44b161' />
      <CardItem num='60' color='#fb843f' />
      <CardItem num='120' color='#bc384b' />
    </Stack>
  );
}
