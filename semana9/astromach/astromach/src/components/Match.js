import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Matches(props) {
    const [matches, setMatches] = useState([])

    const getMatches = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Luiz-Mitsuru-Dai/matches")
            .then((response) => {
                setMatches(response.data.matches)
            }).catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getMatches()
    }, [props.id])

    const pegaMatch = matches.map((info) => {
        return (
            <div>
                <img src={info.photo} alt="imagem" />
                <p>{info.name}</p>
            </div>

        )
    })

    return (
        <div>
            {pegaMatch}
            <button>Voltar</button>
        </div>
    )
}