import React from "react";
import axios from "axios";

let playlistidSelect;
class Player extends React.Component {
    state = {
        createtrack: [{
            "name": "tarde",
            "artist": "sono",
            "url": "string"
        }],
        musicainserida: "",
        artistainserido: "",
        urlinserido: "",
        playlists: [],
    };

    componentDidMount = () => {
        this.pegaPlaylist();
    };

    pegaPlaylist = () => {
        axios
            .get(
                "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
                {
                    headers: {
                        Authorization: "Luiz Mitsuru Dai - Mello"
                    }
                }
            )
            .then(resposta => {
                this.setState({ playlists: resposta.data.result.list });
            })
            .catch(erro => {
                console.log(erro);
            });
    }
    createtrack = (playlistid) => {
        const body = {
            name: this.state.musicainserida,
            artist: this.state.artistainserido,
            url: "https://open.spotify.com/embed/track/" + this.state.urlinserido
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistid}/tracks`, body, {
            headers: {
                Authorization: "Luiz Mitsuru Dai - Mello"
            }
        }).then(() => { alert("Musica adicionada") })
    }





    onChangeInputName = event => {
        this.setState({ musicainserida: event.target.value });
    };
    onChangeInputArtist = event => {
        this.setState({ artistainserido: event.target.value });
    };
    onChangeInputUrl = event => {
        this.setState({ urlinserido: event.target.value });
    };
    onChangeSelectChange = event => {
        playlistidSelect = event.target.value
    };
    render() {
        return (
            <div className="Player">

                <h1>Adicione sua musica</h1>
                <select onChange={this.onChangeSelectChange}>
                    <option value=""></option>
                    {this.state.playlists.map((playlist) => {
                        return (
                            <option value={playlist.id}>{playlist.name}</option>
                        )
                    })}

                </select>
                <input
                    value={this.state.createtrack.name}
                    placeholder={"Nome da musica"}
                    onChange={this.onChangeInputName}
                />
                <input
                    value={this.state.createtrack.artist}
                    placeholder={"Nome do artista"}
                    onChange={this.onChangeInputArtist}
                />
                <input
                    value={this.state.createtrack.url}
                    placeholder={"URL da musica"}
                    onChange={this.onChangeInputUrl}
                />
                <button onClick={() => this.createtrack(playlistidSelect)}>Adicionar</button>

            </div>
        );
    }
}
export default Player;