import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Imagens } from './styles'
import Match from './Match'



function Profile() {
    const [perfil, setPerfil] = useState({})

    const perfilRecebido = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Luiz-Mitsuru-Dai/person")
            .then((response) => {
                setPerfil(response.data.profile)
            }).catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        perfilRecebido()
    }, [])

    return (
        <div>
            <button>Match</button>
            <h1>Astromach</h1>
            <Imagens src={perfil.photo} />
            <p>{perfil.name}, {perfil.age}</p>
            <p>{perfil.bio}</p>
            <button>X</button>
            <button>ok</button>
            <button>Reset</button>
            <Match id={perfil.id} />
        </div>
    );
}

export default Profile;