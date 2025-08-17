import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const PlatformCompare = ({ platforms }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Platform</TableCell>
            <TableCell align="right">Commission</TableCell>
            <TableCell align="right">Avg. Rate</TableCell>
            <TableCell align="right">Competition</TableCell>
            <TableCell align="right">Best For</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {platforms.map((platform) => (
            <TableRow key={platform.name}>
              <TableCell component="th" scope="row">
                {platform.name}
              </TableCell>
              <TableCell align="right">{platform.commission}%</TableCell>
              <TableCell align="right">${platform.avgRate}/hr</TableCell>
              <TableCell align="right">{platform.competition}/5</TableCell>
              <TableCell align="right">{platform.bestFor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PlatformCompare;