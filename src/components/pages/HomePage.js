import React, { useEffect } from "react";
import { HomeAndFavoritesTable } from "../tables/HomeTable";
import { useDispatch } from 'react-redux';
import { connectWebSocket } from "../../utils/websocket";
import { clearData, updateData } from "../../redux/actions";

export const HomePage = ({ symbols }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(clearData());
        };
    }, [dispatch]);

    useEffect(() => {
        const ws = connectWebSocket(symbols, (data) => {
            const [symbol, ...tickerData] = data;
            dispatch(updateData(symbol, tickerData));
        });

        return () => {
            ws.close();
        };
    }, [dispatch, symbols]);
    return (
        <HomeAndFavoritesTable symbols={symbols} />
    )
}