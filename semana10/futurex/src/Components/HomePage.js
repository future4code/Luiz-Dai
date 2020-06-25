import React from 'react'
import { useHistory } from "react-router-dom"
import { Header, Body } from '../Styleds/Styled'

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

            <Header>
                <h1>FutureX </h1>
                <button onClick={goToAboutPage}>Login</button>
            </Header>
            <Body>
                <p>Form</p>
                <button onClick={goToForm}>Form</button>
            </Body>


        </div>
    )
}
