import React from "react";
import axios from "axios";

class PlayList extends React.Component {
    state = {
        playlists: [],
        playlistDigitada: "",
        musictrack: []
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
    };

    criaPlaylist = () => {
        const body = {
            name: this.state.playlistDigitada
        };

        axios
            .post(
                "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
                body,
                {
                    headers: {
                        Authorization: "Luiz Mitsuru Dai - Mello"
                    }
                }
            )
            .then(response => {
                console.log(response);
                alert("Criado com sucesso");
                this.setState({ playlistDigitada: "" });
                this.pegaPlaylist();
            })
            .catch(err => {
                console.log(err);
                alert("Falha ao criar usuário")
            });
    };
    deletePlaylist = (playlistId) => {

        axios
            .delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
                {
                    headers: {
                        Authorization: "Luiz Mitsuru Dai - Mello"
                    }
                }
            )
            .then(() => {
                alert("Usuário apagado com sucesso!");
                this.pegaPlaylist();
            })
            .catch(e => {
                alert("ERRO AO APAGAR USUARIO");
            });
    };
    getPlaylistTracks = (playlistId) => {
        axios
            .get(
                `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
                {
                    headers: {
                        Authorization: "Luiz Mitsuru Dai - Mello"
                    }
                }
            )
            .then((resposta) => {
                this.setState({ musictrack: resposta.data.result.tracks });

            })
            .catch(erro => {
                console.log(erro);
            });
    };

    onChangeInputValue = event => {
        this.setState({ playlistDigitada: event.target.value });
    };

    render() {
        return (
            <div className="App">
                <div>
                    <h1>PlayList</h1>
                    <input
                        value={this.state.playlistDigitada}
                        placeholder={"Nome da playlist"}
                        onChange={this.onChangeInputValue}
                    />
                    <button onClick={this.criaPlaylist}>Criar Playlist</button>
                </div>

                <div>
                    {this.state.playlists.map(playlist => {
                        return <p key={playlist.id}>{playlist.name}
                            <button onClick={() => this.deletePlaylist(playlist.id)}>DELETAR</button>
                            <button onClick={() => this.getPlaylistTracks(playlist.id)}>MOSTRAR</button></p>;
                    })}
                </div>


                {this.state.musictrack.map(music => {
                    return (
                        <div key={music.id}>
                            <li >{music.name}</li>
                            <iframe
                                title="teste"
                                src={music.url}
                                width="300"
                                height="80"
                                frameborder="0"
                                allowtransparency="true"
                                allow="encrypted-media"
                            ></iframe>
                        </div>)
                })
                }

            </div >
        );
    }
}

export default PlayList;