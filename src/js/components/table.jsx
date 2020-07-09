import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox
} from '@material-ui/core';

export default class SimpleTable extends React.Component {

  render() {
    return (
      <TableContainer component={Paper}>
        <Table className="table" aria-label="simple table">
          <TableHead>
            <TableRow>
              {this.props.headCells.map((item, index) => {
                return <TableCell key={index} align="right">{item.label}</TableCell>
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.rowCells.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="right" id={row.id}>{row.id}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.created}</TableCell>
                <TableCell align="right">{row.timeLeft}</TableCell>
                <TableCell align="right">{row.expaired}</TableCell>
                <TableCell align="right">{row.ip}</TableCell>
                <TableCell align="right">{row.server}</TableCell>
                <TableCell align="right">{row.trafficUsed}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}




