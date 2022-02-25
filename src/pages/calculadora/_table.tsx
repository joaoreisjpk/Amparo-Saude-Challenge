import { styled } from '@mui/material/styles';
import MUITable from '@mui/material/Table';
import {
  Box,
  Button,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Paper,
  TableCell,
  tableCellClasses,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import LinearProgress from '@mui/material/LinearProgress';

import { useResults } from '../../hooks/useResults';
import { moneyFormatting } from '../../helpers';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Table() {
  const { result, remove } = useResults();

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 1200 }}>
      <MUITable sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>Origem</StyledTableCell>
            <StyledTableCell align='center'>Destino</StyledTableCell>
            <StyledTableCell align='center'>Tempo</StyledTableCell>
            <StyledTableCell align='center'>Plano FaleMais</StyledTableCell>
            <StyledTableCell align='center'>Com FaleMais</StyledTableCell>
            <StyledTableCell align='center'>Sem FaleMais</StyledTableCell>
            <StyledTableCell align='center' />
          </TableRow>
        </TableHead>
        <TableBody>
          {!!result &&
            result.map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell align='center'>
                  {item.originValue}
                </StyledTableCell>
                <StyledTableCell align='center'>
                  {item.destinationValue}
                </StyledTableCell>
                <StyledTableCell align='center'>
                  {item.minutsValue}
                </StyledTableCell>
                <StyledTableCell align='center'>
                  FaleMais {item.planValue}
                </StyledTableCell>
                <StyledTableCell align='center'>
                  {moneyFormatting(item.discountedPrice)}
                </StyledTableCell>
                <StyledTableCell align='center'>
                  {moneyFormatting(item.defaultPrice)}
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <Button
                    type='submit'
                    size='large'
                    sx={{ height: '3.4rem', color: '#bc384b' }}
                    onClick={() => remove(item.id)}
                  >
                    <DeleteOutlineIcon />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </MUITable>
      {!result && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress sx={{ height: '.5rem' }} />
        </Box>
      )}
    </TableContainer>
  );
}
