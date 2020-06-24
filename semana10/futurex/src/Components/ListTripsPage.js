import React from 'react'
import { useHistory } from "react-router-dom"

export default function ListTripsPage() {
    const history = useHistory();

    const goToDetails = () => {
        history.push("/trips/details");
    };
    const goToCreate = () => {
        history.push("/trips/create");
    };


    return (
        <div>
            <h1>ListTripsPage</h1>
            <button onClick={goToDetails}>DETAILS</button>
            <button onClick={goToCreate}>CREATE</button>
        </div>
    )
}
