import React from 'react'
import { useHistory } from "react-router-dom"

export default function LoginPage() {
    const history = useHistory();

    const goToList = () => {
        history.push("/trips/list");
    };






    return (
        <div>
            <p>Sou um login</p>
            <button onClick={goToList}>Login</button>
        </div>
    )
}
