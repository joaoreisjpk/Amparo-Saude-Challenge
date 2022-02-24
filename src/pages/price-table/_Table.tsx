import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { pricesData } from '../../interfaces';
import MUITable from '@mui/material/Table';
import { Box } from '@mui/material';

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

export default function Table({ data }: pricesData) {
  return (
    <Box sx={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}>
      <TableContainer component={Paper} sx={{ maxWidth: 700 }}>
        <MUITable sx={{ minWidth: 400 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell align='center'>Cidade Origem</StyledTableCell>
              <StyledTableCell align='center'>Cidade Destino</StyledTableCell>
              <StyledTableCell align='center'>R$ Por Minuto</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell align='center'>{item.origem}</StyledTableCell>
                <StyledTableCell align='center'>{item.destino}</StyledTableCell>
                <StyledTableCell align='center'>
                  {item.price.toFixed(2)}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </MUITable>
      </TableContainer>
    </Box>
  );
}
