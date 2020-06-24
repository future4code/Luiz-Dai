import React from 'react'
import { useHistory } from "react-router-dom"


export default function HomePage() {
    const history = useHistory();

    const goToAboutPage = () => {
        history.push("/login");
    };
    const goToForm = () => {
        history.push("/application-form");
    };





    return (
        <div>

            <p>Login</p>
            <button onClick={goToAboutPage}>Login</button>
            <p>Form</p>
            <button onClick={goToForm}>Form</button>

        </div>
    )
}
