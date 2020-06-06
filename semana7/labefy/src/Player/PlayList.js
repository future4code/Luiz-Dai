import React from "react";
import axios from "axios";

class PlayList extends React.Component {
    state = {
        name: "",

    };

    handleNameChange = event => {
        const newNameValue = event.target.value;

        this.setState({ name: newNameValue });
    };


    handleCreateUser = () => {
        const axiosConfig = {
            headers: {
                Authorization: "Luiz Mitsuru Dai - Mello"
            }
        };

        const body = {
            name: this.state.name,

        };

        axios
            .post(
                "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
                body,
                axiosConfig
            )
            .then(() => {
                alert(`Usuário ${this.state.name} criado com sucesso!`);
                this.setState({ name: "" });
            })
            .catch(error => {
                alert("Erro ao criar a playlist");
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                <h1>PlayList</h1>
                <input
                    placeholder="PlayList"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />

                <button onClick={this.handleCreateUser}>Criar</button>
            </div>
        );
    }
}

export default PlayList;
