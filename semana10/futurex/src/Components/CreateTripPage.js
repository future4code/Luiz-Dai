import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"

export default function CreateTripPage() {
    const history = useHistory();
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token === null) {
            history.push("/login")
        }
    }, [history])
    return (
        <div>
            <h1>CreateTripPage</h1>
        </div>
    )
}
