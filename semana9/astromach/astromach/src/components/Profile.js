import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Imagens, Headeres, Container } from './styles'
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
    const choosePerson = (value) => {
        const body = {
            id: perfil.id,
            choice: value
        }
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Luiz-Mitsuru-Dai/choose-person", body)
            .then((response) => {
                if (response.data.isMatch === true) {
                    alert("Deu Match!!!!")
                }
                perfilRecebido()
            }).catch((err) => {
                console.log(err)
            })
    }
    const removeAll = () => {
        const body = {
            id: "PatusZf4mHH6UoZfYC8I",

        }
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Luiz-Mitsuru-Dai/clear", body)
            .then(() => {
                perfilRecebido();
                alert("Resetado com sucesso")

            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <Headeres>
                <button>Match</button>
                <h1>Astromach</h1>
            </Headeres>
            <Imagens src={perfil.photo} />

            <p>{perfil.name}, {perfil.age}</p>
            <p>{perfil.bio}</p>
            <Container>
                <button onClick={() => choosePerson(false)} >X</button>
                <button onClick={() => choosePerson(true)}>ok</button>
                <button onClick={removeAll}>Reset</button>
            </Container>

            <Match id={perfil.id} />
        </div>
    );
}

export default Profile;