import React from "react";
import { useSelector } from "react-redux";
import { FavoritesTable } from "../tables/FavoritesTable";

export const FavoritesPage = () => {
    const favorites = useSelector((state) => state.favorites);

    return (
        <FavoritesTable data={favorites} />
    )
}