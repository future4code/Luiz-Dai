import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"

export default function TripDetailsPage() {
    const history = useHistory();
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token === null) {
            history.push("/login")
        }
    }, [history])
    return (
        <div>
            <h1>TripDetailsPage</h1>
        </div>
    )
}
