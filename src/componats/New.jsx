import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, id, department, place, sem) {
  return {name, id, department, place, sem };
}

const rows = [
  createData('muhammed', 1, 'tvm', 'cse', 4),
  createData('alby', 2, 'wyd', 'ec', 4),
  createData('musharaf', 3, 'kyt', 'ec', 6),
  createData('pual', 4,'cmd', 'ec', 4),
  createData('avin', 5, 'asd', 'cse', 3),
];

function New() {
  return (
    <div><TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead x>
        <TableRow sx={{ '& td, & th': { border: 2 } }}>
          <TableCell><b>Name</b></TableCell>
          <TableCell align="right"><b>id</b></TableCell>
          <TableCell align="right"><b>place</b></TableCell>
          <TableCell align="right"><b>department</b></TableCell>
          <TableCell align="right"><b>sem</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '& td, & th': { border: 2 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.id}</TableCell>
            <TableCell align="right">{row.place}</TableCell>
            <TableCell align="right">{row.department}</TableCell>
            <TableCell align="right">{row.sem}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  )
}

export default New