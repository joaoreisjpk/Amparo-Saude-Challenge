import * as React from 'react';
import { styled } from '@mui/material/styles';
import MUITable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { formikValueProps } from '../../interfaces';

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

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

export interface MUITableProps extends formikValueProps {
  discountedPrice: number;
  defaultPrice: number;
}

export default function Table({ data }: { data: MUITableProps | undefined }) {
  return (
    <TableContainer component={Paper}>
      <MUITable sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>Origem</StyledTableCell>
            <StyledTableCell align='center'>Destino</StyledTableCell>
            <StyledTableCell align='center'>Tempo</StyledTableCell>
            <StyledTableCell align='center'>Plano FaleMais</StyledTableCell>
            <StyledTableCell align='center'>Com FaleMais</StyledTableCell>
            <StyledTableCell align='center'>Sem FaleMais</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!!data &&
            [data].map((item) => (
              <StyledTableRow key={item.minutsValue + item.defaultPrice}>
                <StyledTableCell component='th' scope='row'>
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
                  {item.discountedPrice}
                </StyledTableCell>
                <StyledTableCell align='center'>
                  {item.defaultPrice}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
}
