import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import { addToFavorites, removeFromFavorites } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";


export const DetailsTable = ({ data }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    const [detailsData, setDetailsdata] = useState([data]);

    useEffect(() => {
        setDetailsdata([data])
    }, [data])

    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);
    const flatFavorites = favorites.flat();
    const isFavorite = flatFavorites.some((item) => item.symbolName === data.symbolName);

    const handleToggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFromFavorites(data.symbolName));
        } else {
            dispatch(addToFavorites(data));
        }
    };

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Symbol</TableCell>
                            <TableCell align="right">Last price</TableCell>
                            <TableCell align="right">High</TableCell>
                            <TableCell align="right">Low</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {detailsData.map((row) => (
                            <TableRow
                                key={row.symbolName}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                <TableCell align="left" >
                                    {row.symbolName}
                                </TableCell>
                                <TableCell align="right">{row.lastPrice}</TableCell>
                                <TableCell align="right">{row.high}</TableCell>
                                <TableCell align="right">{row.low}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {isLoggedIn ? <ButtonContainer>
                {isFavorite ?
                    <RemoveFromFavorites onClick={() => handleToggleFavorite()}>Remove from favorites</RemoveFromFavorites>
                    : <AddToFavorites onClick={() => handleToggleFavorite()}>Add to favorites</AddToFavorites>}

            </ButtonContainer> : null}
        </>
    );
}


const AddToFavorites = styled('button')`
    width: 200px;
    height: 40px;
    border-radius: 3px;
    border: none;
    background-color: #459FB6;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
`;

const ButtonContainer = styled('div')`
    margin-top: 10px;
`

const RemoveFromFavorites = styled('button')`
width: 200px;
height: 40px;
border-radius: 3px;
border: none;
background-color: #D83F31;
color: #fff;
font-size: 1rem;
font-weight: bold;
font-family: Arial, Helvetica, sans-serif;
`;