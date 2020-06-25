import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"

export default function ListTripsPage() {
    const history = useHistory();
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token === null) {
            history.push("/login")
        }
    }, [history])

    const goToDetails = () => {
        history.push("/trips/details");
    };
    const goToCreate = () => {
        history.push("/trips/create");
    };
    const logout = () => {
        localStorage.clear()
        history.push("/login")
    }




    return (
        <div>
            <h1>ListTripsPage</h1>
            <button onClick={goToDetails}>DETAILS</button>
            <button onClick={goToCreate}>CREATE</button>
            <button onClick={logout}>LOGOUT</button>
        </div>
    )
}
