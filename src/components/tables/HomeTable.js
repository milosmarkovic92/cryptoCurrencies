import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

export const HomeAndFavoritesTable = ({ symbols }) => {
    const dataBySymbol = useSelector((state) => state.dataBySymbol);

    const navigate = useNavigate();

    const handleNavigateToDetails = (row) => {
        navigate(`/details/${row.symbolName.toLowerCase()}`, { state: { rowData: row } });
    };

    const convertedData = Object.keys(dataBySymbol).map((key) => [key, dataBySymbol[key]]);
    const flattenedData = convertedData.map(el => el.flat());

    const preparedData = flattenedData.map((el, idx) => {
        let flattenedEl = [].concat(...el);
        let symbolName = symbols[idx];
        let lastPrice = flattenedEl[7];
        let dailyChange = flattenedEl[5];
        let changePerc = flattenedEl[6];
        let high = flattenedEl[9];
        let low = flattenedEl[10];

        return {
            symbolName,
            lastPrice,
            dailyChange,
            changePerc,
            high,
            low
        }
    })

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Last</TableCell>
                        <TableCell align="right">Change</TableCell>
                        <TableCell align="right">Change Percent</TableCell>
                        <TableCell align="right">High</TableCell>
                        <TableCell align="right">Low</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {preparedData.map((row) => (
                        <TableRow
                            key={row.symbolName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <StyledLink align="left" onClick={() => handleNavigateToDetails(row)}>
                                {row.symbolName}
                            </StyledLink>
                            <TableCell align="right">{row.lastPrice}</TableCell>
                            <TableCell align="right">{row.dailyChange}</TableCell>
                            <TableCell align="right">{row.changePerc}</TableCell>
                            <TableCell align="right">{row.high}</TableCell>
                            <TableCell align="right">{row.low}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


const StyledLink = styled(TableCell)`
  &.MuiTableCell-root {
    padding: 10px;
    text-decoration: none;
    color: #459FB6;
    font-size: 1rem;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
  }  
    
`;