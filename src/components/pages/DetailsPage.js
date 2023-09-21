import React from "react";
import { useLocation } from "react-router-dom";
import { DetailsTable } from "../tables/DetailsTable";

export const DetailsPage = () => {
    const location = useLocation();
    const { rowData } = location.state;

    return (
        <DetailsTable data={rowData} />
    )
}